(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9262],{70918:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/upgrade",function(){return r(73143)}])},73143:function(e,n,r){"use strict";r.r(n);var t=r(47568),a=r(26042),u=r(34051),s=r.n(u),c=r(85893),i=r(67294),l=r(9001),o=r(84485),d=r(10355),f=r(58827),h=o.Z.Title,_=function(e){var n=Object.values(e),r=[{title:"Name",dataIndex:"name",key:"name",render:function(e,n){return(0,c.jsx)("a",{href:n.browser_download_url,children:e})}},{title:"Size",dataIndex:"size",key:"size",render:function(e){return"".concat((e/1024/1024).toFixed(2)," MB")}}];return(0,c.jsx)(d.Z,{dataSource:n,columns:r,rowKey:function(e){return e.id},size:"large",pagination:!1})};n.default=function(){var e=(0,i.useState)({html_url:"",name:"",created_at:null,body:"",assets:[]}),n=e[0],r=e[1],u=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Kt)();case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("==== error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){u()}),[]),n?(0,c.jsxs)("div",{className:"upgrade-page",children:[(0,c.jsx)(h,{level:2,children:(0,c.jsx)("a",{href:n.html_url,children:n.name})}),(0,c.jsx)(h,{level:5,children:new Date(n.created_at).toDateString()}),(0,c.jsx)(l.D,{children:n.body}),(0,c.jsx)("h3",{children:"Downloads"}),(0,c.jsx)(_,(0,a.Z)({},n.assets))]}):null}}},function(e){e.O(0,[7330,7266,355,9001,9774,2888,179],(function(){return n=70918,e(e.s=n);var n}));var n=e.O();_N_E=n}]);