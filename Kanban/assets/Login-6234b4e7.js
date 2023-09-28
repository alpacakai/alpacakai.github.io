import{r as _,u as y,a,o as f,c as g,w as l,b as o,d as v,e as h,f as k,t as K,s as p,n as C,g as P}from"./index-7f89984d.js";const b={__name:"LoginCard",props:{isLogin:{type:Boolean}},setup(r){const c=r,i=_(!1),e=_({email:"",password:"",confirmPassword:"",remember:!1}),m=y(),t=async()=>{i.value=!0,c.isLogin?await p().user.checkLogin(e.value)&&(console.log("login: "+e.value),m.push({name:"Kanban"})):await p().user.userRegister(e.value)&&await p().user.checkLogin(e.value)&&m.push({name:"Kanban"}),C(()=>i.value=!1)};return(w,n)=>{const d=a("el-input"),s=a("el-form-item"),L=a("el-button"),V=a("el-form"),x=a("el-card");return f(),g(x,null,{default:l(()=>[o(V,{model:e.value,"label-position":"top"},{default:l(()=>[o(s,{label:"Account(Email)"},{default:l(()=>[o(d,{modelValue:e.value.email,"onUpdate:modelValue":n[0]||(n[0]=u=>e.value.email=u)},null,8,["modelValue"])]),_:1}),o(s,{label:"Password"},{default:l(()=>[o(d,{modelValue:e.value.password,"onUpdate:modelValue":n[1]||(n[1]=u=>e.value.password=u),type:"password","show-password":"",onKeyup:n[2]||(n[2]=v(u=>r.isLogin?t():null,["enter"]))},null,8,["modelValue"])]),_:1}),r.isLogin?h("",!0):(f(),g(s,{key:0,label:"Confirm Password"},{default:l(()=>[o(d,{modelValue:e.value.confirmPassword,"onUpdate:modelValue":n[3]||(n[3]=u=>e.value.confirmPassword=u),type:"password","show-password":"",onKeyup:v(t,["enter"])},null,8,["modelValue","onKeyup"])]),_:1})),o(s,{style:{"margin-top":"2rem"}},{default:l(()=>[o(L,{type:"primary",onClick:t,style:{width:"100%"},loading:i.value},{default:l(()=>[k(K(r.isLogin?"Login":"Register"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1})}}},R={__name:"Login",setup(r){const c=_("login"),i=y();return P(()=>{p().user.isLogined().then(e=>{e&&(p().reset(),i.push({name:"Kanban"}))})}),(e,m)=>{const t=a("el-tab-pane"),w=a("el-tabs"),n=a("el-col"),d=a("el-row");return f(),g(d,{justify:"center",style:{"align-content":"center",height:"100%"}},{default:l(()=>[o(n,{xs:18,sm:12,md:8,lg:6,xl:4},{default:l(()=>[o(w,{modelValue:c.value,"onUpdate:modelValue":m[0]||(m[0]=s=>c.value=s),stretch:""},{default:l(()=>[o(t,{label:"Login",name:"login"},{default:l(()=>[o(b,{isLogin:!0})]),_:1}),o(t,{label:"Register",name:"register"},{default:l(()=>[o(b,{isLogin:!1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}};export{R as default};
