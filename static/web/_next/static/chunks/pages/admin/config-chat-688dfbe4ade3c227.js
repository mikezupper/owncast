(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1591],{94594:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var a=t(87462),s=t(4942),l=t(50888),c=t(94184),i=t.n(c),r=t(97685),o=t(91),d=t(67294),u=t(21770),f=t(15105),h=d.forwardRef((function(e,n){var t,a=e.prefixCls,l=void 0===a?"rc-switch":a,c=e.className,h=e.checked,m=e.defaultChecked,g=e.disabled,v=e.loadingIcon,p=e.checkedChildren,b=e.unCheckedChildren,C=e.onClick,x=e.onChange,N=e.onKeyDown,k=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),Z=(0,u.Z)(!1,{value:h,defaultValue:m}),j=(0,r.Z)(Z,2),E=j[0],y=j[1];function w(e,n){var t=E;return g||(y(t=e),null===x||void 0===x||x(t,n)),t}var S=i()(l,c,(t={},(0,s.Z)(t,"".concat(l,"-checked"),E),(0,s.Z)(t,"".concat(l,"-disabled"),g),t));return d.createElement("button",Object.assign({},k,{type:"button",role:"switch","aria-checked":E,disabled:g,className:S,ref:n,onKeyDown:function(e){e.which===f.Z.LEFT?w(!1,e):e.which===f.Z.RIGHT&&w(!0,e),null===N||void 0===N||N(e)},onClick:function(e){var n=w(!E,e);null===C||void 0===C||C(n,e)}}),v,d.createElement("span",{className:"".concat(l,"-inner")},E?p:b))}));h.displayName="Switch";var m=h,g=t(53124),v=t(98866),p=t(97647),b=t(68349),C=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)n.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]])}return t},x=d.forwardRef((function(e,n){var t,c=e.prefixCls,r=e.size,o=e.disabled,u=e.loading,f=e.className,h=void 0===f?"":f,x=C(e,["prefixCls","size","disabled","loading","className"]),N=d.useContext(g.E_),k=N.getPrefixCls,Z=N.direction,j=d.useContext(p.Z),E=d.useContext(v.Z),y=o||E||u,w=k("switch",c),S=d.createElement("div",{className:"".concat(w,"-handle")},u&&d.createElement(l.Z,{className:"".concat(w,"-loading-icon")})),O=i()((t={},(0,s.Z)(t,"".concat(w,"-small"),"small"===(r||j)),(0,s.Z)(t,"".concat(w,"-loading"),u),(0,s.Z)(t,"".concat(w,"-rtl"),"rtl"===Z),t),h);return d.createElement(b.Z,{insertExtraNode:!0},d.createElement(m,(0,a.Z)({},x,{prefixCls:w,className:O,disabled:y,ref:n,loadingIcon:S})))}));x.__ANT_SWITCH=!0;var N=x},20550:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var a=t(4942),s=t(87462),l=t(97685),c=t(97937),i=t(94184),r=t.n(i),o=t(98423),d=t(67294),u=t(53124),f=t(98787),h=t(68349),m=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)n.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]])}return t},g=function(e){var n,t=e.prefixCls,l=e.className,c=e.checked,i=e.onChange,o=e.onClick,f=m(e,["prefixCls","className","checked","onChange","onClick"]),h=(0,d.useContext(u.E_).getPrefixCls)("tag",t),g=r()(h,(n={},(0,a.Z)(n,"".concat(h,"-checkable"),!0),(0,a.Z)(n,"".concat(h,"-checkable-checked"),c),n),l);return d.createElement("span",(0,s.Z)({},f,{className:g,onClick:function(e){null===i||void 0===i||i(!c),null===o||void 0===o||o(e)}}))},v=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)n.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]])}return t},p=new RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(f.E.join("|"),")$")),C=function(e,n){var t,i=e.prefixCls,f=e.className,m=e.style,g=e.children,C=e.icon,x=e.color,N=e.onClose,k=e.closeIcon,Z=e.closable,j=void 0!==Z&&Z,E=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),y=d.useContext(u.E_),w=y.getPrefixCls,S=y.direction,O=d.useState(!0),U=(0,l.Z)(O,2),P=U[0],I=U[1];d.useEffect((function(){"visible"in E&&I(E.visible)}),[E.visible]);var _=function(){return!!x&&(p.test(x)||b.test(x))},M=(0,s.Z)({backgroundColor:x&&!_()?x:void 0},m),T=_(),D=w("tag",i),J=r()(D,(t={},(0,a.Z)(t,"".concat(D,"-").concat(x),T),(0,a.Z)(t,"".concat(D,"-has-color"),x&&!T),(0,a.Z)(t,"".concat(D,"-hidden"),!P),(0,a.Z)(t,"".concat(D,"-rtl"),"rtl"===S),t),f),A=function(e){e.stopPropagation(),null===N||void 0===N||N(e),e.defaultPrevented||"visible"in E||I(!1)},F="onClick"in E||g&&"a"===g.type,R=(0,o.Z)(E,["visible"]),z=C||null,L=z?d.createElement(d.Fragment,null,z,d.createElement("span",null,g)):g,Y=d.createElement("span",(0,s.Z)({},R,{ref:n,className:J,style:M}),L,j?k?d.createElement("span",{className:"".concat(D,"-close-icon"),onClick:A},k):d.createElement(c.Z,{className:"".concat(D,"-close-icon"),onClick:A}):null);return F?d.createElement(h.Z,null,Y):Y},x=d.forwardRef(C);x.CheckableTag=g;var N=x},42011:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-chat",function(){return t(71664)}])},80939:function(e,n,t){"use strict";t.d(n,{Q:function(){return d},Y:function(){return u}});var a=t(85893),s=t(67294),l=t(84485),c=t(20550),i=t(24389),r=t(25521),o=l.Z.Title,d="#5a67d8",u=function(e){var n=e.title,t=e.description,l=e.placeholder,u=e.maxLength,f=e.values,h=e.handleDeleteIndex,m=e.handleCreateString,g=e.submitStatus,v=e.continuousStatusMessage,p=(0,s.useState)(""),b=p[0],C=p[1];return(0,a.jsxs)("div",{className:"edit-string-array-container",children:[(0,a.jsx)(o,{level:3,className:"section-title",children:n}),(0,a.jsx)("p",{className:"description",children:t}),(0,a.jsx)("div",{className:"edit-current-strings",children:null===f||void 0===f?void 0:f.map((function(e,n){return(0,a.jsx)(c.Z,{closable:!0,onClose:function(){h(n)},color:d,children:e},"tag-".concat(e,"-").concat(n))}))}),v&&(0,a.jsx)("div",{className:"continuous-status-section",children:(0,a.jsx)(r.E,{status:v})}),(0,a.jsx)("div",{className:"add-new-string-section",children:(0,a.jsx)(i.nv,{fieldName:"string-input",value:b,onChange:function(e){var n=e.value;C(n)},onPressEnter:function(){var e=b.trim();m(e),C("")},maxLength:u,placeholder:l,status:g})})]})};u.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},3664:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var a=t(47568),s=t(34051),l=t.n(s),c=t(85893),i=t(67294),r=t(94594),o=t(83192),d=t(25521),u=t(25964),f=t(35159),h=function(e){var n=e.apiPath,t=e.checked,s=e.reversed,h=void 0!==s&&s,m=e.configPath,g=void 0===m?"":m,v=e.disabled,p=void 0!==v&&v,b=e.fieldName,C=e.label,x=e.tip,N=e.useSubmit,k=e.onChange,Z=(0,i.useState)(null),j=Z[0],E=Z[1],y=null,w=((0,i.useContext)(f.aC)||{}).setFieldInConfigState,S=function(){E(null),clearTimeout(y),y=null},O=function(){var e=(0,a.Z)(l().mark((function e(t){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!N){e.next=6;break}return E((0,o.kg)(o.Jk)),a=h?!t:t,e.next=5,(0,u.Si)({apiPath:n,data:{value:a},onSuccess:function(){w({fieldName:b,value:a,path:g}),E((0,o.kg)(o.zv))},onError:function(e){E((0,o.kg)(o.Un,"There was an error: ".concat(e)))}});case 5:y=setTimeout(S,u.sI);case 6:k&&k(t);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),U=null!==j&&j.type===o.Jk;return(0,c.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[C&&(0,c.jsx)("div",{className:"label-side",children:(0,c.jsx)("span",{className:"formfield-label",children:C})}),(0,c.jsxs)("div",{className:"input-side",children:[(0,c.jsxs)("div",{className:"input-group",children:[(0,c.jsx)(r.Z,{className:"switch field-".concat(b),loading:U,onChange:O,defaultChecked:t,checked:t,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:p}),(0,c.jsx)(d.E,{status:j})]}),(0,c.jsx)("p",{className:"field-tip",children:x})]})]})};h.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},71664:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var a=t(14924),s=t(26042),l=t(69396),c=t(85893),i=t(84485),r=t(67294),o=t(24389),d=t(45200),u=t(3664),f=t(80939),h=t(83192),m=t(25964),g=t(35159);function v(){var e,n=function(){j(null)},t=function(){(0,m.Si)({apiPath:m.CJ,data:{value:x.forbiddenUsernames},onSuccess:function(){U({fieldName:"forbiddenUsernames",value:x.forbiddenUsernames}),j((0,h.kg)(h.zv)),setTimeout(n,m.sI)},onError:function(e){j((0,h.kg)(h.Un,e)),setTimeout(n,m.sI)}})},v=function(){w(null)},p=function(){(0,m.Si)({apiPath:m.cf,data:{value:x.suggestedUsernames},onSuccess:function(){U({fieldName:"suggestedUsernames",value:x.suggestedUsernames}),w((0,h.kg)(h.zv)),setTimeout(v,m.sI)},onError:function(e){j((0,h.kg)(h.Un,e)),setTimeout(v,m.sI)}})},b=i.Z.Title,C=(0,r.useState)(null),x=C[0],N=C[1],k=(0,r.useState)(null),Z=k[0],j=k[1],E=(0,r.useState)(null),y=E[0],w=E[1],S=(0,r.useContext)(g.aC)||{},O=S.serverConfig,U=S.setFieldInConfigState,P=O.chatDisabled,I=O.chatJoinMessagesEnabled,_=O.forbiddenUsernames,M=O.instanceDetails,T=O.suggestedUsernames,D=O.chatEstablishedUserMode,J=M.welcomeMessage,A=function(e){var n=e.fieldName,t=e.value;N((0,l.Z)((0,s.Z)({},x),(0,a.Z)({},n,t)))};return(0,r.useEffect)((function(){N({chatDisabled:P,chatJoinMessagesEnabled:I,forbiddenUsernames:_,suggestedUsernames:T,welcomeMessage:J,chatEstablishedUserMode:D})}),[O]),x?(0,c.jsxs)("div",{className:"config-server-details-form",children:[(0,c.jsx)(b,{children:"Chat Settings"}),(0,c.jsxs)("div",{className:"form-module config-server-details-container",children:[(0,c.jsx)(u.Z,(0,l.Z)((0,s.Z)({fieldName:"chatDisabled"},m.yj),{checked:!x.chatDisabled,reversed:!0,onChange:function(e){A({fieldName:"chatDisabled",value:!e})}})),(0,c.jsx)(u.Z,(0,l.Z)((0,s.Z)({fieldName:"chatJoinMessagesEnabled"},m.kB),{checked:x.chatJoinMessagesEnabled,onChange:function(e){A({fieldName:"chatJoinMessagesEnabled",value:e})}})),(0,c.jsx)(u.Z,(0,l.Z)((0,s.Z)({fieldName:"establishedUserMode"},m.dj),{checked:x.chatEstablishedUserMode,onChange:function(e){A({fieldName:"chatEstablishedUserMode",value:e})}})),(0,c.jsx)(d.$7,(0,l.Z)((0,s.Z)({fieldName:"welcomeMessage"},m.IX),{type:o.Sk,value:x.welcomeMessage,initialValue:J,onChange:A})),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)(f.Y,{title:m.Dg.label,placeholder:m.Dg.placeholder,description:m.Dg.tip,values:x.forbiddenUsernames,handleDeleteIndex:function(e){x.forbiddenUsernames.splice(e,1),t()},handleCreateString:function(e){x.forbiddenUsernames.push(e),A({fieldName:"forbiddenUsernames",value:x.forbiddenUsernames}),t()},submitStatus:Z}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)(f.Y,{title:m.AN.label,placeholder:m.AN.placeholder,description:m.AN.tip,values:x.suggestedUsernames,handleDeleteIndex:function(e){x.suggestedUsernames.splice(e,1),p()},handleCreateString:function(e){x.suggestedUsernames.push(e),A({fieldName:"suggestedUsernames",value:x.suggestedUsernames}),p()},submitStatus:y,continuousStatusMessage:(e=x.suggestedUsernames.length,0===e?(0,h.kg)("success",m.AN.no_entries):e>0&&e<10?(0,h.kg)("warning",m.AN.min_not_reached):null)})]})]}):null}}},function(e){e.O(0,[9774,2888,179],(function(){return n=42011,e(e.s=n);var n}));var n=e.O();_N_E=n}]);