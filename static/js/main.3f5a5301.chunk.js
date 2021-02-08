(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{305:function(e,t,n){},312:function(e,t,n){},334:function(e,t){},336:function(e,t){},350:function(e,t){},352:function(e,t){},380:function(e,t){},382:function(e,t){},383:function(e,t){},388:function(e,t){},390:function(e,t){},409:function(e,t){},421:function(e,t){},424:function(e,t){},555:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n(17),i=n.n(r),o=(n(305),n(7)),s=n(273),l=(n(312),n(15)),u=n(284),d=n(611),j=n(635),b=n(612),f=n(602),h=n(605),O=n(610),p=n(29),m=n(9),x=n.n(m),g=n(18),v=n(31),y=n.n(v),C=n(124),E="http://localhost:5000/api",w=n(19),T=Object(w.c)({name:"alerts",initialState:{open:!1,message:"",variant:"info"},reducers:{raiseAlert:function(e,t){e.open=!0,e.message=t.payload.message,e.variant=t.payload.variant},closeAlert:function(e,t){e.open=!1,e.message="",e.variant=""}}}),k=T.actions,S=k.raiseAlert,_=k.closeAlert,A=T.reducer,I=localStorage.getItem("AUTH_TOKEN")||"",N=""!==I?Object(C.verify)(I,"8ipPo3f4XKtuxK"):"",P=Object(w.c)({name:"auth",initialState:{authToken:I,isAdmin:N.is_admin,_id:N._id},reducers:{setAuthToken:function(e,t){e.authToken=t.payload},logOut:function(e){e.authToken="",e.isAdmin=!1,e._id=""},setData:function(e,t){e.isAdmin=t.payload.is_admin,e._id=t.payload._id}}}),W=P.actions,U=W.logOut,V=W.setAuthToken,D=W.setData,q=P.reducer,B=Object(w.c)({name:"dialog",initialState:{isOpen:!1},reducers:{openDialog:function(e){e.isOpen=!0},closeDialog:function(e){e.isOpen=!1}}}),L=B.actions,F=L.openDialog,R=L.closeDialog,Y=B.reducer,H=n(597),M=n(600),K=n(601),G=n(559),J=n(637),X=n(608),z=n(630),Z=n(609),Q=function(){var e=Object(o.c)((function(e){return e.dialog.isOpen})),t=Object(o.c)((function(e){return e.locales.locale.registerDialog})),n=Object(p.b)(),a=n.handleSubmit,r=n.control,i=Object(o.b)();return Object(c.jsxs)(H.a,{open:e,maxWidth:"xs",fullWidth:!0,children:[Object(c.jsx)(M.a,{children:t.dialogTitle}),Object(c.jsxs)("form",{onSubmit:a((function(e){i(function(e){return function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"POST",url:"".concat(E,"/users/"),data:e}).then((function(){Object.prototype.hasOwnProperty.call(e,"is_admin")?n(S({message:"New admin has been created",variant:"success"})):n(S({message:"Request sent!",variant:"success"}))})).catch((function(e){return n(S({message:e.response.data.error,variant:"error"}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),i(R())})),children:[Object(c.jsx)(K.a,{children:Object(c.jsxs)(f.a,{container:!0,spacing:3,direction:"column",children:[Object(c.jsx)(f.a,{item:!0,xs:12,children:Object(c.jsx)(p.a,{name:"name",as:Object(c.jsx)(j.a,{name:"name",label:t.yourNae,fullWidth:!0}),control:r,defaultValue:"",rules:{required:!0}})}),Object(c.jsx)(f.a,{item:!0,xs:!0,children:Object(c.jsx)(p.a,{name:"code",as:Object(c.jsx)(j.a,{type:"number",name:"code",label:t.code,fullWidth:!0}),control:r,defaultValue:"",rules:{required:!0,maxLength:10}})}),Object(c.jsx)(f.a,{item:!0,xs:!0,children:Object(c.jsx)(p.a,{name:"email",as:Object(c.jsx)(j.a,{type:"email",name:"email",label:"Email",fullWidth:!0}),control:r,defaultValue:"",rules:{required:!0}})}),Object(c.jsx)(f.a,{item:!0,xs:!0,children:Object(c.jsx)(p.a,{name:"password",as:Object(c.jsx)(j.a,{type:"password",name:"password",label:t.password,fullWidth:!0}),control:r,defaultValue:"",rules:{required:!0}})}),Object(c.jsx)(f.a,{item:!0,xs:!0,children:Object(c.jsx)(p.a,{name:"gender",as:Object(c.jsxs)(h.a,{component:"fieldset",fullWidth:!0,children:[Object(c.jsx)(G.a,{component:"legend",children:t.gender}),Object(c.jsxs)(J.a,{"aria-label":"gender",name:"gender",children:[Object(c.jsx)(X.a,{value:"female",label:t.female,control:Object(c.jsx)(z.a,{})}),Object(c.jsx)(X.a,{value:"male",label:t.male,control:Object(c.jsx)(z.a,{})})]})]}),control:r,defaultValue:"",rules:{required:!0}})})]})}),Object(c.jsxs)(Z.a,{children:[Object(c.jsx)(O.a,{onClick:function(){return i(R())},color:"secondary",variant:"outlined",children:t.cancel}),Object(c.jsx)(O.a,{type:"submit",color:"primary",variant:"contained",children:t.send})]})]})]})},$=Object(d.a)((function(e){return{container:{padding:e.spacing(2)}}}));var ee,te=function(){var e=Object(p.b)(),t=e.handleSubmit,n=e.control,r=$(),i=Object(l.g)(),s=Object(o.b)(),u=Object(o.c)((function(e){return e.auth.authToken})),d=Object(o.c)((function(e){return e.locales.locale.login}));return Object(a.useEffect)((function(){""!==u&&i.push("/")}),[u]),Object(c.jsxs)(b.a,{className:r.container,maxWidth:"md",children:[Object(c.jsx)("form",{action:"",onSubmit:t((function(e){s(function(e){return function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"POST",url:"".concat(E,"/login/"),data:e}).then((function(e){var t=e.data.token;localStorage.setItem("AUTH_TOKEN",t),n(V(t));var c=Object(C.verify)(t,"8ipPo3f4XKtuxK");n(D(c))})).catch((function(e){n(S({variant:"error",message:e.response.data.error}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),i.push("/")})),children:Object(c.jsx)(f.a,{container:!0,spacing:2,alignItems:"center",justify:"center",style:{minHeight:"100vh"},children:Object(c.jsx)(f.a,{item:!0,children:Object(c.jsxs)(f.a,{container:!0,spacing:3,direction:"column",alignItems:"center",children:[Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(h.a,{children:Object(c.jsx)(p.a,{name:"email",as:Object(c.jsx)(j.a,{variant:"outlined",name:"email",label:"Email"}),control:n,defaultValue:"",rules:{required:!0,min:6,max:1024}})})}),Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(h.a,{children:Object(c.jsx)(p.a,{name:"password",as:Object(c.jsx)(j.a,{label:d.password,name:"password",type:"password",variant:"outlined"}),control:n,defaultValue:"",rules:{required:!0,min:6,max:1024}})})}),Object(c.jsxs)(f.a,{container:!0,spacing:2,children:[Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(O.a,{color:"primary",type:"submit",variant:"contained",children:d.logIn})}),Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(O.a,{color:"primary",variant:"outlined",onClick:function(){s(F())},children:d.requestAccess})})]})]})})})}),Object(c.jsx)(Q,{})]})},ne=n(88),ce=n.n(ne),ae=n(613),re=n(614),ie=n(288),oe=n(55),se=n(615),le=n(133),ue=n.n(le),de=n(134),je=n.n(de),be=n(275),fe=n.n(be),he=n(132),Oe=n.n(he),pe=n(33),me=n(26),xe=n(36),ge=Object(w.b)("elections/voteStatus",function(){var e=Object(g.a)(x.a.mark((function e(t,n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.patch("".concat(E,"/elections/vote/").concat(t.electionId),{userId:t.userId,candidateId:t.candidateId}).then((function(e){return n.dispatch(S({message:"Ballot stored!",variant:"success"})),e})).catch((function(e){return n.dispatch(S({message:e.response.data.error,variant:"error"}))}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),ve=Object(w.b)("elections/endElectionStatus",function(){var e=Object(g.a)(x.a.mark((function e(t,n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.patch("".concat(E,"/elections/end/").concat(t)).then((function(e){return n.dispatch(S({message:"The election has ended successfully",variant:"success"})),e})).catch((function(e){n.dispatch(S({message:e.response.data.error,variant:"error"}))}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),ye=Object(w.c)({name:"elections",initialState:{elections:[],currentElection:{},selectedCandidates:[]},reducers:{fetchElections:function(e,t){e.elections=t.payload},saveElection:function(e,t){e.elections.push(t.payload)},setCurrentElection:function(e,t){e.currentElection=e.elections.filter((function(e){return e._id===t.payload}))[0]},emptyCurrentElection:function(e){e.currentElection={}},deleteElection:function(e,t){e.elections=e.elections.filter((function(e){return e._id!==t.payload})),e.currentElection={}},editElection:function(e,t){e.elections=function(e,t){var n=function(e,t){return e.filter((function(e){return e._id!==t}))}(e,t._id),c=Object(xe.a)({},t);return[].concat(Object(me.a)(n),[c])}(e.elections,t.payload),e.currentElection=t.payload},setCandidates:function(e,t){e.selectedCandidates=t.payload}},extraReducers:(ee={},Object(pe.a)(ee,ge.fulfilled,(function(e,t){var n=e.currentElection.candidates.filter((function(e){return e._id===t.payload.candidateId}));n.votes+=1,e.currentElection.candidates.filter((function(e){return e._id!==t.payload.candidateId})),e.currentElection.candidates.push(n),e.currentElection.registeredVotes.push(t.payload.userId),e.elections.filter((function(t){return t._id!==e.currentElection._id})),e.elections.push(e.currentElection)})),Object(pe.a)(ee,ve.fulfilled,(function(e){e.currentElection.status="finished",e.elections.filter((function(t){return t._id!==e.currentElection._id})),e.elections.push(e.currentElection)})),ee)}),Ce=ye.actions,Ee=Ce.deleteElection,we=Ce.editElection,Te=Ce.emptyCurrentElection,ke=Ce.fetchElections,Se=Ce.saveElection,_e=Ce.setCurrentElection,Ae=Ce.setCandidates,Ie=ye.reducer,Ne=Object(w.c)({name:"panel",initialState:{open:!1},reducers:{openPanel:function(e){e.open=!0},closePanel:function(e){e.open=!1}}}),Pe=Ne.actions,We=Pe.closePanel,Ue=Pe.openPanel,Ve=Ne.reducer,De=Object(d.a)((function(){return{navbarRightButtons:{marginLeft:"auto"},navbar:{marginBottom:20}}})),qe=function(e){var t=e.actionIcon,n=e.path,a=De(),r=Object(o.b)(),i=Object(l.g)(),s=Object(o.c)((function(e){return e.auth.isAdmin}));return Object(c.jsx)("div",{className:"appbar-wrapper",children:Object(c.jsx)(ae.a,{position:"static",className:a.navbar,children:Object(c.jsxs)(re.a,{children:[Object(c.jsx)(ie.a,{edge:"start",color:"inherit",onClick:function(){"back"===t?(r(Te()),i.push(n.from)):i.push("/")},children:"back"===t?Object(c.jsx)(Oe.a,{}):Object(c.jsx)(ue.a,{})}),Object(c.jsx)(oe.a,{variant:"h5",children:"Voteapp"}),Object(c.jsxs)("div",{className:a.navbarRightButtons,children:[Object(c.jsx)(se.a,{title:"Admin Panel",children:Object(c.jsx)(ie.a,{color:"inherit",onClick:function(){s&&r(Ue())},children:Object(c.jsx)(je.a,{})})}),Object(c.jsx)(se.a,{title:"Logout",children:Object(c.jsx)(ie.a,{color:"inherit",onClick:function(){r((function(e){localStorage.removeItem("AUTH_TOKEN"),e(U())})),i.push("/login")},children:Object(c.jsx)(fe.a,{})})})]})]})})})};qe.defaultProps={actionIcon:"home",path:{from:""}};var Be=qe,Le=n(47),Fe=n(616),Re=n(632),Ye=n(638),He=function(){var e=Object(o.c)((function(e){return e.users.users})),t=Object(o.b)(),n=Object(o.c)((function(e){return e.locales.locale.userSelector}));return Object(c.jsx)(Re.a,{multiple:!0,options:e,getOptionLabel:function(e){return e.name},onChange:function(e,n){return t(Ae(n))},renderTags:function(e,t){return e.map((function(e,n){return Object(c.jsx)(Ye.a,Object(xe.a)({variant:"default",label:e.name},t({index:n})))}))},renderInput:function(e){return Object(c.jsx)(j.a,Object(xe.a)(Object(xe.a)({},e),{},{variant:"outlined",placeholder:n.placeholder}))}})},Me=Object(w.b)("users/fetchUsersStatus",function(){var e=Object(g.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.a.get("".concat(E,"/users/")).then((function(e){return e.data})).catch((function(e){return t.dispatch(S({message:e.response.data.error,variant:"error"}))})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ke=function(){var e=Object(p.b)(),t=e.handleSubmit,n=e.control,r=Object(a.useState)(!0),i=Object(Le.a)(r,1)[0],s=Object(o.b)(),l=Object(o.c)((function(e){return e.dialog.isOpen})),u=Object(o.c)((function(e){return e.locales.locale.createElectionDialog})),d=Object(o.c)((function(e){return e.election.selectedCandidates})),b=function(){return s(R())};return Object(a.useEffect)((function(){return s(Me())}),[]),Object(c.jsxs)(H.a,{open:l,onClose:b,fullWidth:!0,maxWidth:"xs",children:[Object(c.jsx)(M.a,{children:u.createElection}),Object(c.jsxs)("form",{action:"",onSubmit:t((function(e){s(function(e){return function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"POST",url:"".concat(E,"/elections"),data:e}).then((function(e){n(Se(e.data))})).catch((function(e){n(S({variant:"error",message:e.response.data.error}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(Object(xe.a)(Object(xe.a)({},e),{},{candidates:d}))),b()})),children:[Object(c.jsx)(K.a,{children:Object(c.jsxs)(f.a,{container:!0,direction:"column",children:[Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(p.a,{name:"title",as:Object(c.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"election-title",label:u.title,type:"text",fullWidth:!0,variant:"filled",name:"title"}),control:n,defaultValue:"",rules:{required:!0,min:6}})}),Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(p.a,{name:"position",as:Object(c.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"election-position",label:u.position,type:"text",fullWidth:!0,variant:"filled",name:"position"}),control:n,defaultValue:"",rules:{required:!0,min:6}})}),Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(X.a,{disabled:!0,control:Object(c.jsx)(Fe.a,{checked:i}),label:u.selectCandidates})}),i&&Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(He,{})})]})}),Object(c.jsxs)(Z.a,{children:[Object(c.jsx)(O.a,{color:"primary",onClick:b,children:u.cancel}),Object(c.jsx)(O.a,{color:"primary",type:"submit",children:u.create})]})]})]})},Ge=n(617),Je=n(618),Xe=n(619),ze=Object(d.a)({card:{width:275},editButton:{marginLeft:"auto"}}),Ze=function(e){var t=e.data,n=ze(),a=Object(l.g)(),r=Object(o.b)();return Object(c.jsx)(Ge.a,{className:n.card,variant:"outlined",onClick:function(){r(_e(t._id)),a.push("/election")},children:Object(c.jsx)(Je.a,{children:Object(c.jsxs)(Xe.a,{children:[Object(c.jsx)(oe.a,{variant:"h5",children:t.title}),Object(c.jsx)(oe.a,{children:t.position})]})})})},Qe=n(620),$e=n(276),et=n.n($e),tt=Object(d.a)((function(){return{fab:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed"}}})),nt=function(){var e=tt(),t=Object(o.b)();return Object(c.jsx)("div",{className:"fab-wrapper",children:Object(c.jsx)(Qe.a,{color:"secondary","aria-label":"add",className:e.fab,onClick:function(){return t(F())},children:Object(c.jsx)(et.a,{})})})},ct=function(e){var t=e.text;return Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(c.jsx)(oe.a,{variant:"h4",color:"secondary",style:{position:"absolute",margin:"0 auto",alignSelf:"center",justifySelf:"center"},children:t}),Object(c.jsx)("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg",width:"500px",height:"400px",style:{},children:Object(c.jsx)("path",{fill:"#8CB3FF",d:"M26.8,-48.5C38.8,-39.6,55.2,-40.5,66.5,-34C77.8,-27.6,84,-13.8,83.2,-0.5C82.3,12.8,74.5,25.6,66.5,37.9C58.5,50.1,50.5,61.8,39.4,67.7C28.3,73.6,14.1,73.8,1.5,71.2C-11.1,68.6,-22.3,63.3,-33.1,57.2C-43.8,51.1,-54.3,44.2,-58.2,34.5C-62.1,24.9,-59.5,12.4,-56.8,1.6C-54,-9.3,-51.2,-18.6,-48,-29.6C-44.9,-40.7,-41.6,-53.4,-33.5,-64.6C-25.5,-75.8,-12.7,-85.4,-2.6,-80.8C7.4,-76.2,14.9,-57.5,26.8,-48.5Z",transform:"translate(100 100)"})})]})},at=function(){var e=Object(o.b)();Object(a.useEffect)(Object(g.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat(E,"/elections/")).then((function(e){return t(ke(e.data))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(n){e(S({variant:"error",message:n}))}case 1:case"end":return t.stop()}}),t)}))),[]);var t=Object(o.c)((function(e){return e.election.elections})),n=Object(o.c)((function(e){return e.auth.isAdmin})),r=Object(o.c)((function(e){return e.locales.locale.dashboard}));return Object(c.jsxs)("div",{className:"dashboard-wrapper",children:[n&&Object(c.jsx)(nt,{}),Object(c.jsx)(Be,{}),Object(c.jsx)(Ke,{}),0===t.length&&Object(c.jsx)(ct,{text:r.blob}),Object(c.jsx)(f.a,{container:!0,spacing:2,justify:"center",alignItems:"center",style:{margin:0},xs:12,children:t.map((function(e){return Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(Ze,{data:{_id:e._id,title:e.title,position:e.position}})},ce.a.generate())}))})]})},rt=n(285),it=function(e){var t=e.children,n=Object(rt.a)(e,["children"]),a=Object(o.c)((function(e){return e.auth.authToken}));return Object(c.jsx)(l.b,Object(xe.a)(Object(xe.a)({},n),{},{render:function(){return""!==a?t:Object(c.jsx)(l.a,{to:"/login"})}}))},ot=n(277),st=n.n(ot),lt=function(e){var t=e.open,n=e.setIsWarningOpen,a=Object(o.b)(),r=Object(o.c)((function(e){return e.election.currentElection._id})),i=Object(o.c)((function(e){return e.locales.locale.deleteElectionWarning})),s=Object(l.g)();return Object(c.jsxs)(H.a,{open:t,children:[Object(c.jsx)(M.a,{children:i.dialogTitle}),Object(c.jsx)(K.a,{children:i.dialogContent}),Object(c.jsxs)(Z.a,{children:[Object(c.jsx)(O.a,{onClick:function(){return n(!1)},color:"secondary",children:i.cancel}),Object(c.jsx)(O.a,{onClick:function(){try{a(function(e){return function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"DELETE",url:"".concat(E,"/elections/").concat(e)}).then((function(){return n(Ee(e))})).catch((function(e){n(S({variant:"error",message:e.response.data.error}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(r)),n(!1),a(R()),s.push("/")}catch(e){a(S({variant:"error",message:e}))}},children:i.continue})]})]})},ut=function(){var e=Object(p.b)(),t=e.handleSubmit,n=e.control,r=Object(a.useState)(!1),i=Object(Le.a)(r,2),s=i[0],l=i[1],u=Object(o.c)((function(e){return e.dialog.isOpen})),d=Object(o.c)((function(e){return e.locales.locale.electionSettings})),b=Object(o.c)((function(e){return e.election.currentElection})),h=Object(o.b)();return Object(c.jsxs)("div",{className:"election-settings-wrapper",children:[Object(c.jsx)(lt,{open:s,setIsWarningOpen:l}),Object(c.jsx)(H.a,{open:u,fullWidth:!0,maxWidth:"xs",children:Object(c.jsxs)("form",{onSubmit:t((function(e){try{h(function(e){return function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"PATCH",url:"".concat(E,"/elections/").concat(e._id),data:e}).then((function(){return n(we(e))})).catch((function(e){n(S({variant:"error",message:e.response.data.error}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(Object(xe.a)(Object(xe.a)({},b),e))),h(R())}catch(t){h(S({variant:"error",message:t}))}})),children:[Object(c.jsx)(M.a,{children:d.dialogTitle}),Object(c.jsx)(K.a,{children:Object(c.jsxs)(f.a,{container:!0,direction:"column",children:[Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(p.a,{name:"title",as:Object(c.jsx)(j.a,{margin:"dense",label:d.title,type:"text",fullWidth:!0,variant:"filled",name:"title"}),control:n,defaultValue:"",rules:{required:!0,min:6}})}),Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(p.a,{name:"position",as:Object(c.jsx)(j.a,{margin:"dense",label:d.position,type:"text",fullWidth:!0,variant:"filled",name:"position"}),rules:{required:!0,min:6},defaultValue:"",control:n})})]})}),Object(c.jsx)(Z.a,{children:Object(c.jsxs)(f.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(ie.a,{onClick:function(){return l(!0)},children:Object(c.jsx)(st.a,{})})}),Object(c.jsx)(f.a,{item:!0,children:Object(c.jsxs)("div",{children:[Object(c.jsx)(O.a,{color:"primary",onClick:function(){return h(R())},children:d.cancel}),Object(c.jsx)(O.a,{color:"primary",type:"submit",children:d.accept})]})})]})})]})})]})},dt=n(278),jt=function(e){var t=e.map((function(e){return e.votes}));return{labels:e.map((function(e){return e.name})),datasets:[{label:"Number of votes",data:t,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]}},bt=function(){var e=Object(o.c)((function(e){return e.election.currentElection.candidates}));return Object(c.jsx)(dt.a,{data:jt(e),height:400,width:75,options:{maintainAspectRatio:!1}})},ft=Object(d.a)((function(){return{electionWrapper:{height:"100vh"},banner:{margin:0},banner__title:{marginTop:25,marginBottom:10},banner__position:{marginBottom:25}}})),ht=function(){var e=Object(o.c)((function(e){return e.election.currentElection})),t=Object(o.c)((function(e){return e.auth})),n=Object(o.c)((function(e){return e.locales.locale.electionDashboard})),r=1===e.registeredVotes.filter((function(e){return e===t._id})).length,i=ft(),s=Object(o.b)(),u=Object(l.g)();Object(a.useEffect)((function(){0===Object.keys(e).length&&u.push("/")}));return Object(c.jsxs)("div",{className:i.electionWrapper,children:[Object(c.jsx)(Be,{actionIcon:"back",path:{from:"/"}}),Object(c.jsx)(ut,{}),t.isAdmin&&Object(c.jsx)(nt,{}),Object(c.jsxs)(b.a,{maxWidth:"md",className:i.banner,children:[Object(c.jsx)(oe.a,{variant:"h4",className:i.banner__title,children:e.title}),Object(c.jsx)(oe.a,{variant:"h5",className:i.banner__position,children:e.position}),Object(c.jsx)(O.a,{color:"secondary",variant:"contained",onClick:function(){t.isAdmin?s(r?S({message:n.raiseAlertMessage,variant:"warning"}):ve(e._id)):u.push("/vote")},disabled:"finished"===e.status||r,children:"finished"===e.status?n.electionEnded:t.isAdmin?n.endElection:r?n.userVoted:n.voteNow}),t.isAdmin&&Object(c.jsx)(ie.a,{onClick:function(){return s(F())},children:Object(c.jsx)(je.a,{})})]}),Object(c.jsx)("div",{className:"winner-graph",children:"finished"===e.status?Object(c.jsx)(bt,{}):Object(c.jsx)(ct,{text:n.blob})})]})},Ot=n(633),pt=n(631),mt=function(){var e=Object(o.c)((function(e){return e.alert})),t=e.open,n=e.message,a=e.variant,r=Object(o.b)(),i=function(){r(_())};return Object(c.jsx)(Ot.a,{autoHideDuration:6e3,open:t,onClose:i,children:Object(c.jsx)(pt.a,{elevation:6,variant:"filled",severity:a,onClose:i,children:n})})},xt=n(639),gt=n(607),vt=n(562),yt=n(625),Ct=n(626),Et=n(282),wt=n.n(Et),Tt=n(283),kt=n.n(Tt),St=n(634),_t=n(621),At=n(622),It=n(623),Nt=n(281),Pt=n.n(Nt),Wt=Object(w.c)({name:"unverified",initialState:{unverifiedUsers:[]},reducers:{fetchUnverifiedUsers:function(e,t){e.unverifiedUsers=t.payload},verifyUser:function(e,t){e.unverifiedUsers=e.unverifiedUsers.filter((function(e){return e._id!==t.payload}))},denyUser:function(e,t){e.unverifiedUsers=e.unverifiedUsers.filter((function(e){return e._id!==t.payload}))}}}),Ut=Wt.actions,Vt=Ut.denyUser,Dt=Ut.fetchUnverifiedUsers,qt=Ut.verifyUser,Bt=Wt.reducer,Lt=Object(d.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},summary:{backgroundColor:"#d5d5d5"},summaryText:{margin:e.spacing(1)},details:{flexDirection:"column"}}})),Ft=function(e){var t=e.data,n=Lt(),a=Object(o.b)();return Object(c.jsxs)(St.a,{className:n.root,children:[Object(c.jsx)(_t.a,{expandIcon:Object(c.jsx)(Pt.a,{}),className:n.summary,children:Object(c.jsx)(oe.a,{variant:"h5",children:t.name})}),Object(c.jsxs)(At.a,{className:n.details,children:[Object(c.jsxs)(oe.a,{gutterBottom:!0,children:["Code:",t.code]}),Object(c.jsx)("br",{}),Object(c.jsxs)(oe.a,{gutterBottom:!0,children:["Email:",t.email]}),Object(c.jsx)("br",{}),Object(c.jsxs)(oe.a,{children:["Gender:",t.gender]})]}),Object(c.jsxs)(It.a,{children:[Object(c.jsx)(O.a,{color:"secondary",variant:"outlined",onClick:function(){var e;a((e=t._id,function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"DELETE",url:"".concat(E,"/users/deny/").concat(e)}).then((function(t){var c=t.data;n(Vt(e)),S({message:c.message,variant:"success"})})).catch((function(e){n(S({message:e.response.data.error,variant:"error"}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:"Deny"}),Object(c.jsx)(O.a,{type:"submit",color:"primary",variant:"contained",onClick:function(){var e;a((e=t._id,function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"PATCH",url:"".concat(E,"/users/verify/").concat(e)}).then((function(t){var c=t.data;n(qt(e)),S({message:c.message,variant:"success"})})).catch((function(e){n(S({message:e.response.data.error,variant:"error"}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:"Accept"})]})]})},Rt=function(e){var t=e.isOpen,n=e.onClose,r=Object(o.c)((function(e){return e.unverified.unverifiedUsers})),i=Object(o.b)();return Object(a.useEffect)((function(){i(function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()({method:"GET",url:"".concat(E,"/users/unverified")}).then((function(e){var n=e.data;t(Dt(n))})).catch((function(e){return t(S({message:e.response.data.error,variant:"error"}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(c.jsx)(H.a,{open:t,onClose:n,fullWidth:!0,children:Object(c.jsx)(K.a,{children:r.map((function(e){return Object(c.jsx)(Ft,{data:e},Object(ne.generate)())}))})})},Yt=n(606),Ht=n(629),Mt=n(624),Kt={language:"en",locale:{login:{password:"Password",logIn:"Log In",requestAccess:"Request access"},registerDialog:{dialogTitle:"Fill request",yourName:"Your Name",code:"Code",password:"Password",gender:"Gender",male:"Male",female:"Female",cancel:"Cancel",send:"Send"},dashboard:{blob:"There are no elections yet"},createElectionDialog:{createElection:"Create election",title:"Title",position:"Position",selectCandidates:"Select Candidates Beforehand",cancel:"Cancel",create:"Create"},userSelector:{placeholder:"Select the candidates"},adminPanel:{verifyUsers:"Verify Users"},candidateCard:{cardTitle:"Candidate"},deleteElectionWarning:{dialogTitle:"Are you sure you want to delete this?",dialogContent:"This can't be undone",cancel:"Cancel",continue:"Continue"},electionDashboard:{blob:"You can vote now!",raiseAlertMessage:"You already voted!",electionEnded:"The election has ended",userVoted:"You already voted",voteNow:"Vote now!",endElection:"End Election"},electionSettings:{dialogTitle:"Election settings",title:"Title",position:"Position",cancel:"Cancel",accept:"Accept"}}},Gt=Object(w.c)({name:"locales",initialState:Kt,reducers:{setLocale:function(e,t){e.language=t.payload,"en"===e.language?e.locale={login:{password:"Password",logIn:"Log In",requestAccess:"Request access"},registerDialog:{dialogTitle:"Fill request",yourName:"Your Name",code:"Code",password:"Password",gender:"Gender",male:"Male",female:"Female",cancel:"Cancel",send:"Send"},dashboard:{blob:"There are no elections yet"},createElectionDialog:{createElection:"Create election",title:"Title",position:"Position",selectCandidates:"Select Candidates Beforehand",cancel:"Cancel",create:"Create"},userSelector:{placeholder:"Select the candidates"},adminPanel:{verifyUsers:"Verify Users"},candidateCard:{cardTitle:"Candidate"},deleteElectionWarning:{dialogTitle:"Are you sure you want to delete this?",dialogContent:"This can't be undone",cancel:"Cancel",continue:"Continue"},electionDashboard:{blob:"You can vote now!",raiseAlertMessage:"You already voted!",electionEnded:"The election has ended",userVoted:"You already voted",voteNow:"Vote now!",endElection:"End Election"},electionSettings:{dialogTitle:"Election settings",title:"Title",position:"Position",cancel:"Cancel",accept:"Accept"}}:e.locale={login:{password:"Contrase\xf1a",logIn:"Ingresar",requestAccess:"Solicitar acceso"},registerDialog:{dialogTitle:"Llena la solicitud",yourName:"Tu nombre",code:"C\xf3digo",password:"Contrase\xf1a",gender:"G\xe9nero",male:"Hombre",female:"Mujer",cancel:"Cancelar",send:"Enviar"},dashboard:{blob:"No hay elecciones."},createElectionDialog:{createElection:"Crear elecci\xf3n",title:"Titulo",position:"Posici\xf3n",selectCandidates:"Seleccionar candidatos de antemano",cancel:"Cancelar",create:"Crear"},userSelector:{placeholder:"Selecciona los candidatos"},adminPanel:{verifyUsers:"Verificar usuarios"},candidateCard:{cardTitle:"Candidato"},deleteElectionWarning:{dialogTitle:"Est\xe1 seguro que quiere eliminar esta elecci\xf3n?",dialogContent:"Esto no puede deshacerse",cancel:"Cancelar",continue:"Continuar"},electionDashboard:{blob:"Puede votar ahora!",raiseAlertMessage:"Ya has votado!",electionEnded:"La elecci\xf3n ha terminado",userVoted:"Ya has votado!",voteNow:"Vota ahora!",endElection:"Terminar elecci\xf3n"},electionSettings:{dialogTitle:"Ajustes de elecci\xf3n",title:"T\xedtulo",position:"Posici\xf3n",cancel:"Cancelar",accept:"Aceptar"}}}}}),Jt=Gt.actions.setLocale,Xt=Gt.reducer,zt=function(){var e=Object(o.b)();return Object(c.jsxs)(h.a,{style:{padding:10},children:[Object(c.jsx)(Yt.a,{children:"Language"}),Object(c.jsxs)(Ht.a,{onChange:function(t){e(Jt(t.target.value))},defaultValue:"en",children:[Object(c.jsx)(Mt.a,{value:"en",children:"English"}),Object(c.jsx)(Mt.a,{value:"es",children:"Espa\xf1ol"})]})]})},Zt=function(){var e=Object(a.useState)(!1),t=Object(Le.a)(e,2),n=t[0],r=t[1],i=Object(o.b)(),s=Object(o.c)((function(e){return e.panel.open})),l=Object(o.c)((function(e){return e.locales.locale.adminPanel})),u=Object(o.c)((function(e){return e.unverified.unverifiedUsers.length}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(xt.a,{open:s,anchor:"right",onClose:function(){return i(We())},children:Object(c.jsxs)(gt.a,{children:[Object(c.jsxs)(vt.a,{button:!0,onClick:function(){0===u?i(S({message:"There are no users left to check",variant:"warning"})):r(!0)},children:[Object(c.jsx)(yt.a,{children:Object(c.jsx)(wt.a,{})}),Object(c.jsx)(Ct.a,{primary:l.verifyUsers})]}),Object(c.jsxs)(vt.a,{children:[Object(c.jsx)(yt.a,{children:Object(c.jsx)(kt.a,{})}),Object(c.jsx)(zt,{})]})]})}),Object(c.jsx)(Rt,{isOpen:n,onClose:function(){return r(!1)}})]})},Qt=n(627),$t=n(640),en=n(628),tn=function(e){var t=e.data,n=e.onClick,a=Object(o.c)((function(e){return e.locales.locale.candidateCard}));return Object(c.jsxs)(Ge.a,{style:{maxWidth:500,width:250},children:[Object(c.jsx)(Qt.a,{avatar:Object(c.jsx)($t.a,{children:t.name[0]}),title:a.candidateCard}),Object(c.jsxs)(Xe.a,{children:[Object(c.jsx)(oe.a,{children:t.name}),Object(c.jsx)(oe.a,{children:t.code})]}),Object(c.jsx)(en.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(c.jsx)(ie.a,{onClick:function(){return n(t._id)},children:Object(c.jsx)(ue.a,{})})})]})},nn=Object(d.a)((function(){return{votingPanel:{height:"100vh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}})),cn=function(){var e=Object(o.c)((function(e){return e.election.currentElection.candidates}))||[],t=Object(o.c)((function(e){return e.election.currentElection._id})),n=Object(o.c)((function(e){return e.auth._id})),r=nn(),i=Object(l.g)(),s=Object(o.b)(),u=function(e){s(ge({electionId:t,userId:n,candidateId:e})),i.push("/election")};return Object(a.useEffect)((function(){0===e.length&&i.push("/")})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ie.a,{onClick:function(){i.push("/election")},children:Object(c.jsx)(Oe.a,{})}),Object(c.jsx)("div",{className:r.votingPanel,children:e.map((function(e){return Object(c.jsx)(tn,{data:e,onClick:u},Object(ne.generate)())}))})]})},an=Object(d.a)({app:{height:"100vh"}});var rn=function(){var e=an(),t=Object(o.c)((function(e){return e.auth.isAdmin}));return Object(c.jsxs)("div",{className:e.app,children:[t&&Object(c.jsx)(Zt,{}),Object(c.jsx)(mt,{}),Object(c.jsx)(u.a,{children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{path:"/login",children:Object(c.jsx)(te,{})}),Object(c.jsx)(it,{path:"/vote",children:Object(c.jsx)(cn,{})}),Object(c.jsx)(it,{path:"/election",children:Object(c.jsx)(ht,{})}),Object(c.jsx)(it,{path:"/",children:Object(c.jsx)(at,{})})]})})]})},on=n(50),sn=Object(w.c)({name:"users",initialState:{users:[]},reducers:{setUser:function(e,t){e.users=t.payload}},extraReducers:Object(pe.a)({},Me.fulfilled,(function(e,t){e.users=t.payload}))}),ln=(sn.actions.setUser,sn.reducer),un=Object(on.c)({auth:q,dialog:Y,election:Ie,alert:A,panel:Ve,unverified:Bt,users:ln,locales:Xt}),dn=Object(w.a)({reducer:un});Object(s.config)(),i.a.render(Object(c.jsx)(o.a,{store:dn,children:Object(c.jsx)(rn,{})}),document.getElementById("root"))}},[[555,1,2]]]);
//# sourceMappingURL=main.3f5a5301.chunk.js.map