import{W as m,j as e,Y as n,a as x}from"./app-BlDVYVCC.js";import{I as c}from"./InputError-BEO7Sfi5.js";import{I as g}from"./InputLabel-vHC7JEMN.js";import{T as p}from"./TextInput-DRNFW1Fv.js";import{A as h}from"./AuthenticatedLayout-BERKjkKs.js";import"./ApplicationLogo-B7e3WKVF.js";import"./transition-CHVxiHoR.js";function I({auth:r,program:a}){const{data:s,setData:l,post:i,errors:o,reset:u,progress:j}=m({title:a.data.title,_method:"PUT"}),d=t=>{t.preventDefault(),i(route("program.update",a.data.id))};return e.jsxs(h,{user:r.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Update Program"})}),children:[e.jsx(n,{title:"Programs"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsxs("form",{action:"",onSubmit:d,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(g,{htmlFor:"program_title",value:"Program Title"}),e.jsx(p,{id:"program_title",type:"text",name:"title",value:s.title,className:"mt-1 block w-full",isFocused:!0,onChange:t=>l("title",t.target.value)}),e.jsx(c,{message:o.title,className:"mt-2"})]}),e.jsxs("div",{href:route("program.index"),className:"mt-4 text-right",children:[e.jsx(x,{className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Update Program"})]})]})})})})})]})}export{I as default};
