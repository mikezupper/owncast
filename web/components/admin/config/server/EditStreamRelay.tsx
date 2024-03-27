import { Button } from 'antd';
import classNames from 'classnames';
import React, { useContext, useState, useEffect } from 'react';
import { UpdateArgs } from '../../../../types/config-section';
import { ServerStatusContext } from '../../../../utils/server-status-context';
import { AlertMessageContext } from '../../../../utils/alert-message-context';

import {
  postConfigUpdateToAPI,
  RESET_TIMEOUT,
  STREAM_RELAY_FIELDS_INFO,
  API_STREAM_RELAY_INFO,
} from '../../../../utils/config-constants';
import {
  createInputStatus,
  StatusState,
  STATUS_ERROR,
  STATUS_PROCESSING,
  STATUS_SUCCESS,
} from '../../../../utils/input-statuses';
import { TextField } from '../../TextField';
import { FormStatusIndicator } from '../../FormStatusIndicator';
import { isValidUrl } from '../../../../utils/validators';
import { ToggleSwitch } from '../../ToggleSwitch';

// we could probably add more detailed checks here
// `currentValues` is what's currently in the global store and in the db
function checkSaveable(formValues: any, currentValues: any) {
  const { rtmpUrl, hlsUrl, enabled } = formValues;
  // if fields are filled out and different from what's in store, then return true
  if (enabled) {
    if (!!hlsUrl && isValidUrl(hlsUrl) && !!rtmpUrl) {
      if (
        enabled !== currentValues?.enabled ||
        hlsUrl !== currentValues?.hlsUrl ||
        rtmpUrl !== currentValues?.rtmpUrl
      ) {
        return true;
      }
    }
  } else if (enabled !== currentValues.enabled) {
    return true;
  }
  return false;
}

// eslint-disable-next-line react/function-component-definition
export default function EditStreamRelay() {
  const [formDataValues, setFormDataValues] = useState(null);
  const [submitStatus, setSubmitStatus] = useState<StatusState>(null);

  const [shouldDisplayForm, setShouldDisplayForm] = useState(false);
  const serverStatusData = useContext(ServerStatusContext);
  const { serverConfig, setFieldInConfigState } = serverStatusData || {};

  const { setMessage: setAlertMessage } = useContext(AlertMessageContext);

  const { streamRelay } = serverConfig;
  const { rtmpUrl, hlsUrl, enabled } = streamRelay;

  useEffect(() => {
    setFormDataValues({
      rtmpUrl,
      hlsUrl,
      enabled,
    });
    setShouldDisplayForm(enabled);
  }, [streamRelay]);

  if (!formDataValues) {
    return null;
  }

  let resetTimer = null;
  const resetStates = () => {
    setSubmitStatus(null);
    resetTimer = null;
    clearTimeout(resetTimer);
  };

  // update individual values in state
  const handleFieldChange = ({ fieldName, value }: UpdateArgs) => {
    setFormDataValues({
      ...formDataValues,
      [fieldName]: value,
    });
  };

  // posts the whole state
  const handleSave = async () => {
    setSubmitStatus(createInputStatus(STATUS_PROCESSING));
    const postValue = formDataValues;
    if (postValue?.servingEndpoint) {
      postValue.servingEndpoint = postValue?.servingEndpoint?.replace(/\/+$/g, '');
    }

    await postConfigUpdateToAPI({
      apiPath: API_STREAM_RELAY_INFO,
      data: { value: postValue },
      onSuccess: () => {
        setFieldInConfigState({ fieldName: 'streamRelay', value: postValue, path: '' });
        setSubmitStatus(createInputStatus(STATUS_SUCCESS, 'Updated.'));
        resetTimer = setTimeout(resetStates, RESET_TIMEOUT);
        setAlertMessage(
          'Changing your stream relay configuration will take place the next time you start a new stream.',
        );
      },
      onError: (message: string) => {
        setSubmitStatus(createInputStatus(STATUS_ERROR, message));
        resetTimer = setTimeout(resetStates, RESET_TIMEOUT);
      },
    });
  };

  // toggle switch.
  const handleSwitchChange = (streamRelayEnable: boolean) => {
    setShouldDisplayForm(streamRelayEnable);
    handleFieldChange({ fieldName: 'enabled', value: streamRelayEnable });
  };

  const containerClass = classNames({
    'edit-sr-container': true,
    'form-module': true,
    enabled: shouldDisplayForm,
  });

  const isSaveable = checkSaveable(formDataValues, streamRelay);

  return (
    <div className={containerClass}>
      <div className="enable-switch">
        <ToggleSwitch
          apiPath=""
          fieldName="enabled"
          label="Stream Relay Configuration"
          checked={formDataValues.enabled}
          onChange={handleSwitchChange}
        />
      </div>

      <div className="form-fields">
        <div className="field-container">
          <TextField
            {...STREAM_RELAY_FIELDS_INFO.rtmpUrl}
            value={formDataValues.rtmpUrl}
            onChange={handleFieldChange}
          />
        </div>
        <div className="field-container">
          <TextField
            {...STREAM_RELAY_FIELDS_INFO.hlsUrl}
            value={formDataValues.hlsUrl}
            onChange={handleFieldChange}
          />
        </div>
      </div>

      <div className="button-container">
        <Button type="primary" onClick={handleSave} disabled={!isSaveable}>
          Save
        </Button>
        <FormStatusIndicator status={submitStatus} />
      </div>
    </div>
  );
}
