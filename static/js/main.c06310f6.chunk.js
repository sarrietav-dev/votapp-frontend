(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{197:function(e,t,n){},204:function(e,t,n){},337:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n(15),i=n.n(r),s=(n(197),n(7)),o=n(165),l=(n(204),n(13)),u=n(176),d=n(394),j=n(417),b=n(395),h=n(384),f=n(387),O=n(393),p=n(21),m=n(9),x=n.n(m),g=n(16),v=n(27),y=n.n(v),C="https://votapp-backend.herokuapp.com/api",E=n(17),w=Object(E.c)({name:"alerts",initialState:{open:!1,message:"",variant:"info"},reducers:{raiseAlert:function(e,t){e.open=!0,e.message=t.payload.message,e.variant=t.payload.variant},closeAlert:function(e,t){e.open=!1,e.message="",e.variant=""}}}),k=w.actions,S=k.raiseAlert,T=k.closeAlert,_=w.reducer,I=Object(E.c)({name:"auth",initialState:{authToken:"",isAdmin:"",_id:""},reducers:{setAuthToken:function(e,t){e.authToken=t.payload},logOut:function(e){e.authToken="",e.isAdmin=!1,e._id=""},setData:function(e,t){e.isAdmin=t.payload.is_admin,e._id=t.payload._id}}}),A=I.actions,N=A.logOut,W=A.setAuthToken,P=A.setData,U=I.reducer,V=Object(E.c)({name:"dialog",initialState:{isOpen:!1},reducers:{openDialog:function(e){e.isOpen=!0},closeDialog:function(e){e.isOpen=!1}}}),q=V.actions,D=q.openDialog,B=q.closeDialog,L=V.reducer,M=n(379),F=n(382),R=n(383),Y=n(341),H=n(419),G=n(390),J=n(412),z=n(388),K=n(411),Q=n(391),Z=n(392),X=function(){var e=Object(s.c)((function(e){return e.dialog.isOpen})),t=Object(s.c)((function(e){return e.locales.locale.registerDialog})),n=Object(p.b)(),a=n.handleSubmit,r=n.control,i=Object(s.b)();return Object(c.jsxs)(M.a,{open:e,maxWidth:"xs",fullWidth:!0,children:[Object(c.jsx)(F.a,{children:t.dialogTitle}),Object(c.jsxs)("form",{onSubmit:a((function(e){i(function(e){return function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"POST",url:"".concat(C,"/users/"),data:e}).then((function(){Object.prototype.hasOwnProperty.call(e,"is_admin")?n(S({message:"New admin has been created",variant:"success"})):n(S({message:"Request sent!",variant:"success"}))})).catch((function(e){return n(S({message:e.response.data.error,variant:"error"}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),i(B())})),children:[Object(c.jsx)(R.a,{children:Object(c.jsxs)(h.a,{container:!0,spacing:3,direction:"column",children:[Object(c.jsx)(h.a,{item:!0,xs:12,children:Object(c.jsx)(p.a,{name:"name",as:Object(c.jsx)(j.a,{name:"name",label:t.yourName,fullWidth:!0}),control:r,defaultValue:"",rules:{required:!0}})}),Object(c.jsx)(h.a,{item:!0,xs:!0,children:Object(c.jsx)(p.a,{name:"code",as:Object(c.jsx)(j.a,{type:"number",name:"code",label:t.code,fullWidth:!0}),control:r,defaultValue:"",rules:{required:!0,maxLength:10}})}),Object(c.jsx)(h.a,{item:!0,xs:!0,children:Object(c.jsx)(p.a,{name:"email",as:Object(c.jsx)(j.a,{type:"email",name:"email",label:"Email",fullWidth:!0}),control:r,defaultValue:"",rules:{required:!0}})}),Object(c.jsx)(h.a,{item:!0,xs:!0,children:Object(c.jsx)(p.a,{name:"password",as:Object(c.jsx)(j.a,{type:"password",name:"password",label:t.password,fullWidth:!0}),control:r,defaultValue:"",rules:{required:!0}})}),Object(c.jsx)(h.a,{item:!0,xs:!0,children:Object(c.jsx)(p.a,{name:"gender",as:Object(c.jsxs)(f.a,{component:"fieldset",fullWidth:!0,children:[Object(c.jsx)(Y.a,{component:"legend",children:t.gender}),Object(c.jsxs)(H.a,{"aria-label":"gender",name:"gender",children:[Object(c.jsx)(G.a,{value:"female",label:t.female,control:Object(c.jsx)(J.a,{})}),Object(c.jsx)(G.a,{value:"male",label:t.male,control:Object(c.jsx)(J.a,{})})]})]}),control:r,defaultValue:"",rules:{required:!0}})}),Object(c.jsx)(h.a,{item:!0,xs:!0,children:Object(c.jsxs)(f.a,{fullWidth:!0,children:[Object(c.jsx)(z.a,{children:"Career"}),Object(c.jsx)(p.a,{name:"career",as:Object(c.jsxs)(K.a,{fullWidth:!0,children:[Object(c.jsx)(Q.a,{value:"computerScience",children:t.careers.computerScience}),Object(c.jsx)(Q.a,{value:"chemistryEngineering",children:t.careers.chemistryEngineering}),Object(c.jsx)(Q.a,{value:"civilEngineering",children:t.careers.civilEngineering}),Object(c.jsx)(Q.a,{value:"medicine",children:t.careers.medicine})]}),control:r,rules:{required:!0}})]})}),Object(c.jsx)(h.a,{item:!0,xs:!0,children:Object(c.jsx)(p.a,{name:"semester",as:Object(c.jsx)(j.a,{type:"number",InputProps:{inputProps:{min:1,max:10}},label:"Semester",fullWidth:!0}),control:r,defaultValue:1,rules:{required:!0}})})]})}),Object(c.jsxs)(Z.a,{children:[Object(c.jsx)(O.a,{onClick:function(){return i(B())},color:"secondary",variant:"outlined",children:t.cancel}),Object(c.jsx)(O.a,{type:"submit",color:"primary",variant:"contained",children:t.send})]})]})]})},$=Object(d.a)((function(e){return{container:{padding:e.spacing(2)}}}));var ee,te=function(){var e=Object(p.b)(),t=e.handleSubmit,n=e.control,r=$(),i=Object(l.g)(),o=Object(s.b)(),u=Object(s.c)((function(e){return e.auth.authToken})),d=Object(s.c)((function(e){return e.locales.locale.login}));return Object(a.useEffect)((function(){""!==u&&i.push("/")}),[u]),Object(c.jsxs)(b.a,{className:r.container,maxWidth:"md",children:[Object(c.jsx)("form",{action:"",onSubmit:t((function(e){o(function(e){return function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"POST",url:"".concat(C,"/login/"),data:e}).then((function(e){var t=e.data.token;n(W(t)),n(P({_id:e.data._id,is_admin:e.data.is_admin}))})).catch((function(e){n(S({variant:"error",message:e.response.data.error}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),i.push("/")})),children:Object(c.jsx)(h.a,{container:!0,spacing:2,alignItems:"center",justify:"center",style:{minHeight:"100vh"},children:Object(c.jsx)(h.a,{item:!0,children:Object(c.jsxs)(h.a,{container:!0,spacing:3,direction:"column",alignItems:"center",children:[Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(f.a,{children:Object(c.jsx)(p.a,{name:"email",as:Object(c.jsx)(j.a,{variant:"outlined",name:"email",label:"Email"}),control:n,defaultValue:"",rules:{required:!0,min:6,max:1024}})})}),Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(f.a,{children:Object(c.jsx)(p.a,{name:"password",as:Object(c.jsx)(j.a,{label:d.password,name:"password",type:"password",variant:"outlined"}),control:n,defaultValue:"",rules:{required:!0,min:6,max:1024}})})}),Object(c.jsxs)(h.a,{container:!0,spacing:2,children:[Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(O.a,{color:"primary",type:"submit",variant:"contained",children:d.logIn})}),Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(O.a,{color:"primary",variant:"outlined",onClick:function(){o(D())},children:d.requestAccess})})]})]})})})}),Object(c.jsx)(X,{})]})},ne=n(72),ce=n.n(ne),ae=n(396),re=n(397),ie=n(180),se=n(46),oe=n(398),le=n(103),ue=n.n(le),de=n(104),je=n.n(de),be=n(167),he=n.n(be),fe=n(102),Oe=n.n(fe),pe=n(29),me=n(23),xe=n(31),ge=Object(E.b)("elections/voteStatus",function(){var e=Object(g.a)(x.a.mark((function e(t,n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.patch("".concat(C,"/elections/vote/").concat(t.electionId),{userId:t.userId,candidateId:t.candidateId}).then((function(e){return n.dispatch(S({message:"Ballot stored!",variant:"success"})),e})).catch((function(e){return n.dispatch(S({message:e.response.data.error,variant:"error"}))}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),ve=Object(E.b)("elections/endElectionStatus",function(){var e=Object(g.a)(x.a.mark((function e(t,n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.patch("".concat(C,"/elections/end/").concat(t)).then((function(e){return n.dispatch(S({message:"The election has ended successfully",variant:"success"})),e})).catch((function(e){n.dispatch(S({message:e.response.data.error,variant:"error"}))}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),ye=Object(E.c)({name:"elections",initialState:{elections:[],currentElection:{},selectedCandidates:[]},reducers:{fetchElections:function(e,t){e.elections=t.payload},saveElection:function(e,t){e.elections.push(t.payload)},setCurrentElection:function(e,t){e.currentElection=e.elections.filter((function(e){return e._id===t.payload}))[0]},emptyCurrentElection:function(e){e.currentElection={}},deleteElection:function(e,t){e.elections=e.elections.filter((function(e){return e._id!==t.payload})),e.currentElection={}},editElection:function(e,t){e.elections=function(e,t){var n=function(e,t){return e.filter((function(e){return e._id!==t}))}(e,t._id),c=Object(xe.a)({},t);return[].concat(Object(me.a)(n),[c])}(e.elections,t.payload),e.currentElection=t.payload},setCandidates:function(e,t){e.selectedCandidates=t.payload}},extraReducers:(ee={},Object(pe.a)(ee,ge.fulfilled,(function(e,t){var n=e.currentElection.candidates.filter((function(e){return e._id===t.payload.candidateId}));n.votes+=1,e.currentElection.candidates.filter((function(e){return e._id!==t.payload.candidateId})),e.currentElection.candidates.push(n),e.currentElection.registeredVotes.push(t.payload.userId),e.elections.filter((function(t){return t._id!==e.currentElection._id})),e.elections.push(e.currentElection)})),Object(pe.a)(ee,ve.fulfilled,(function(e){e.currentElection.status="finished",e.elections.filter((function(t){return t._id!==e.currentElection._id})),e.elections.push(e.currentElection)})),ee)}),Ce=ye.actions,Ee=Ce.deleteElection,we=Ce.editElection,ke=Ce.emptyCurrentElection,Se=Ce.fetchElections,Te=Ce.saveElection,_e=Ce.setCurrentElection,Ie=Ce.setCandidates,Ae=ye.reducer,Ne=Object(E.c)({name:"panel",initialState:{open:!1},reducers:{openPanel:function(e){e.open=!0},closePanel:function(e){e.open=!1}}}),We=Ne.actions,Pe=We.closePanel,Ue=We.openPanel,Ve=Ne.reducer,qe=Object(d.a)((function(){return{navbarRightButtons:{marginLeft:"auto"},navbar:{marginBottom:20}}})),De=function(e){var t=e.actionIcon,n=e.path,a=qe(),r=Object(s.b)(),i=Object(l.g)();return Object(c.jsx)("div",{className:"appbar-wrapper",children:Object(c.jsx)(ae.a,{position:"static",className:a.navbar,children:Object(c.jsxs)(re.a,{children:[Object(c.jsx)(ie.a,{edge:"start",color:"inherit",onClick:function(){"back"===t?(r(ke()),i.push(n.from)):i.push("/")},children:"back"===t?Object(c.jsx)(Oe.a,{}):Object(c.jsx)(ue.a,{})}),Object(c.jsx)(se.a,{variant:"h5",children:"Voteapp"}),Object(c.jsxs)("div",{className:a.navbarRightButtons,children:[Object(c.jsx)(oe.a,{title:"Admin Panel",children:Object(c.jsx)(ie.a,{color:"inherit",onClick:function(){r(Ue())},children:Object(c.jsx)(je.a,{})})}),Object(c.jsx)(oe.a,{title:"Logout",children:Object(c.jsx)(ie.a,{color:"inherit",onClick:function(){r((function(e){localStorage.removeItem("AUTH_TOKEN"),e(N())})),i.push("/login")},children:Object(c.jsx)(he.a,{})})})]})]})})})};De.defaultProps={actionIcon:"home",path:{from:""}};var Be=De,Le=n(40),Me=n(399),Fe=n(414),Re=n(420),Ye=function(){var e=Object(s.c)((function(e){return e.users.users})),t=Object(s.b)(),n=Object(s.c)((function(e){return e.locales.locale.userSelector}));return Object(c.jsx)(Fe.a,{multiple:!0,options:e,getOptionLabel:function(e){return e.name},onChange:function(e,n){return t(Ie(n))},renderTags:function(e,t){return e.map((function(e,n){return Object(c.jsx)(Re.a,Object(xe.a)({variant:"default",label:e.name},t({index:n})))}))},renderInput:function(e){return Object(c.jsx)(j.a,Object(xe.a)(Object(xe.a)({},e),{},{variant:"outlined",placeholder:n.placeholder}))}})},He=Object(E.b)("users/fetchUsersStatus",function(){var e=Object(g.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.a.get("".concat(C,"/users/")).then((function(e){return e.data})).catch((function(e){return t.dispatch(S({message:e.response.data.error,variant:"error"}))})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ge=function(){var e=Object(p.b)(),t=e.handleSubmit,n=e.control,r=Object(a.useState)(!0),i=Object(Le.a)(r,1)[0],o=Object(s.b)(),l=Object(s.c)((function(e){return e.dialog.isOpen})),u=Object(s.c)((function(e){return e.locales.locale.createElectionDialog})),d=Object(s.c)((function(e){return e.election.selectedCandidates})),b=function(){return o(B())};return Object(a.useEffect)((function(){return o(He())}),[]),Object(c.jsxs)(M.a,{open:l,onClose:b,fullWidth:!0,maxWidth:"xs",children:[Object(c.jsx)(F.a,{children:u.createElection}),Object(c.jsxs)("form",{action:"",onSubmit:t((function(e){o(function(e){return function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"POST",url:"".concat(C,"/elections"),data:e}).then((function(e){n(Te(e.data))})).catch((function(e){n(S({variant:"error",message:e.response.data.error}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(Object(xe.a)(Object(xe.a)({},e),{},{candidates:d}))),b()})),children:[Object(c.jsx)(R.a,{children:Object(c.jsxs)(h.a,{container:!0,direction:"column",children:[Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(p.a,{name:"title",as:Object(c.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"election-title",label:u.title,type:"text",fullWidth:!0,variant:"filled",name:"title"}),control:n,defaultValue:"",rules:{required:!0,min:6}})}),Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(p.a,{name:"position",as:Object(c.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"election-position",label:u.position,type:"text",fullWidth:!0,variant:"filled",name:"position"}),control:n,defaultValue:"",rules:{required:!0,min:6}})}),Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(G.a,{disabled:!0,control:Object(c.jsx)(Me.a,{checked:i}),label:u.selectCandidates})}),i&&Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(Ye,{})})]})}),Object(c.jsxs)(Z.a,{children:[Object(c.jsx)(O.a,{color:"primary",onClick:b,children:u.cancel}),Object(c.jsx)(O.a,{color:"primary",type:"submit",children:u.create})]})]})]})},Je=n(400),ze=n(401),Ke=n(402),Qe=Object(d.a)({card:{width:275},editButton:{marginLeft:"auto"}}),Ze=function(e){var t=e.data,n=Qe(),a=Object(l.g)(),r=Object(s.b)();return Object(c.jsx)(Je.a,{className:n.card,variant:"outlined",onClick:function(){r(_e(t._id)),a.push("/election")},children:Object(c.jsx)(ze.a,{children:Object(c.jsxs)(Ke.a,{children:[Object(c.jsx)(se.a,{variant:"h5",children:t.title}),Object(c.jsx)(se.a,{children:t.position})]})})})},Xe=n(403),$e=n(168),et=n.n($e),tt=Object(d.a)((function(){return{fab:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed"}}})),nt=function(){var e=tt(),t=Object(s.b)();return Object(c.jsx)("div",{className:"fab-wrapper",children:Object(c.jsx)(Xe.a,{color:"secondary","aria-label":"add",className:e.fab,onClick:function(){return t(D())},children:Object(c.jsx)(et.a,{})})})},ct=function(e){var t=e.text;return Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(c.jsx)(se.a,{variant:"h4",color:"secondary",style:{position:"absolute",margin:"0 auto",alignSelf:"center",justifySelf:"center"},children:t}),Object(c.jsx)("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg",width:"500px",height:"400px",style:{},children:Object(c.jsx)("path",{fill:"#8CB3FF",d:"M26.8,-48.5C38.8,-39.6,55.2,-40.5,66.5,-34C77.8,-27.6,84,-13.8,83.2,-0.5C82.3,12.8,74.5,25.6,66.5,37.9C58.5,50.1,50.5,61.8,39.4,67.7C28.3,73.6,14.1,73.8,1.5,71.2C-11.1,68.6,-22.3,63.3,-33.1,57.2C-43.8,51.1,-54.3,44.2,-58.2,34.5C-62.1,24.9,-59.5,12.4,-56.8,1.6C-54,-9.3,-51.2,-18.6,-48,-29.6C-44.9,-40.7,-41.6,-53.4,-33.5,-64.6C-25.5,-75.8,-12.7,-85.4,-2.6,-80.8C7.4,-76.2,14.9,-57.5,26.8,-48.5Z",transform:"translate(100 100)"})})]})},at=function(){var e=Object(s.b)();Object(a.useEffect)(Object(g.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat(C,"/elections/")).then((function(e){return t(Se(e.data))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(n){e(S({variant:"error",message:n}))}case 1:case"end":return t.stop()}}),t)}))),[]);var t=Object(s.c)((function(e){return e.election.elections})),n=Object(s.c)((function(e){return e.auth.isAdmin})),r=Object(s.c)((function(e){return e.locales.locale.dashboard}));return Object(c.jsxs)("div",{className:"dashboard-wrapper",children:[n&&Object(c.jsx)(nt,{}),Object(c.jsx)(Be,{}),Object(c.jsx)(Ge,{}),0===t.length&&Object(c.jsx)(ct,{text:r.blob}),Object(c.jsx)(h.a,{container:!0,spacing:2,justify:"center",alignItems:"center",style:{margin:0},xs:12,children:t.map((function(e){return Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(Ze,{data:{_id:e._id,title:e.title,position:e.position}})},ce.a.generate())}))})]})},rt=n(177),it=function(e){var t=e.children,n=Object(rt.a)(e,["children"]),a=Object(s.c)((function(e){return e.auth.authToken}));return Object(c.jsx)(l.b,Object(xe.a)(Object(xe.a)({},n),{},{render:function(){return""!==a?t:Object(c.jsx)(l.a,{to:"/login"})}}))},st=n(169),ot=n.n(st),lt=function(e){var t=e.open,n=e.setIsWarningOpen,a=Object(s.b)(),r=Object(s.c)((function(e){return e.election.currentElection._id})),i=Object(s.c)((function(e){return e.locales.locale.deleteElectionWarning})),o=Object(l.g)();return Object(c.jsxs)(M.a,{open:t,children:[Object(c.jsx)(F.a,{children:i.dialogTitle}),Object(c.jsx)(R.a,{children:i.dialogContent}),Object(c.jsxs)(Z.a,{children:[Object(c.jsx)(O.a,{onClick:function(){return n(!1)},color:"secondary",children:i.cancel}),Object(c.jsx)(O.a,{onClick:function(){try{a(function(e){return function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"DELETE",url:"".concat(C,"/elections/").concat(e)}).then((function(){return n(Ee(e))})).catch((function(e){n(S({variant:"error",message:e.response.data.error}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(r)),n(!1),a(B()),o.push("/")}catch(e){a(S({variant:"error",message:e}))}},children:i.continue})]})]})},ut=function(){var e=Object(p.b)(),t=e.handleSubmit,n=e.control,r=Object(a.useState)(!1),i=Object(Le.a)(r,2),o=i[0],l=i[1],u=Object(s.c)((function(e){return e.dialog.isOpen})),d=Object(s.c)((function(e){return e.locales.locale.electionSettings})),b=Object(s.c)((function(e){return e.election.currentElection})),f=Object(s.b)();return Object(c.jsxs)("div",{className:"election-settings-wrapper",children:[Object(c.jsx)(lt,{open:o,setIsWarningOpen:l}),Object(c.jsx)(M.a,{open:u,fullWidth:!0,maxWidth:"xs",children:Object(c.jsxs)("form",{onSubmit:t((function(e){try{f(function(e){return function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"PATCH",url:"".concat(C,"/elections/").concat(e._id),data:e}).then((function(){return n(we(e))})).catch((function(e){n(S({variant:"error",message:e.response.data.error}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(Object(xe.a)(Object(xe.a)({},b),e))),f(B())}catch(t){f(S({variant:"error",message:t}))}})),children:[Object(c.jsx)(F.a,{children:d.dialogTitle}),Object(c.jsx)(R.a,{children:Object(c.jsxs)(h.a,{container:!0,direction:"column",children:[Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(p.a,{name:"title",as:Object(c.jsx)(j.a,{margin:"dense",label:d.title,type:"text",fullWidth:!0,variant:"filled",name:"title"}),control:n,defaultValue:"",rules:{required:!0,min:6}})}),Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(p.a,{name:"position",as:Object(c.jsx)(j.a,{margin:"dense",label:d.position,type:"text",fullWidth:!0,variant:"filled",name:"position"}),rules:{required:!0,min:6},defaultValue:"",control:n})})]})}),Object(c.jsx)(Z.a,{children:Object(c.jsxs)(h.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(ie.a,{onClick:function(){return l(!0)},children:Object(c.jsx)(ot.a,{})})}),Object(c.jsx)(h.a,{item:!0,children:Object(c.jsxs)("div",{children:[Object(c.jsx)(O.a,{color:"primary",onClick:function(){return f(B())},children:d.cancel}),Object(c.jsx)(O.a,{color:"primary",type:"submit",children:d.accept})]})})]})})]})})]})},dt=n(170),jt=function(e){var t=e.map((function(e){return e.votes}));return{labels:e.map((function(e){return e.name})),datasets:[{label:"Number of votes",data:t,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]}},bt=function(){var e=Object(s.c)((function(e){return e.election.currentElection.candidates}));return Object(c.jsx)(dt.a,{data:jt(e),height:400,width:75,options:{maintainAspectRatio:!1}})},ht=Object(d.a)((function(){return{electionWrapper:{height:"100vh"},banner:{margin:0},banner__title:{marginTop:25,marginBottom:10},banner__position:{marginBottom:25}}})),ft=function(){var e=Object(s.c)((function(e){return e.election.currentElection})),t=Object(s.c)((function(e){return e.auth})),n=Object(s.c)((function(e){return e.locales.locale.electionDashboard})),r=1===e.registeredVotes.filter((function(e){return e===t._id})).length,i=ht(),o=Object(s.b)(),u=Object(l.g)();Object(a.useEffect)((function(){0===Object.keys(e).length&&u.push("/")}));return Object(c.jsxs)("div",{className:i.electionWrapper,children:[Object(c.jsx)(Be,{actionIcon:"back",path:{from:"/"}}),Object(c.jsx)(ut,{}),t.isAdmin&&Object(c.jsx)(nt,{}),Object(c.jsxs)(b.a,{maxWidth:"md",className:i.banner,children:[Object(c.jsx)(se.a,{variant:"h4",className:i.banner__title,children:e.title}),Object(c.jsx)(se.a,{variant:"h5",className:i.banner__position,children:e.position}),Object(c.jsx)(O.a,{color:"secondary",variant:"contained",onClick:function(){t.isAdmin?o(r?S({message:n.raiseAlertMessage,variant:"warning"}):ve(e._id)):u.push("/vote")},disabled:"finished"===e.status||r,children:"finished"===e.status?n.electionEnded:t.isAdmin?n.endElection:r?n.userVoted:n.voteNow}),t.isAdmin&&Object(c.jsx)(ie.a,{onClick:function(){return o(D())},children:Object(c.jsx)(je.a,{})})]}),Object(c.jsx)("div",{className:"winner-graph",children:"finished"===e.status?Object(c.jsx)(bt,{}):Object(c.jsx)(ct,{text:n.blob})})]})},Ot=n(415),pt=n(413),mt=function(){var e=Object(s.c)((function(e){return e.alert})),t=e.open,n=e.message,a=e.variant,r=Object(s.b)(),i=function(){r(T())};return Object(c.jsx)(Ot.a,{autoHideDuration:6e3,open:t,onClose:i,children:Object(c.jsx)(pt.a,{elevation:6,variant:"filled",severity:a,onClose:i,children:n})})},xt=n(343),gt=n(407),vt=n(408),yt=n(421),Ct=n(389),Et=n(174),wt=n.n(Et),kt=n(175),St=n.n(kt),Tt=n(416),_t=n(404),It=n(405),At=n(406),Nt=n(173),Wt=n.n(Nt),Pt=Object(E.c)({name:"unverified",initialState:{unverifiedUsers:[]},reducers:{fetchUnverifiedUsers:function(e,t){e.unverifiedUsers=t.payload},verifyUser:function(e,t){e.unverifiedUsers=e.unverifiedUsers.filter((function(e){return e._id!==t.payload}))},denyUser:function(e,t){e.unverifiedUsers=e.unverifiedUsers.filter((function(e){return e._id!==t.payload}))}}}),Ut=Pt.actions,Vt=Ut.denyUser,qt=Ut.fetchUnverifiedUsers,Dt=Ut.verifyUser,Bt=Pt.reducer,Lt=Object(d.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},summary:{backgroundColor:"#d5d5d5"},summaryText:{margin:e.spacing(1)},details:{flexDirection:"column"}}})),Mt=function(e){var t=e.data,n=Lt(),a=Object(s.b)();return Object(c.jsxs)(Tt.a,{className:n.root,children:[Object(c.jsx)(_t.a,{expandIcon:Object(c.jsx)(Wt.a,{}),className:n.summary,children:Object(c.jsx)(se.a,{variant:"h5",children:t.name})}),Object(c.jsxs)(It.a,{className:n.details,children:[Object(c.jsxs)(se.a,{gutterBottom:!0,children:["Code:",t.code]}),Object(c.jsx)("br",{}),Object(c.jsxs)(se.a,{gutterBottom:!0,children:["Email:",t.email]}),Object(c.jsx)("br",{}),Object(c.jsxs)(se.a,{children:["Gender:",t.gender]})]}),Object(c.jsxs)(At.a,{children:[Object(c.jsx)(O.a,{color:"secondary",variant:"outlined",onClick:function(){var e;a((e=t._id,function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"DELETE",url:"".concat(C,"/users/deny/").concat(e)}).then((function(t){var c=t.data;n(Vt(e)),S({message:c.message,variant:"success"})})).catch((function(e){n(S({message:e.response.data.error,variant:"error"}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:"Deny"}),Object(c.jsx)(O.a,{type:"submit",color:"primary",variant:"contained",onClick:function(){var e;a((e=t._id,function(){var t=Object(g.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()({method:"PATCH",url:"".concat(C,"/users/verify/").concat(e)}).then((function(t){var c=t.data;n(Dt(e)),S({message:c.message,variant:"success"})})).catch((function(e){n(S({message:e.response.data.error,variant:"error"}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:"Accept"})]})]})},Ft=function(e){var t=e.isOpen,n=e.onClose,r=e.unverifiedUsers,i=Object(s.b)();return 0===r.length&&n(),Object(a.useEffect)((function(){i(function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()({method:"GET",url:"".concat(C,"/users/unverified")}).then((function(e){var n=e.data;t(qt(n))})).catch((function(e){return t(S({message:e.response.data.error,variant:"error"}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(c.jsx)(M.a,{open:t,onClose:n,fullWidth:!0,children:Object(c.jsx)(R.a,{children:r.map((function(e){return Object(c.jsx)(Mt,{data:e},Object(ne.generate)())}))})})},Rt={language:"en",locale:{login:{password:"Password",logIn:"Log In",requestAccess:"Request access"},registerDialog:{dialogTitle:"Fill request",yourName:"Your Name",code:"Code",password:"Password",gender:"Gender",male:"Male",female:"Female",cancel:"Cancel",send:"Send",careers:{computerScience:"Computer Science",chemistryEngineering:"Chemistry Engineering",civilEngineering:"Civil Engineering",medicine:"Medicine"}},dashboard:{blob:"There are no elections yet"},createElectionDialog:{createElection:"Create election",title:"Title",position:"Position",selectCandidates:"Select Candidates Beforehand",cancel:"Cancel",create:"Create"},userSelector:{placeholder:"Select the candidates"},adminPanel:{verifyUsers:"Verify Users"},candidateCard:{cardTitle:"Candidate"},deleteElectionWarning:{dialogTitle:"Are you sure you want to delete this?",dialogContent:"This can't be undone",cancel:"Cancel",continue:"Continue"},electionDashboard:{blob:"You can vote now!",raiseAlertMessage:"You already voted!",electionEnded:"The election has ended",userVoted:"You already voted",voteNow:"Vote now!",endElection:"End Election"},electionSettings:{dialogTitle:"Election settings",title:"Title",position:"Position",cancel:"Cancel",accept:"Accept"}}},Yt=Object(E.c)({name:"locales",initialState:Rt,reducers:{setLocale:function(e,t){e.language=t.payload,"en"===e.language?e.locale={login:{password:"Password",logIn:"Log In",requestAccess:"Request access"},registerDialog:{dialogTitle:"Fill request",yourName:"Your Name",code:"Code",password:"Password",gender:"Gender",male:"Male",female:"Female",cancel:"Cancel",send:"Send",careers:{computerScience:"Computer Science",chemistryEngineering:"Chemistry Engineering",civilEngineering:"Civil Engineering",medicine:"Medicine"}},dashboard:{blob:"There are no elections yet"},createElectionDialog:{createElection:"Create election",title:"Title",position:"Position",selectCandidates:"Select Candidates Beforehand",cancel:"Cancel",create:"Create"},userSelector:{placeholder:"Select the candidates"},adminPanel:{verifyUsers:"Verify Users"},candidateCard:{cardTitle:"Candidate"},deleteElectionWarning:{dialogTitle:"Are you sure you want to delete this?",dialogContent:"This can't be undone",cancel:"Cancel",continue:"Continue"},electionDashboard:{blob:"You can vote now!",raiseAlertMessage:"You already voted!",electionEnded:"The election has ended",userVoted:"You already voted",voteNow:"Vote now!",endElection:"End Election"},electionSettings:{dialogTitle:"Election settings",title:"Title",position:"Position",cancel:"Cancel",accept:"Accept"}}:e.locale={login:{password:"Contrase\xf1a",logIn:"Ingresar",requestAccess:"Solicitar acceso"},registerDialog:{dialogTitle:"Llena la solicitud",yourName:"Tu nombre",code:"C\xf3digo",password:"Contrase\xf1a",gender:"G\xe9nero",male:"Hombre",female:"Mujer",cancel:"Cancelar",send:"Enviar",careers:{computerScience:"Ingenier\xeda de Sistemas",chemistryEngineering:"Ingenier\xeda Qu\xedmica",civilEngineering:"Ingenier\xeda Civil",medicine:"Medicina"}},dashboard:{blob:"No hay elecciones."},createElectionDialog:{createElection:"Crear elecci\xf3n",title:"Titulo",position:"Posici\xf3n",selectCandidates:"Seleccionar candidatos de antemano",cancel:"Cancelar",create:"Crear"},userSelector:{placeholder:"Selecciona los candidatos"},adminPanel:{verifyUsers:"Verificar usuarios"},candidateCard:{cardTitle:"Candidato"},deleteElectionWarning:{dialogTitle:"Est\xe1 seguro que quiere eliminar esta elecci\xf3n?",dialogContent:"Esto no puede deshacerse",cancel:"Cancelar",continue:"Continuar"},electionDashboard:{blob:"Puede votar ahora!",raiseAlertMessage:"Ya has votado!",electionEnded:"La elecci\xf3n ha terminado",userVoted:"Ya has votado!",voteNow:"Vota ahora!",endElection:"Terminar elecci\xf3n"},electionSettings:{dialogTitle:"Ajustes de elecci\xf3n",title:"T\xedtulo",position:"Posici\xf3n",cancel:"Cancelar",accept:"Aceptar"}}}}}),Ht=Yt.actions.setLocale,Gt=Yt.reducer,Jt=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.locales.language}));return Object(c.jsxs)(f.a,{style:{padding:10},children:[Object(c.jsx)(z.a,{children:"Language"}),Object(c.jsxs)(K.a,{onChange:function(t){e(Ht(t.target.value))},defaultValue:t,children:[Object(c.jsx)(Q.a,{value:"en",children:"English"}),Object(c.jsx)(Q.a,{value:"es",children:"Espa\xf1ol"})]})]})},zt=function(e){var t=e.handleAddUserClick,n=e.itemText;return Object(c.jsxs)(xt.a,{button:!0,onClick:t,children:[Object(c.jsx)(gt.a,{children:Object(c.jsx)(wt.a,{})}),Object(c.jsx)(vt.a,{primary:n})]})},Kt=function(){var e=Object(a.useState)(!1),t=Object(Le.a)(e,2),n=t[0],r=t[1],i=Object(s.b)(),o=Object(s.c)((function(e){return e.panel.open})),l=Object(s.c)((function(e){return e.locales.locale.adminPanel})),u=Object(s.c)((function(e){return e.auth.isAdmin})),d=Object(s.c)((function(e){return e.unverified.unverifiedUsers}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(yt.a,{open:o,anchor:"right",onClose:function(){return i(Pe())},children:Object(c.jsxs)(Ct.a,{children:[u&&Object(c.jsx)(zt,{handleAddUserClick:function(){0===d.length?i(S({message:"There are no users left to check",variant:"warning"})):r(!0)},itemText:l.verifyUsers}),Object(c.jsxs)(xt.a,{children:[Object(c.jsx)(gt.a,{children:Object(c.jsx)(St.a,{})}),Object(c.jsx)(Jt,{})]})]})}),Object(c.jsx)(Ft,{isOpen:n,onClose:function(){return r(!1)},unverifiedUsers:d})]})},Qt=n(409),Zt=n(422),Xt=n(410),$t=function(e){var t=e.data,n=e.onClick,a=Object(s.c)((function(e){return e.locales.locale.candidateCard}));return Object(c.jsxs)(Je.a,{style:{maxWidth:500,width:250},children:[Object(c.jsx)(Qt.a,{avatar:Object(c.jsx)(Zt.a,{children:t.name[0]}),title:a.candidateCard}),Object(c.jsxs)(Ke.a,{children:[Object(c.jsx)(se.a,{children:t.name}),Object(c.jsx)(se.a,{children:t.code}),Object(c.jsxs)(h.a,{container:!0,justify:"space-evenly",style:{marginTop:10},children:[Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(se.a,{children:t.career})}),Object(c.jsx)(h.a,{item:!0,children:Object(c.jsx)(se.a,{children:" "!==t.semester?"Semester: ".concat(t.semester):""})})]})]}),Object(c.jsx)(Xt.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(c.jsx)(ie.a,{onClick:function(){return n(t._id)},children:Object(c.jsx)(ue.a,{})})})]})},en=Object(d.a)((function(){return{votingPanel:{height:"100vh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}})),tn=function(){var e=Object(s.c)((function(e){return e.election.currentElection.candidates}))||[],t=Object(s.c)((function(e){return e.election.currentElection._id})),n=Object(s.c)((function(e){return e.auth._id})),r=en(),i=Object(l.g)(),o=Object(s.b)(),u=function(e){o(ge({electionId:t,userId:n,candidateId:e})),i.push("/election")};return Object(a.useEffect)((function(){0===e.length&&i.push("/")})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ie.a,{onClick:function(){i.push("/election")},children:Object(c.jsx)(Oe.a,{})}),Object(c.jsx)("div",{className:r.votingPanel,children:e.map((function(e){return Object(c.jsx)($t,{data:e,onClick:u},Object(ne.generate)())}))})]})},nn=Object(d.a)({app:{height:"100vh"}});var cn=function(){var e=nn();return Object(c.jsxs)("div",{className:e.app,children:[Object(c.jsx)(Kt,{}),Object(c.jsx)(mt,{}),Object(c.jsx)(u.a,{children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{path:"/login",children:Object(c.jsx)(te,{})}),Object(c.jsx)(it,{path:"/vote",children:Object(c.jsx)(tn,{})}),Object(c.jsx)(it,{path:"/election",children:Object(c.jsx)(ft,{})}),Object(c.jsx)(it,{path:"/",children:Object(c.jsx)(at,{})})]})})]})},an=n(42),rn=Object(E.c)({name:"users",initialState:{users:[]},reducers:{setUser:function(e,t){e.users=t.payload}},extraReducers:Object(pe.a)({},He.fulfilled,(function(e,t){e.users=t.payload}))}),sn=(rn.actions.setUser,rn.reducer),on=Object(an.c)({auth:U,dialog:L,election:Ae,alert:_,panel:Ve,unverified:Bt,users:sn,locales:Gt}),ln=Object(E.a)({reducer:on});Object(o.config)(),i.a.render(Object(c.jsx)(s.a,{store:ln,children:Object(c.jsx)(cn,{})}),document.getElementById("root"))}},[[337,1,2]]]);
//# sourceMappingURL=main.c06310f6.chunk.js.map