(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(40434)}])},40434:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return En}});var r=t(85893),o=t(97183),i=t(4480),s=t(9008),a=t.n(s),c=t(67294),l=t(1899),u=t(14924),d=t(828),h=t(2944),p=t(11382),x=t(94184),f=t.n(x),m=t(73682),v=t(28105),g=t.n(v),j=function(e){var n=e.content;return(0,r.jsx)("div",{className:g().pageContentContainer,children:(0,r.jsx)("div",{className:g().customPageContent,dangerouslySetInnerHTML:{__html:n}})})},_=t(83818),w=t(47568),y=t(34051),b=t.n(y),C=t(25968),N=t(6226),k=t(3698),Z=t(24093),S=t(40305),A=t.n(S),T=function(e){var n=e.follower;return(0,r.jsx)("div",{className:A().follower,children:(0,r.jsx)("a",{href:n.link,target:"_blank",rel:"noreferrer",children:(0,r.jsxs)(C.Z,{wrap:!1,children:[(0,r.jsx)(N.Z,{span:6,children:(0,r.jsx)(Z.C,{src:n.image,alt:"Avatar",className:A().avatar,children:(0,r.jsx)("img",{src:"/logo",alt:"Logo",className:A().placeholder})})}),(0,r.jsxs)(N.Z,{children:[(0,r.jsx)(C.Z,{children:n.name}),(0,r.jsx)(C.Z,{className:A().account,children:n.username})]})]})})})},F=function(){var e=(0,c.useState)([]),n=e[0],t=e[1],o=(0,c.useState)(0),i=o[0],s=o[1],a=(0,c.useState)(1),l=a[0],u=a[1],d=Math.ceil(i/24),h=function(){var e=(0,w.Z)(b().mark((function e(){var n,r;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("/api/followers","?page=").concat(l));case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,t(r.response),s(r.total),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){h()}),[]),(0,c.useEffect)((function(){h()}),[l]);var p=(0,r.jsx)("div",{children:"A message explaining how to follow goes here since there are no followers."});return(null===n||void 0===n?void 0:n.length)?(0,r.jsxs)("div",{className:A().followers,children:[(0,r.jsx)(C.Z,{wrap:!0,gutter:[10,10],justify:"space-around",children:n.map((function(e){return(0,r.jsx)(N.Z,{children:(0,r.jsx)(T,{follower:e},e.link)})}))}),(0,r.jsx)(k.Z,{current:l,pageSize:24,total:d||1,onChange:function(e){u(e)},hideOnSinglePage:!0})]}):p},I=t(63291),L=t.n(I),M=t(87412),E=t(50143),P=t(75347),H=t.n(P),J=function(){var e=(0,i.sJ)(l.w4),n=(0,i.sJ)(l.uy),t=(0,i.sJ)(l.fE),o=(0,i.sJ)(l.pH);return(0,r.jsx)(M.ZP,{className:H().root,collapsedWidth:0,width:320,children:(0,r.jsx)(E.u,{messages:o,usernameToHighlight:e,chatUserId:n,isModerator:t})})},O=t(35603),R=t.n(O),z=function(e){var n=e.version;return(0,r.jsxs)("div",{className:R().footer,children:[(0,r.jsxs)("div",{className:R().text,children:["Powered by ",(0,r.jsx)("a",{href:"https://owncast.online",children:n})]}),(0,r.jsxs)("div",{className:R().links,children:[(0,r.jsx)("div",{className:R().item,children:(0,r.jsx)("a",{href:"https://owncast.online/docs",target:"_blank",rel:"noreferrer",children:"Documentation"})}),(0,r.jsx)("div",{className:R().item,children:(0,r.jsx)("a",{href:"https://owncast.online/help",target:"_blank",rel:"noreferrer",children:"Contribute"})}),(0,r.jsx)("div",{className:R().item,children:(0,r.jsx)("a",{href:"https://github.com/owncast/owncast",target:"_blank",rel:"noreferrer",children:"Source"})})]})]})},B=t(69767),U=t.n(B),V=function(e){var n=e.children;return(0,r.jsx)("div",{className:"".concat(U().row),children:n})},D=t(71577),Y=t(85402),K=t(26303),q=t(78890),G=t.n(q),Q=function(e){var n=e.title,t=e.url,o=e.visible,i=e.handleOk,s=e.handleCancel,a=e.afterClose,l=e.height,u=e.width,d=e.children,h=(0,c.useState)(!!t),x=h[0],f=h[1],m={padding:"0px",minHeight:l},v=t&&(0,r.jsx)("iframe",{title:n,src:t,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,onLoad:function(){return f(!1)}}),g=x?"none":"inline";return(0,r.jsx)(Y.Z,{title:n,visible:o,onOk:i,onCancel:s,afterClose:a,bodyStyle:m,width:u,zIndex:9999,footer:null,centered:!0,destroyOnClose:!0,children:(0,r.jsxs)(r.Fragment,{children:[x&&(0,r.jsx)(K.Z,{active:x,style:{padding:"10px"},paragraph:{rows:10}}),v&&(0,r.jsx)("div",{style:{display:g},children:v}),d&&(0,r.jsx)("div",{className:G().content,children:d}),x&&(0,r.jsx)(p.Z,{className:G().spinner,spinning:x,size:"large"})]})})};Q.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0,height:"40vh",width:"70%"};var W=t(36879),X=t.n(W),$=function(e){var n=e.action,t=n.url,o=n.title,i=n.description,s=n.icon,a=n.color,l=n.openExternally,u=e.primary,d=void 0===u||u,h=(0,c.useState)(!1),p=h[0],x=h[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(D.Z,{type:d?"primary":"default",className:"".concat(X().button),onClick:function(){l?window.open(t,"_blank"):x(!0)},style:{backgroundColor:a},children:[(0,r.jsx)("img",{src:s,className:"".concat(X().icon),alt:i}),o]}),(0,r.jsx)(Q,{title:i||o,url:t,visible:p,height:"80vh",handleCancel:function(){return x(!1)}})]})},ee=t(55241),ne=t(97937),te=t(18668),re=t.n(te),oe=function(e){var n=e.children,t=e.visible,o=e.notificationClicked,i=e.notificationClosed,s=(0,c.useState)(t),a=s[0],l=s[1],u=(0,c.useState)(!1),d=u[0],h=u[1];(0,c.useEffect)((function(){l(t)}),[t]),(0,c.useEffect)((function(){h(!0)}),[]);var p=(0,r.jsx)("div",{className:re().title,children:"Stay updated!"}),x=function(e){e.stopPropagation(),o()},f=(0,r.jsxs)("div",{onClick:x,onKeyDown:x,role:"menuitem",tabIndex:0,children:[(0,r.jsx)("button",{type:"button",className:re().closebutton,onClick:function(e){e.stopPropagation(),l(!1),i()},children:(0,r.jsx)(ne.Z,{})}),(0,r.jsxs)("div",{className:re().contentbutton,children:["Click and never miss",(0,r.jsx)("br",{}),"future streams!"]})]});return d&&(0,r.jsx)(ee.Z,{placement:"topLeft",defaultVisible:a,visible:a,destroyTooltipOnHide:!0,title:p,content:f,overlayInnerStyle:{borderRadius:"5px",cursor:"pointer",paddingTop:"10px",paddingRight:"10px",fontSize:"16px"},children:n})},ie=t(1698),se=t(26042),ae=t(69396),ce=t(34447),le=t(26713),ue=t(14670),de=t(69677),he=t(13840),pe=t.n(he);var xe=function(e){var n=e.handleClose,t=e.account,o=e.name,i=(0,c.useState)(null),s=i[0],a=i[1],l=(0,c.useState)(!1),u=l[0],d=l[1],h=(0,c.useState)(!1),x=h[0],f=h[1],m=(0,c.useState)(null),v=m[0],g=m[1],j=function(e){a(e),!function(e){var n=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())}(e)?d(!1):d(!0)},_=function(){var e=(0,w.Z)(b().mark((function e(){var t,r,o,i;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return");case 2:return f(!0),e.prev=3,t=s.replace(/^@+/,""),r={account:t},e.next=8,fetch("/api/remotefollow",{method:"POST",body:JSON.stringify(r)});case 8:return o=e.sent,e.next=11,o.json();case 11:if((i=e.sent).redirectUrl&&(window.open(i.redirectUrl,"_blank"),n()),i.success){e.next=17;break}return g(i.message),f(!1),e.abrupt("return");case 17:if(i.redirectUrl){e.next=21;break}return g("Unable to follow."),f(!1),e.abrupt("return");case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(3),g(e.t0.message);case 26:f(!1);case 27:case"end":return e.stop()}}),e,null,[[3,23]])})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(le.Z,{direction:"vertical",children:[(0,r.jsxs)("div",{className:pe().header,children:["By following this stream you'll get notified on the Fediverse when it goes live. Now is a great time to",(0,r.jsx)("a",{href:"https://owncast.online/join-fediverse",target:"_blank",rel:"noreferrer",children:"learn about the Fediverse"}),"if it's new to you."]}),(0,r.jsxs)(p.Z,{spinning:x,children:[v&&(0,r.jsx)(ue.Z,{message:"Follow Error",description:v,type:"error",showIcon:!0}),(0,r.jsxs)("div",{className:pe().account,children:[(0,r.jsx)("img",{src:"/logo",alt:"logo",className:pe().logo}),(0,r.jsxs)("div",{className:pe().username,children:[(0,r.jsx)("div",{className:pe().name,children:o}),(0,r.jsx)("div",{children:t})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:pe().instructions,children:"Enter your username @server to follow"}),(0,r.jsx)(de.Z,{value:t,size:"large",onChange:function(e){return j(e.target.value)},placeholder:"Your fediverse account @account@server",defaultValue:t}),(0,r.jsx)("div",{className:pe().footer,children:"You'll be redirected to your Fediverse server and asked to confirm the action."})]}),(0,r.jsxs)(le.Z,{className:pe().buttons,children:[(0,r.jsx)(D.Z,{disabled:!u,type:"primary",onClick:_,children:"Follow"}),(0,r.jsx)(D.Z,{onClick:function(){window.open("https://owncast.online/join-fediverse","_blank")},type:"primary",children:"Join the Fediverse"})]})]})]})},fe=function(e){var n=(0,c.useState)(!1),t=n[0],o=n[1],s=(0,i.sJ)(l.g1),a=s.name,u=s.federation.account;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D.Z,(0,ae.Z)((0,se.Z)({},e),{type:"primary",className:X().button,icon:(0,r.jsx)(ce.Z,{}),onClick:function(){return o(!0)},children:"Follow"})),(0,r.jsx)(Q,{title:"Follow ".concat(a),visible:t,handleCancel:function(){return o(!1)},width:"550px",height:"200px",children:(0,r.jsx)(xe,{account:u,name:a,handleClose:function(){return o(!1)}})})]})},me=t(71578),ve=function(e){var n=e.onClick;return(0,r.jsx)(D.Z,{type:"primary",className:"".concat(X().button),icon:(0,r.jsx)(me.Z,{}),onClick:n,children:"Notify"})},ge=t(84485);function je(e,n,t){return _e.apply(this,arguments)}function _e(){return(_e=(0,w.Z)(b().mark((function e(n,t,r){var o;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/notifications/register",o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({channel:n,destination:t})},e.prev=2,e.next=5,fetch("".concat("/api/notifications/register","?accessToken=").concat(r),o);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}function we(e){for(var n=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),t=window.atob(n),r=new Uint8Array(t.length),o=0;o<t.length;++o)r[o]=t.charCodeAt(o);return r}function ye(e){return be.apply(this,arguments)}function be(){return(be=(0,w.Z)(b().mark((function e(n){var t,r;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.ready;case 2:return t=e.sent,e.next=5,t.pushManager.getSubscription();case 5:if(r=e.sent){e.next=10;break}return e.next=9,t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:we(n)});case 9:r=e.sent;case 10:return e.abrupt("return",JSON.stringify(r));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ce=t(5225),Ne=t.n(Ce);function ke(){return"serviceWorker"in navigator&&"PushManager"in window}var Ze=ge.Z.Title,Se=function(){return(0,r.jsx)("div",{children:"Browser notifications are not supported in your browser."})},Ae=function(){return(0,r.jsx)("div",{children:"Notifications enabled"})},Te=function(e){var n=e.start;return(0,r.jsx)("div",{id:"browser-push-preview-box",className:Ne().pushPreview,children:(0,r.jsxs)("div",{className:Ne().inner,children:[(0,r.jsxs)("div",{className:Ne().title,children:[window.location.toString()," wants to"]}),(0,r.jsxs)("div",{className:Ne().permissionLine,children:[(0,r.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M14 12.3333V13H2V12.3333L3.33333 11V7C3.33333 4.93333 4.68667 3.11333 6.66667 2.52667C6.66667 2.46 6.66667 2.4 6.66667 2.33333C6.66667 1.97971 6.80714 1.64057 7.05719 1.39052C7.30724 1.14048 7.64638 1 8 1C8.35362 1 8.69276 1.14048 8.94281 1.39052C9.19286 1.64057 9.33333 1.97971 9.33333 2.33333C9.33333 2.4 9.33333 2.46 9.33333 2.52667C11.3133 3.11333 12.6667 4.93333 12.6667 7V11L14 12.3333ZM9.33333 13.6667C9.33333 14.0203 9.19286 14.3594 8.94281 14.6095C8.69276 14.8595 8.35362 15 8 15C7.64638 15 7.30724 14.8595 7.05719 14.6095C6.80714 14.3594 6.66667 14.0203 6.66667 13.6667",fill:"#676670"})}),"Show notifications"]}),(0,r.jsxs)("div",{className:Ne().buttonRow,children:[(0,r.jsx)(D.Z,{type:"primary",className:Ne().allow,onClick:function(){n()},children:"Allow"}),(0,r.jsx)("button",{type:"button",className:Ne().disabled,children:"Block"})]})]})})},Fe=function(){var e=(0,c.useState)(null),n=e[0],t=e[1],o=(0,i.sJ)(l.FI),s=(0,i.sJ)(l.g1),a=(0,c.useState)(!1),u=a[0],d=a[1],h=ke()&&"default"!==Notification.permission,x=s.notifications.browser,f=x.publicKey,m=x.enabled&&ke();if(h)return(0,r.jsx)(Ae,{});var v=function(){var e=(0,w.Z)(b().mark((function e(){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ke()||"default"===Notification.permission){e.next=2;break}return e.abrupt("return");case 2:return d(!0),e.prev=3,e.next=6,ye(f);case 6:je("BROWSER_PUSH_NOTIFICATION",e.sent,o),t(null),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),t("Error registering for live notifications: ".concat(e.t0.message,". Make sure you're not inside a private browser environment or have previously disabled notifications for this stream."));case 14:d(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return m?(0,r.jsxs)(p.Z,{spinning:u,children:[(0,r.jsxs)(C.Z,{align:"top",children:[(0,r.jsx)(Ze,{children:"Browser Notifications"}),"Get notified right in the browser each time this stream goes live. Blah blah blah more description text goes here."]}),(0,r.jsx)(C.Z,{children:n}),(0,r.jsx)(C.Z,{align:"top",children:(0,r.jsx)(N.Z,{span:12,children:(0,r.jsx)(Te,{start:function(){return v()}})})})]}):(0,r.jsx)(Se,{})},Ie=t(79216),Le=t(7918),Me=t.n(Le),Ee=function(e){var n=e.src;return(0,r.jsx)("div",{className:Me().root,children:(0,r.jsx)("div",{className:Me().container,children:(0,r.jsx)(Ie.Z,{src:n,alt:"Logo",className:Me().image,rootClassName:Me().image})})})},Pe=t(52740),He=t.n(Pe),Je=function(e){var n=e.links;return(0,r.jsx)("div",{className:He().links,children:n.map((function(e){return(0,r.jsx)("a",{href:e.url,className:He().link,target:"_blank",rel:"noreferrer",children:(0,r.jsx)("img",{src:e.icon,alt:e.platform,title:e.platform,className:He().link})},e.platform)}))})},Oe=t(74688),Re=t.n(Oe),ze=function(e){var n=e.name,t=e.title,o=e.summary,i=e.logo,s=e.tags,a=e.links;return(0,r.jsx)("div",{className:Re().root,children:(0,r.jsxs)("div",{className:Re().logoTitleSection,children:[(0,r.jsx)("div",{className:Re().logo,children:(0,r.jsx)(Ee,{src:i})}),(0,r.jsxs)("div",{className:Re().titleSection,children:[(0,r.jsx)("div",{className:f()(Re().title,Re().row),children:n}),(0,r.jsx)("div",{className:f()(Re().subtitle,Re().row),children:t||o}),(0,r.jsx)("div",{className:f()(Re().tagList,Re().row),children:s.length>0&&s.map((function(e){return(0,r.jsxs)("span",{children:["#",e,"\xa0"]},e)}))}),(0,r.jsx)("div",{className:f()(Re().socialLinks,Re().row),children:(0,r.jsx)(Je,{links:a})})]})]})})},Be=t(36887),Ue=h.Z.TabPane,Ve=o.Z.Content,De=function(){var e=(0,i.sJ)(l.Q),n=(0,i.sJ)(l.g1),t=(0,i.sJ)(l.pT),o=(0,d.Z)((0,i.FV)(l.hz),2),s=o[0],a=o[1],x=(0,i.sJ)(l.YW),v=(0,i.sJ)(l.RI),g=v.viewerCount,w=v.lastConnectTime,y=v.lastDisconnectTime,b=v.streamTitle,C=n.extraPageContent,N=n.version,k=n.name,Z=n.summary,S=n.socialHandles,A=n.tags,T=n.externalActions,I=n.offlineMessage,M=(0,c.useState)(!1),E=M[0],P=M[1],H=(0,c.useState)(!1),O=H[0],R=H[1],B=T.map((function(e){return(0,r.jsx)($,{action:e},e.url)})),U=function(){R(!1),P(!1),(0,m.qQ)(m.dA.hasDisplayedNotificationModal,!0)},D=function(){var e=window.innerWidth;void 0===s&&a(e<=768),!s&&e<=768&&a(!0),s&&e>768&&a(!1)};(0,c.useEffect)((function(){!function(){var e=parseInt((0,m.$o)(m.dA.userVisitCount),10);Number.isNaN(e)&&(e=0),(0,m.qQ)(m.dA.userVisitCount,e+1),e>2&&!(0,m.$o)(m.dA.hasDisplayedNotificationModal)&&P(!0)}(),D(),window.addEventListener("resize",D)}),[]);var Y=f()(L().root,(0,u.Z)({},L().mobile,s));return(0,r.jsxs)("div",{children:[(0,r.jsxs)(Ve,{className:Y,children:[(0,r.jsxs)("div",{className:L().leftContent,children:[(0,r.jsx)(p.Z,{className:L().loadingSpinner,size:"large",spinning:e.appLoading}),(0,r.jsxs)("div",{className:L().topSection,children:[x&&(0,r.jsx)(_.M,{source:"/hls/stream.m3u8",online:x}),!x&&(0,r.jsx)(ie.R,{name:k,text:I||"Please follow and ask to get notified when the stream is live."}),(0,r.jsx)(Be.X,{online:x,lastConnectTime:w,lastDisconnectTime:y,viewerCount:g})]}),(0,r.jsx)("div",{className:L().midSection,children:(0,r.jsxs)("div",{className:L().buttonsLogoTitleSection,children:[(0,r.jsxs)(V,{children:[B,(0,r.jsx)(fe,{size:"small"}),(0,r.jsx)(oe,{visible:E,notificationClicked:function(){return R(!0)},notificationClosed:function(){return U()},children:(0,r.jsx)(ve,{onClick:function(){return R(!0)}})})]}),(0,r.jsx)(Q,{title:"Notify",visible:O,afterClose:function(){return U()},handleCancel:function(){return U()},children:(0,r.jsx)(Fe,{})})]})}),(0,r.jsx)("div",{className:L().lowerHalf,children:(0,r.jsx)(ze,{name:k,title:b,summary:Z,tags:A,links:S,logo:"/logo"})}),(0,r.jsx)("div",{className:L().lowerSection,children:(0,r.jsxs)(h.Z,{defaultActiveKey:"0",style:{height:"100%"},children:[t&&s&&(0,r.jsx)(Ue,{tab:"Chat",style:{height:"100%"}},"0"),(0,r.jsx)(Ue,{tab:"About",className:L().pageContentSection,children:(0,r.jsx)(j,{content:C})},"2"),(0,r.jsx)(Ue,{tab:"Followers",className:L().pageContentSection,children:(0,r.jsx)(F,{})},"3")]})})]}),t&&!s&&(0,r.jsx)(J,{})]}),!s&&(0,r.jsx)(z,{version:N})]})},Ye=t(94199),Ke=t(20550),qe=t(66516),Ge=t(38504),Qe=t(86548),We=t(94149),Xe=t(38545),$e=t(87547),en=t(39398),nn=t(49218),tn=t(47093),rn=t.n(tn),on=t(29815),sn=t(38939),an=t(11622),cn=sn.Z.Option,ln=function(e){var n=e.color,t={textAlign:"center",backgroundColor:"var(--theme-color-users-".concat(n,")"),width:"100%",height:"100%"};return(0,r.jsx)("div",{style:t})},un=function(){var e=(0,i.sJ)(l.Gt),n=(0,i.sJ)(l.w4),t=(0,i.sJ)(l.nk)||0,o=(0,c.useState)(n),s=o[0],a=o[1],u=s!==n&&""!==s&&(null===e||void 0===e?void 0:e.isConnected()),d=(0,on.Z)(Array(8)).map((function(e,n){return n}));return(0,r.jsxs)("div",{children:["Your chat display name is what people see when you send chat messages. Other information can go here to mention auth, and stuff.",(0,r.jsx)(de.Z,{value:s,onChange:function(e){return a(e.target.value)},placeholder:"Your chat display name",maxLength:30,showCount:!0,defaultValue:n}),(0,r.jsx)(D.Z,{disabled:!u,onClick:function(){var n={type:an.C.NAME_CHANGE,newName:s};e.send(n)},children:"Change name"}),(0,r.jsxs)("div",{children:["Your Color",(0,r.jsx)(sn.Z,{style:{width:120},onChange:function(n){var t={type:an.C.COLOR_CHANGE,newColor:Number(n)};e.send(t)},defaultValue:t.toString(),getPopupContainer:function(e){return e.parentElement},children:d.map((function(e){return(0,r.jsx)(cn,{title:e,children:(0,r.jsx)(ln,{color:e})},e.toString())}))})]})]})},dn=t(54907),hn=t(19411),pn=dn.Z.Panel,xn=ge.Z.Link,fn=function(e){var n=e.authenticated,t=e.displayName,o=e.accessToken,i=(0,c.useState)(null),s=i[0],a=i[1],l=(0,c.useState)(!1),u=l[0],d=l[1],h=(0,c.useState)(!1),x=h[0],f=h[1],m=(0,c.useState)(""),v=m[0],g=m[1],j=n?(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,r.jsxs)("span",{children:["Use your own domain to authenticate ",(0,r.jsx)("span",{children:t})," or login as a previously"," ","authenticated chat user using IndieAuth."]}),_=s;_&&_.includes("url does not support indieauth")&&(_="The provided URL is either invalid or does not support IndieAuth.");var y=function(){var e=(0,w.Z)(b().mark((function e(){var n,t,r,i,s,c;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=2;break}return e.abrupt("return");case 2:return d(!0),e.prev=3,n="/api/auth/indieauth?accessToken=".concat(o),t="https://".concat(v),r={authHost:t},e.next=9,fetch(n,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)});case 9:return i=e.sent,e.next=12,i.json();case 12:if(!(s=e.sent).message){e.next=17;break}return a(s.message),d(!1),e.abrupt("return");case 17:if(s.redirect){e.next=21;break}return a("Auth provider did not return a redirect URL."),d(!1),e.abrupt("return");case 21:s.redirect&&(c=s.redirect,window.location=c),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(3),a(e.t0.message);case 27:d(!1);case 28:case"end":return e.stop()}}),e,null,[[3,24]])})));return function(){return e.apply(this,arguments)}}();return(0,r.jsx)(p.Z,{spinning:u,children:(0,r.jsxs)(le.Z,{direction:"vertical",children:[j,_&&(0,r.jsx)(ue.Z,{message:"Error",description:_,type:"error",showIcon:!0}),(0,r.jsx)("div",{children:"Your domain"}),(0,r.jsx)(de.Z.Search,{addonBefore:"https://",onInput:function(e){if(":"!==e.nativeEvent.data){g(e.target.value);var n,t="https://".concat(e.target.value);n=t,(0,hn.Z)(n)&&n.includes(".")?f(!0):f(!1)}},type:"url",value:v,placeholder:"yoursite.com",status:!x&&v.length>0?"error":void 0,onPressEnter:y,enterButton:(0,r.jsx)(D.Z,{onClick:y,disabled:!x,children:"Authenticate with your domain"})}),(0,r.jsx)(dn.Z,{ghost:!0,children:(0,r.jsxs)(pn,{header:"Learn more about using IndieAuth to authenticate with chat.",children:[(0,r.jsx)("p",{children:"IndieAuth allows for a completely independent and decentralized way of identifying yourself using your own domain."}),(0,r.jsxs)("p",{children:["If you run an Owncast instance, you can use that domain here. Otherwise,"," ",(0,r.jsx)(xn,{href:"https://indieauth.net/#providers",children:"learn more about how you can support IndieAuth"}),"."]})]},"header")}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})},mn=t(55237),vn=t.n(mn);var gn=dn.Z.Panel,jn=function(e){var n=e.authenticated,t=e.displayName,o=e.accessToken,i=(0,c.useState)(null),s=i[0],a=i[1],l=(0,c.useState)(!1),u=l[0],d=l[1],h=(0,c.useState)(!1),x=h[0],f=h[1],m=(0,c.useState)(""),v=m[0],g=m[1],j=(0,c.useState)(""),_=j[0],y=j[1],C=(0,c.useState)(!0),N=C[0],k=C[1],Z=n?(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,r.jsxs)("span",{children:["Receive a direct message on the Fediverse to link your account to"," ",(0,r.jsx)("strong",{children:t}),", or login as a previously linked chat user."]}),S=s;S&&S.includes("url does not support indieauth")&&(S="The provided URL is either invalid or does not support IndieAuth.");var A=function(e){f(function(e){var n=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())}(e))},T=function(){var e=(0,w.Z)(b().mark((function e(n,t){var r,o;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).message&&(a(o.message),d(!1));case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),F=function(){var e=(0,w.Z)(b().mark((function e(){var n,t;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),n="/api/auth/fediverse/verify?accessToken=".concat(o),t={code:_},e.prev=3,e.next=6,T(n,t);case 6:window.location.href="/",e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0),a(e.t0);case 13:d(!1);case 14:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,w.Z)(b().mark((function e(){var n,t,r;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=2;break}return e.abrupt("return");case 2:return d(!0),a(null),n="/api/auth/fediverse?accessToken=".concat(o),t=v.replace(/^@+/,""),r={account:t},e.prev=7,e.next=10,T(n,r);case 10:k(!0),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(7),console.error(e.t0),a(e.t0);case 17:d(!1);case 18:case"end":return e.stop()}}),e,null,[[7,13]])})));return function(){return e.apply(this,arguments)}}(),L=(0,r.jsxs)("div",{children:["Paste in the code that was sent to your Fediverse account. If you did not receive a code, make sure you can accept direct messages.",(0,r.jsxs)("div",{className:vn().codeInputContainer,children:[(0,r.jsx)(de.Z,{value:_,onChange:function(e){return y(e.target.value)},className:vn().codeInput,placeholder:"123456",maxLength:6}),(0,r.jsx)(D.Z,{type:"primary",onClick:F,disabled:_.length<6,className:vn().submitButton,children:"Verify Code"})]})]}),M=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:"Your Fediverse Account"}),(0,r.jsx)(de.Z.Search,{addonBefore:"@",onInput:function(e){g(e.target.value),A(e.target.value)},value:v,placeholder:"youraccount@yourserver.com",status:!x&&v.length>0?"error":void 0,onPressEnter:I,enterButton:(0,r.jsx)(D.Z,{onClick:I,disabled:!x,children:"Authenticate with Fediverse"})})]});return(0,r.jsx)(p.Z,{spinning:u,children:(0,r.jsxs)(le.Z,{direction:"vertical",children:[Z,S&&(0,r.jsx)(ue.Z,{message:"Error",description:S,type:"error",showIcon:!0}),N?L:M,(0,r.jsx)(dn.Z,{ghost:!0,children:(0,r.jsx)(gn,{header:"Learn more about using the Fediverse to authenticate with chat.",children:(0,r.jsx)("p",{children:"xxxxxx"})},"header")}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})},_n="/_next/static/media/fediverse-black.0b51c805.png",wn="/_next/static/media/indieauth.38c52a3d.png",yn=t(67211),bn=t.n(yn),Cn=h.Z.TabPane,Nn=function(){var e=(0,i.sJ)(l.w4),n=(0,i.sJ)(l.L4),t=(0,i.sJ)(l.FI);return(0,r.jsx)("div",{children:(0,r.jsxs)(h.Z,{defaultActiveKey:"1",type:"card",size:"small",renderTabBar:null,children:[(0,r.jsx)(Cn,{tab:(0,r.jsxs)("span",{className:bn().tabContent,children:[(0,r.jsx)("img",{className:bn().icon,src:wn,alt:"IndieAuth"}),"IndieAuth"]}),children:(0,r.jsx)(fn,{authenticated:n,displayName:e,accessToken:t})},"1"),(0,r.jsx)(Cn,{tab:(0,r.jsxs)("span",{className:bn().tabContent,children:[(0,r.jsx)("img",{className:bn().icon,src:_n,alt:"Fediverse auth"}),"FediAuth"]}),children:(0,r.jsx)(jn,{authenticated:n,displayName:e,accessToken:t})},"2")]})})},kn=function(e){var n=e.username,t=(void 0===n?void 0:n)||(0,i.sJ)(l.w4),o=(0,c.useState)(!1),s=o[0],a=o[1],u=(0,c.useState)(!1),h=u[0],p=u[1],x=(0,d.Z)((0,i.FV)(l.ZA),2),f=x[0],m=x[1],v=(0,i.sJ)(l.Q),g=function(){m(!f)};(0,nn.y1)("c",g,{enableOnContentEditable:!1},[f]);var j=(0,r.jsxs)(qe.Z,{children:[(0,r.jsx)(qe.Z.Item,{icon:(0,r.jsx)(Qe.Z,{}),onClick:function(){a(!0)},children:"Change name"},"0"),(0,r.jsx)(qe.Z.Item,{icon:(0,r.jsx)(We.Z,{}),onClick:function(){return p(!0)},children:"Authenticate"},"1"),v.chatAvailable&&(0,r.jsx)(qe.Z.Item,{icon:(0,r.jsx)(Xe.Z,{}),onClick:function(){return g()},children:"Toggle chat"},"3")]});return(0,r.jsxs)("div",{className:"".concat(rn().root),children:[(0,r.jsx)(Ge.Z,{overlay:j,trigger:["click"],children:(0,r.jsx)(D.Z,{type:"primary",icon:(0,r.jsx)($e.Z,{style:{marginRight:".5rem"}}),children:(0,r.jsxs)(le.Z,{children:[t,(0,r.jsx)(en.Z,{})]})})}),(0,r.jsx)(Q,{title:"Change Chat Display Name",visible:s,handleCancel:function(){return a(!1)},children:(0,r.jsx)(un,{})}),(0,r.jsx)(Q,{title:"Authenticate",visible:h,handleCancel:function(){return p(!1)},children:(0,r.jsx)(Nn,{})})]})},Zn=t(60113),Sn=t(92910),An=t.n(Sn),Tn=o.Z.Header,Fn=function(e){var n=e.name,t=void 0===n?"Your stream title":n,o=e.chatAvailable;return(0,r.jsxs)(Tn,{className:"".concat(An().header),children:[(0,r.jsxs)("div",{className:"".concat(An().logo),children:[(0,r.jsx)(Zn.C,{variant:"contrast"}),(0,r.jsx)("span",{children:t})]}),o&&(0,r.jsx)(kn,{}),!o&&(0,r.jsx)(Ye.Z,{title:"Chat is available when the stream is live.",placement:"left",children:(0,r.jsx)(Ke.Z,{color:"processing",style:{cursor:"pointer"},children:"Chat offline"})})]})},In=function(e){var n=e.title,t=e.message;return(0,r.jsx)(Y.Z,{title:n,visible:!0,footer:null,closable:!1,keyboard:!1,width:900,centered:!0,className:"modal",children:(0,r.jsx)("p",{style:{fontSize:"1.3rem"},children:t})})},Ln=t(82670);var Mn=function(){var e=(0,i.sJ)(l.g1),n=e.name,t=e.title,s=e.customStyles,u=(0,i.sJ)(l.di),d=(0,i.sJ)(l.ap),h=(0,c.useRef)(null);return(0,c.useEffect)((function(){!function(e){var n=function(e){e.setAttribute("rel","noopener noreferrer ")};e.querySelectorAll("a").forEach((function(e){return n(e)})),new MutationObserver((function(e){var t=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var a=i.value,c=!0,l=!1,u=void 0;try{for(var d,h=a.addedNodes[Symbol.iterator]();!(c=(d=h.next()).done);c=!0){var p=d.value;(0,Ln.Z)(p,HTMLElement)&&"a"===p.tagName.toLowerCase()&&n(p)}}catch(x){l=!0,u=x}finally{try{c||null==h.return||h.return()}finally{if(l)throw u}}}}catch(x){r=!0,o=x}finally{try{t||null==s.return||s.return()}finally{if(r)throw o}}})).observe(e,{attributes:!1,childList:!0,subtree:!0})}(h.current)}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("meta",{name:"description",content:"{{.Summary}}"}),(0,r.jsx)("meta",{property:"og:title",content:"{{.Name}}"}),(0,r.jsx)("meta",{property:"og:site_name",content:"{{.Name}}"}),(0,r.jsx)("meta",{property:"og:url",content:"{{.RequestedURL}}"}),(0,r.jsx)("meta",{property:"og:description",content:"{{.Summary}}"}),(0,r.jsx)("meta",{property:"og:type",content:"video.other"}),(0,r.jsx)("meta",{property:"video:tag",content:"{{.TagsString}}"}),(0,r.jsx)("meta",{property:"og:image",content:"{{.Thumbnail}}"}),(0,r.jsx)("meta",{property:"og:image:url",content:"{{.Thumbnail}}"}),(0,r.jsx)("meta",{property:"og:image:alt",content:"{{.Image}}"}),(0,r.jsx)("meta",{property:"og:video",content:"{{.RequestedURL}}embed/video"}),(0,r.jsx)("meta",{property:"og:video:secure_url",content:"{{.RequestedURL}}embed/video"}),(0,r.jsx)("meta",{property:"og:video:height",content:"315"}),(0,r.jsx)("meta",{property:"og:video:width",content:"560"}),(0,r.jsx)("meta",{property:"og:video:type",content:"text/html"}),(0,r.jsx)("meta",{property:"og:video:actor",content:"{{.Name}}"}),(0,r.jsx)("meta",{property:"twitter:title",content:"{{.Name}}"}),(0,r.jsx)("meta",{property:"twitter:url",content:"{{.RequestedURL}}"}),(0,r.jsx)("meta",{property:"twitter:description",content:"{{.Summary}}"}),(0,r.jsx)("meta",{property:"twitter:image",content:"{{.Image}}"}),(0,r.jsx)("meta",{property:"twitter:card",content:"player"}),(0,r.jsx)("meta",{property:"twitter:player",content:"{{.RequestedURL}}embed/video"}),(0,r.jsx)("meta",{property:"twitter:player:width",content:"560"}),(0,r.jsx)("meta",{property:"twitter:player:height",content:"315"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/img/favicon/apple-icon-57x57.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/img/favicon/apple-icon-60x60.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/img/favicon/apple-icon-72x72.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/img/favicon/apple-icon-76x76.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/img/favicon/apple-icon-114x114.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/img/favicon/apple-icon-120x120.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/img/favicon/apple-icon-144x144.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/img/favicon/apple-icon-152x152.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/favicon/apple-icon-180x180.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/img/favicon/android-icon-192x192.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/img/favicon/favicon-96x96.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/img/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,r.jsx)("link",{href:"/api/auth/provider/indieauth"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:"/img/favicon/ms-icon-144x144.png"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,r.jsx)("style",{children:s})]}),(0,r.jsx)(l.me,{}),(0,r.jsxs)(o.Z,{ref:h,children:[(0,r.jsx)(Fn,{name:t||n,chatAvailable:u}),(0,r.jsx)(De,{}),d&&(0,r.jsx)(In,{title:d.title,message:d.message})]})]})};function En(){return(0,r.jsx)(Mn,{})}},36879:function(e){e.exports={button:"ActionButton_button__z5Z2c",icon:"ActionButton_icon__EPp7Q"}},69767:function(e){e.exports={row:"ActionButtonRow_row__SiEGe"}},74688:function(e){e.exports={root:"ContentHeader_root__HaUG0",row:"ContentHeader_row__9Q8gH",logoTitleSection:"ContentHeader_logoTitleSection__Z8pUc",logo:"ContentHeader_logo__wo_HN",titleSection:"ContentHeader_titleSection___6Y15",title:"ContentHeader_title__E_DsI",subtitle:"ContentHeader_subtitle__n1Wew",tagList:"ContentHeader_tagList__rx3jY"}},47093:function(e){e.exports={root:"UserDropdown_root__IdxfQ","ant-space":"UserDropdown_ant-space__XJTZ3","ant-space-item":"UserDropdown_ant-space-item__w4nC2"}},67211:function(e){e.exports={tabContent:"AuthModal_tabContent__KgMU3",icon:"AuthModal_icon__kpEuV"}},5225:function(e){e.exports={pushPreview:"BrowserNotifyModal_pushPreview__4Og4q",inner:"BrowserNotifyModal_inner__uhFDw",title:"BrowserNotifyModal_title__dd_Lh",permissionLine:"BrowserNotifyModal_permissionLine__K8nyJ",buttonRow:"BrowserNotifyModal_buttonRow__oxJUg",disabled:"BrowserNotifyModal_disabled__v88lb",allow:"BrowserNotifyModal_allow__M9AWC"}},55237:function(e){e.exports={codeInputContainer:"FediAuthModal_codeInputContainer__M_dAD",codeInput:"FediAuthModal_codeInput__dIE6u",submitButton:"FediAuthModal_submitButton__iuF9R"}},13840:function(e){e.exports={header:"FollowModal_header__la1ji",buttons:"FollowModal_buttons__tt4Mc",instructions:"FollowModal_instructions__HiKFF",footer:"FollowModal_footer__AjucH",account:"FollowModal_account__cmHkm",logo:"FollowModal_logo__Ew8xK",username:"FollowModal_username__A_OTw",name:"FollowModal_name__Sf_TP"}},63291:function(e){e.exports={root:"Content_root__h1mNK",topSection:"Content_topSection__JIZi0",lowerSection:"Content_lowerSection__BZHYI",leftCol:"Content_leftCol__U2TDq",loadingSpinner:"Content_loadingSpinner__mDlYC",mobile:"Content_mobile__Ep0QM",mobileChat:"Content_mobileChat__5V09A"}},28105:function(e){e.exports={pageContentContainer:"CustomPageContent_pageContentContainer__EG4tU",customPageContent:"CustomPageContent_customPageContent__Mr981",summary:"CustomPageContent_summary___Zgps"}},35603:function(e){e.exports={footer:"Footer_footer__mPuvf",links:"Footer_links__7bBxV",item:"Footer_item__rXxSr"}},92910:function(e){e.exports={header:"Header_header__U4Ro1",logo:"Header_logo__HLZ6Z"}},7918:function(e){e.exports={root:"Logo_root__jKiJC",container:"Logo_container__A4UYT",image:"Logo_image__Ahkom"}},78890:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}},18668:function(e){e.exports={contentbutton:"NotifyReminderPopup_contentbutton__a_tsp",closebutton:"NotifyReminderPopup_closebutton__GVcP3",title:"NotifyReminderPopup_title__Dm9Iy"}},75347:function(e){e.exports={root:"Sidebar_root__8HE0A"}},52740:function(e){e.exports={link:"SocialLinks_link___CcSm",links:"SocialLinks_links__gOAb7"}},40305:function(e){e.exports={follower:"SingleFollower_follower__EyBDI",avatar:"SingleFollower_avatar__V9jHG",account:"SingleFollower_account__Z66vo",placeholder:"SingleFollower_placeholder__CgsfJ"}}},function(e){e.O(0,[2544,1272,8700,7330,7266,2944,6265,5938,9372,1681,2865,1082,2706,1899,2854,143,9774,2888,179],(function(){return n=48312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);