(this["webpackJsonpit-logger"]=this["webpackJsonpit-logger"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(10),r=a.n(s),l=a(3),i=a(4),o=a.n(i),d=a(7),u="GET_LOGS",j="ADD_LOG",h="DELETE_LOG",b="SET_CURRENT",O="CLEAR_CURRENT",p="UPDATE_LOG",m="SET_LOADING",f="LOGS_ERROR",x="SEARCH_LOGS",g="GET_TECHS",v="ADD_TECH",y="DELETE_TECH",N="TECHS_ERROR",w=function(){return{type:m}},T=a(0),E=Object(l.b)(null,{searchLogs:function(e){return function(){var t=Object(d.a)(o.a.mark((function t(a){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(),t.next=4,fetch("/logs?q=".concat(e));case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,a({type:u,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:f,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.searchLogs,a=Object(c.useRef)("");return Object(T.jsx)("nav",{style:{marginBottom:"30px"},className:"blue",children:Object(T.jsx)("div",{className:"nav-wrapper",children:Object(T.jsx)("form",{children:Object(T.jsxs)("div",{className:"input-field",children:[Object(T.jsx)("input",{id:"search",type:"search",placeholder:"Search Logs...",ref:a,onChange:function(e){t(a.current.value)}}),Object(T.jsx)("label",{className:"label-icon",htmlFor:"search",children:Object(T.jsx)("i",{className:"material-icons",children:"search"})}),Object(T.jsx)("i",{className:"material-icons",children:"close"})]})})})})})),S=a(19),k=a.n(S),L=a(5),C=a.n(L),D=Object(l.b)(null,{deleteLog:function(e){return function(){var t=Object(d.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(),t.next=4,fetch("/logs/".concat(e),{method:"DELETE"});case 4:a({type:h,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:f,payload:t.t0.response.statusText});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setCurrent:function(e){return{type:b,payload:e}}})((function(e){var t=e.log,a=e.deleteLog,c=e.setCurrent;return Object(T.jsx)("li",{className:"collection-item",children:Object(T.jsxs)("div",{children:[Object(T.jsx)("a",{href:"#edit-log-modal",className:"modal-trigger ".concat(t.attention?"red-text":"blue-text"),onClick:function(){return c(t)},children:t.message}),Object(T.jsx)("br",{}),Object(T.jsxs)("span",{className:"grey-text",children:[Object(T.jsxs)("span",{className:"black-text",children:["ID #",t.id]})," last updated by"," ",Object(T.jsx)("span",{className:"black-text",children:t.tech})," on"," ",Object(T.jsx)(k.a,{format:"MMMM Do YYYY, h:mm:ss a",children:t.date})]}),Object(T.jsx)("a",{href:"#!",onClick:function(){a(t.id),C.a.toast({html:"Log Deleted"})},className:"secondary-content",children:Object(T.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})})),R=function(){return Object(T.jsx)("div",{className:"progress blue lighten-4",children:Object(T.jsx)("div",{className:"indeterminate blue"})})},_=Object(l.b)((function(e){return{log:e.log}}),{getLogs:function(){return function(){var e=Object(d.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(),e.next=4,fetch("/logs");case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,t({type:u,payload:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:f,payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.log,a=t.logs,n=t.loading,s=e.getLogs;return Object(c.useEffect)((function(){s()}),[]),n||null===a?Object(T.jsx)(R,{}):Object(T.jsxs)("ul",{className:"collection with-header",children:[Object(T.jsx)("li",{className:"collection-header",children:Object(T.jsx)("h4",{className:"center",children:"System Logs"})}),n||0!==a.length?a.map((function(e){return Object(T.jsx)(D,{log:e},e.id)})):Object(T.jsx)("p",{className:"center",children:"No Requests..."})]})})),A=function(){return Object(T.jsxs)("div",{className:"fixed-action-btn",children:[Object(T.jsx)("a",{href:"#add-log-modal",className:"btn-floating btn-large blue darken-2 modal-trigger",children:Object(T.jsx)("i",{className:"large material-icons",children:"add"})}),Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:Object(T.jsx)("a",{href:"#tech-list-modal",className:"btn-floating green modal-trigger",children:Object(T.jsx)("i",{className:"material-icons",children:"person"})})}),Object(T.jsx)("li",{children:Object(T.jsx)("a",{href:"#add-tech-modal",className:"btn-floating red modal-trigger",children:Object(T.jsx)("i",{className:"material-icons",children:"person_add"})})})]})]})},G=a(6),J=function(){return function(){var e=Object(d.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(),e.next=4,fetch("/techs");case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,t({type:g,payload:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:N,payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},F=function(){return{type:m}},M=Object(l.b)((function(e){return{tech:e.tech}}),{getTechs:J})((function(e){var t=e.getTechs,a=e.tech,n=a.techs,s=a.loading;return Object(c.useEffect)((function(){t()}),[]),!s&&null!==n&&n.map((function(e){return Object(T.jsxs)("option",{value:"".concat(e.firstName," ").concat(e.lastName),children:[e.firstName," ",e.lastName]},e.id)}))})),P={width:"75%",height:"75%"},H=Object(l.b)(null,{addLog:function(e){return function(){var t=Object(d.a)(o.a.mark((function t(a){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(),t.next=4,fetch("/logs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,a({type:j,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:f,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addLog,a=Object(c.useState)(""),n=Object(G.a)(a,2),s=n[0],r=n[1],l=Object(c.useState)(!1),i=Object(G.a)(l,2),o=i[0],d=i[1],u=Object(c.useState)(""),j=Object(G.a)(u,2),h=j[0],b=j[1];return Object(T.jsxs)("div",{id:"add-log-modal",className:"modal",style:P,children:[Object(T.jsxs)("div",{className:"modal-content",children:[Object(T.jsx)("h4",{children:"Enter System Log"}),Object(T.jsx)("div",{className:"row",children:Object(T.jsxs)("div",{className:"input-field",children:[Object(T.jsx)("input",{type:"text",name:"message",value:s,onChange:function(e){return r(e.target.value)}}),Object(T.jsx)("label",{htmlFor:"message",className:"active",children:"Log Message"})]})}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"input-field",children:Object(T.jsxs)("select",{name:"tech",value:h,className:"browser-default",onChange:function(e){return b(e.target.value)},children:[Object(T.jsx)("option",{value:"",disabled:!0,children:"Select Technician"}),Object(T.jsx)(M,{})]})})}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"input-field",children:Object(T.jsx)("p",{children:Object(T.jsxs)("label",{children:[Object(T.jsx)("input",{type:"checkbox",className:"filled-in",checked:o,value:o,onChange:function(e){return d(!o)}}),Object(T.jsx)("span",{children:"Needs Attention"})]})})})})]}),Object(T.jsx)("div",{className:"modal-footer",children:Object(T.jsx)("a",{href:"#!",onClick:function(){if(""===s||""===h)C.a.toast({html:"Please enter a message and tech"});else{var e={message:s,attention:o,tech:h,date:new Date};t(e),C.a.toast({html:"Log added by ".concat(h)}),r(""),b(""),d(!1)}},className:"modal-close waves-effect blue waves-light btn-flat",children:"Enter"})})]})})),U={width:"75%",height:"75%"},I=Object(l.b)((function(e){return{current:e.log.current}}),{updateLog:function(e){return function(){var t=Object(d.a)(o.a.mark((function t(a){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(),t.next=4,fetch("/logs/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,a({type:p,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:f,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.current,a=e.updateLog,n=Object(c.useState)(""),s=Object(G.a)(n,2),r=s[0],l=s[1],i=Object(c.useState)(!1),o=Object(G.a)(i,2),d=o[0],u=o[1],j=Object(c.useState)(""),h=Object(G.a)(j,2),b=h[0],O=h[1];Object(c.useEffect)((function(){t&&(l(t.message),u(t.attention),O(t.tech))}),[t]);return Object(T.jsxs)("div",{id:"edit-log-modal",className:"modal",style:U,children:[Object(T.jsxs)("div",{className:"modal-content",children:[Object(T.jsx)("h4",{children:"Enter System Log"}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"input-field",children:Object(T.jsx)("input",{type:"text",name:"message",value:r,onChange:function(e){return l(e.target.value)}})})}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"input-field",children:Object(T.jsxs)("select",{name:"tech",value:b,className:"browser-default",onChange:function(e){return O(e.target.value)},children:[Object(T.jsx)("option",{value:"",disabled:!0,children:"Select Technician"}),Object(T.jsx)("option",{value:"John Doe",children:"John Doe"}),Object(T.jsx)("option",{value:"Sam Smith",children:"Sam Smith"}),Object(T.jsx)("option",{value:"Sara Wilson",children:"Sara Wilson"})]})})}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"input-field",children:Object(T.jsx)("p",{children:Object(T.jsxs)("label",{children:[Object(T.jsx)("input",{type:"checkbox",className:"filled-in",checked:d,value:d,onChange:function(e){return u(!d)}}),Object(T.jsx)("span",{children:"Needs Attention"})]})})})})]}),Object(T.jsx)("div",{className:"modal-footer",children:Object(T.jsx)("a",{href:"#!",onClick:function(){if(""===r||""===b)C.a.toast({html:"Please enter a message and tech"});else{var e={id:t.id,message:r,attention:d,tech:b,date:new Date};a(e),C.a.toast({html:"Log Updated by ".concat(b)}),l(""),O(""),u(!1)}},className:"modal-close waves-effect blue waves-light btn-flat",children:"Enter"})})]})})),Y=Object(l.b)(null,{addTech:function(e){return function(){var t=Object(d.a)(o.a.mark((function t(a){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,F(),t.next=4,fetch("/techs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/JSON"}});case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,a({type:v,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:N,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addTech,a=Object(c.useState)(""),n=Object(G.a)(a,2),s=n[0],r=n[1],l=Object(c.useState)(""),i=Object(G.a)(l,2),o=i[0],d=i[1];return Object(T.jsxs)("div",{id:"add-tech-modal",className:"modal",children:[Object(T.jsxs)("div",{className:"modal-content",children:[Object(T.jsx)("h4",{children:"New Technician"}),Object(T.jsx)("div",{className:"row",children:Object(T.jsxs)("div",{className:"input-field",children:[Object(T.jsx)("input",{type:"text",name:"firstName",value:s,onChange:function(e){return r(e.target.value)}}),Object(T.jsx)("label",{htmlFor:"firstName",className:"active",children:"First Name"})]})}),Object(T.jsx)("div",{className:"row",children:Object(T.jsxs)("div",{className:"input-field",children:[Object(T.jsx)("input",{type:"text",name:"lastName",value:o,onChange:function(e){return d(e.target.value)}}),Object(T.jsx)("label",{htmlFor:"lastName",className:"active",children:"First Name"})]})})]}),Object(T.jsx)("div",{className:"modal-footer",children:Object(T.jsx)("a",{href:"#!",onClick:function(){""===s||""===o?C.a.toast({html:"Please enter the first and last name"}):(t({firstName:s,lastName:o}),C.a.toast({html:"".concat(s," ").concat(o," was added as a tech.")}),r(""),d(""))},className:"modal-close waves-effect blue waves-light btn-flat",children:"Enter"})})]})})),W=Object(l.b)(null,{deleteTech:function(e){return function(){var t=Object(d.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,F(),t.next=4,fetch("/techs/".concat(e),{method:"DELETE"});case 4:a({type:y,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:N,payload:t.t0.response.statusText});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.deleteTech,a=e.tech,c=a.firstName,n=a.lastName,s=a.id;return Object(T.jsx)("li",{className:"collection-item",children:Object(T.jsxs)("div",{children:[c," ",n,Object(T.jsx)("a",{href:"#!",className:"secondary-content",children:Object(T.jsx)("i",{className:"material-icons grey-text",onClick:function(){t(s),C.a.toast({html:"Technician (".concat(c," ").concat(n,") deleted.")})},children:"delete"})})]})})})),q={width:"75%",height:"75%"},B=Object(l.b)((function(e){return{tech:e.tech}}),{getTechs:J})((function(e){var t=e.getTechs,a=e.tech,n=a.techs,s=a.loading;return Object(c.useEffect)((function(){t()}),[]),Object(T.jsx)("div",{id:"tech-list-modal",className:"modal",style:q,children:Object(T.jsxs)("div",{className:"modal-content",children:[Object(T.jsx)("h4",{children:"Technician List"}),Object(T.jsx)("ul",{className:"collection",children:!s&&null!==n&&n.map((function(e){return Object(T.jsx)("li",{children:Object(T.jsx)(W,{tech:e},e.id)})}))})]})})})),z=a(8),K=a(20),Q=a(21),V=a(12),X=a(2),Z={logs:null,current:null,loading:!1,error:null},$={techs:null,loading:!1,error:null},ee=Object(z.combineReducers)({log:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(X.a)(Object(X.a)({},e),{},{logs:t.payload});case j:return Object(X.a)(Object(X.a)({},e),{},{logs:[].concat(Object(V.a)(e.logs),[t.payload]),loading:!1});case h:return Object(X.a)(Object(X.a)({},e),{},{logs:e.logs.filter((function(e){return e.id!==t.payload})),loading:!1});case p:return Object(X.a)(Object(X.a)({},e),{},{logs:e.logs.map((function(e){return e.id===t.payload.id?t.payload:e}))});case x:return Object(X.a)(Object(X.a)({},e),{},{logs:t.payload});case b:return Object(X.a)(Object(X.a)({},e),{},{current:t.payload});case O:return Object(X.a)(Object(X.a)({},e),{},{current:null});case m:return Object(X.a)(Object(X.a)({},e),{},{loading:!0});case f:return console.error(t.payload),Object(X.a)(Object(X.a)({},e),{},{error:t.payload});default:return e}},tech:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(X.a)(Object(X.a)({},e),{},{techs:t.payload,loading:!1});case v:return Object(X.a)(Object(X.a)({},e),{},{techs:[].concat(Object(V.a)(e.techs),[t.payload]),loading:!1});case y:return Object(X.a)(Object(X.a)({},e),{},{techs:e.techs.filter((function(e){return e.id!==t.payload})),loading:!1});case m:return Object(X.a)(Object(X.a)({},e),{},{loading:!0});case N:return console.error(t.payload),Object(X.a)(Object(X.a)({},e),{},{error:t.payload,loading:!1});default:return e}}}),te=[Q.a],ae=Object(z.createStore)(ee,{},Object(K.composeWithDevTools)(z.applyMiddleware.apply(void 0,te))),ce=(a(35),a(36),function(){return Object(c.useEffect)((function(){C.a.AutoInit()})),Object(T.jsx)(l.a,{store:ae,children:Object(T.jsxs)(c.Fragment,{children:[Object(T.jsx)(E,{}),Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)(A,{}),Object(T.jsx)(H,{}),Object(T.jsx)(I,{}),Object(T.jsx)(Y,{}),Object(T.jsx)(B,{}),Object(T.jsx)(_,{})]})]})})});r.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(ce,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.907840e0.chunk.js.map