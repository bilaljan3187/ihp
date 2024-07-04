import{W as x,j as e,Y as g,a as h}from"./app-C29KYL2e.js";import{I as i}from"./InputError-BH8t4fU8.js";import{I as n}from"./InputLabel-BvMpiiex.js";import{T as d}from"./TextInput-DY-iC6yZ.js";import{A as u}from"./AuthenticatedLayout-4EaVsIev.js";import"./ApplicationLogo-BopYhmHI.js";import"./transition-I43RbZRO.js";function D({auth:o,designation:s}){const{data:a,setData:l,post:m,errors:r,reset:p,progress:j}=x({title:s.title,scale:s.scale,_method:"PUT"}),c=t=>{t.preventDefault(),m(route("designation.update",s.id))};return e.jsxs(u,{user:o.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Update Designation"})}),children:[e.jsx(g,{title:"Designation"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsxs("form",{action:"",onSubmit:c,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"designation_title",value:"Designation Title"}),e.jsx(d,{id:"designation_title",type:"text",name:"title",value:a.title,className:"mt-1 block w-full",isFocused:!0,onChange:t=>l("title",t.target.value)}),e.jsx(i,{message:r.title,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"scale",value:"Scale"}),e.jsx(d,{id:"scale",type:"text",name:"scale",value:a.scale,className:"mt-1 block w-full",isFocused:!0,onChange:t=>l("scale",t.target.value)}),e.jsx(i,{message:r.scale,className:"mt-2"})]}),e.jsxs("div",{href:route("designation.index"),className:"mt-4 text-right",children:[e.jsx(h,{className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Update Designation"})]})]})})})})})]})}export{D as default};
