"use strict";(self.webpackChunkecs_solutions=self.webpackChunkecs_solutions||[]).push([[677],{30677:(x,D,s)=>{s.d(D,{ProtectedSSO:()=>V});var t=s(92132),g=s(42455),R=s(38413),L=s(55356),h=s(85963),m=s(4198),A=s(83997),v=s(30893),M=s(90151),E=s(68074),C=s(7441),c=s(43739),I=s(95336),O=s(56654),a=s(55506),W=s(54514),B=s(2506),j=s(54894),d=s(12083),r=s(88977),y=s(62965),q=s(15126),ss=s(63299),ts=s(67014),os=s(59080),as=s(79275),_s=s(14718),ns=s(21272),ls=s(82437),es=s(5790),Es=s(35223),is=s(5409),ds=s(74930),rs=s(2600),Ms=s(48940),Os=s(41286),Ps=s(56336),Ds=s(13426),gs=s(84624),Rs=s(77965),Ls=s(54257),hs=s(71210),ms=s(51187),As=s(39404),vs=s(58692),Cs=s(501),cs=s(57646),Is=s(23120),Ws=s(44414),Bs=s(25962),Ts=s(14664),Us=s(42588),Ks=s(90325),fs=s(62785),us=s(87443),xs=s(41032),js=s(22957),ys=s(93179),Ss=s(73055),ps=s(15747),Vs=s(85306),Fs=s(26509),zs=s(32058),Ns=s(81185),Zs=s(82261);const S=d.Ik().shape({autoRegister:d.lc().required(a.iW.required),defaultRole:d.gl().when("autoRegister",(o,_)=>o?_.required(a.iW.required):_.nullable()),ssoLockedRoles:d.YO().nullable().of(d.gl().when("ssoLockedRoles",(o,_)=>o?_.required(a.iW.required):_.nullable()))}),p=()=>{(0,a.L4)();const{formatMessage:o}=(0,j.A)(),_=(0,r.j)(e=>e.admin_app.permissions),{lockApp:F,unlockApp:z}=(0,a.MA)(),T=(0,a.hN)(),{_unstableFormatAPIError:N,_unstableFormatValidationErrors:Z}=(0,a.wq)(),{isLoading:Q,data:X}=(0,r.W)(),[Y,{isLoading:$}]=(0,r.X)(),{isLoading:G,allowedActions:{canUpdate:U,canReadRoles:H}}=(0,a.ec)({..._.settings?.sso,readRoles:_.settings?.roles.read??[]}),{roles:f,isLoading:J}=(0,y.u)(void 0,{skip:!H}),k=async(e,P)=>{F();try{const n=await Y(e);if("error"in n){(0,r.x)(n.error)&&n.error.name==="ValidationError"?P.setErrors(Z(n.error)):T({type:"warning",message:N(n.error)});return}T({type:"success",message:{id:"notification.success.saved"}})}catch{T({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred, please try again."}})}finally{z()}},u=J||G||Q;return(0,t.jsxs)(g.P,{children:[(0,t.jsx)(a.x7,{name:"SSO"}),(0,t.jsx)(R.g,{"aria-busy":$||u,tabIndex:-1,children:(0,t.jsx)(B.l1,{onSubmit:k,initialValues:X||{autoRegister:!1,defaultRole:null,ssoLockedRoles:null},validationSchema:S,validateOnChange:!1,enableReinitialize:!0,children:({handleChange:e,isSubmitting:P,values:n,setFieldValue:b,dirty:w,errors:i})=>(0,t.jsxs)(a.lV,{children:[(0,t.jsx)(L.Q,{primaryAction:(0,t.jsx)(h.$,{disabled:!w,loading:P,startIcon:(0,t.jsx)(W.A,{}),type:"submit",size:"L",children:o({id:"global.save",defaultMessage:"Save"})}),title:o({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:o({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),(0,t.jsx)(m.s,{children:P||u?(0,t.jsx)(a.Bl,{}):(0,t.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:[(0,t.jsx)(v.o,{variant:"delta",as:"h2",children:o({id:"global.settings",defaultMessage:"Settings"})}),(0,t.jsxs)(M.x,{gap:4,children:[(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(C.l,{disabled:!U,checked:n.autoRegister,hint:o({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:o({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:o({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:o({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:e})}),(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(c.l,{disabled:!U,hint:o({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:i.defaultRole?o({id:i.defaultRole,defaultMessage:i.defaultRole}):"",label:o({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:l=>e({target:{name:"defaultRole",value:l}}),placeholder:o({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:n.defaultRole,children:f.map(({id:l,name:K})=>(0,t.jsx)(I.c,{value:l.toString(),children:K},l))})}),(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(O.KF,{disabled:!U,hint:o({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:i.ssoLockedRoles?o({id:i.ssoLockedRoles,defaultMessage:i.ssoLockedRoles}):"",label:o({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:l=>e({target:{value:l,name:"ssoLockedRoles"}}),placeholder:o({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>b("ssoLockedRoles",[]),value:n.ssoLockedRoles||[],withTags:!0,children:f.map(({id:l,name:K})=>(0,t.jsx)(O.fe,{value:l.toString(),children:K},l))})})]})]})})]})})})]})},V=()=>{const o=(0,r.j)(_=>_.admin_app.permissions.settings?.sso?.main);return(0,t.jsx)(a.kz,{permissions:o,children:(0,t.jsx)(p,{})})}},62965:(x,D,s)=>{s.d(D,{u:()=>h});var t=s(21272),g=s(55506),R=s(54894),L=s(88977);const h=(m={},A)=>{const{locale:v}=(0,R.A)(),M=(0,g.QM)(v,{sensitivity:"base"}),{data:E,error:C,isError:c,isLoading:I,refetch:O}=(0,L.z)(m,A);return{roles:t.useMemo(()=>[...E??[]].sort((W,B)=>M.compare(W.name,B.name)),[E,M]),error:C,isError:c,isLoading:I,refetch:O}}}}]);