import{W as c,r as x,j as e,Y as j}from"./app-C29KYL2e.js";import{G as f}from"./GuestLayout-CmmlmdTC.js";import{I as m}from"./InputError-BH8t4fU8.js";import{I as o}from"./InputLabel-BvMpiiex.js";import{P as w}from"./PrimaryButton-DY_WGR5p.js";import{T as l}from"./TextInput-DY-iC6yZ.js";import{S as v}from"./SelectInput-CWPV1TrY.js";import"./ApplicationLogo-BopYhmHI.js";function I({types:i}){const{data:a,setData:r,post:n,processing:u,errors:t,reset:d}=c({name:"",email:"",password:"",user_type:"",password_confirmation:""});x.useEffect(()=>()=>{d("password","password_confirmation")},[]);const p=s=>{s.preventDefault(),n(route("register"))};return e.jsxs(f,{children:[e.jsx(j,{title:"Register"}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{children:[e.jsx(o,{htmlFor:"name",value:"Name"}),e.jsx(l,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(m,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"email",value:"Email"}),e.jsx(l,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(m,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"user_type",value:"User Type"}),e.jsxs(v,{id:"user_type",name:"user_type",value:a.user_type,className:"mt-1 block w-full",onChange:s=>r("user_type",s.target.value),children:[e.jsx("option",{children:"User Type"}),i.map(s=>e.jsx("option",{value:s.id,children:s.title}))]}),e.jsx(m,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"password",value:"Password"}),e.jsx(l,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(m,{message:t.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(l,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(m,{message:t.password_confirmation,className:"mt-2"})]}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(w,{className:"ms-4",disabled:u,children:"Add User"})})]})]})}export{I as default};
