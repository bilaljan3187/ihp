import{W as m,j as e,Y as n,a as x}from"./app-JctyaatL.js";import{I as p}from"./InputError-CK0fWoXt.js";import{I as c}from"./InputLabel-CHxpz2Wd.js";import{T as h}from"./TextInput-xsOVZClB.js";import{A as u}from"./AuthenticatedLayout-DT3kVLma.js";import"./ApplicationLogo-UL5X0txR.js";import"./Dropdown-4RDQ7-1R.js";import"./transition-Bxw8h7tv.js";function k({auth:s,type:a}){const{data:r,setData:l,post:i,errors:d,reset:g,progress:y}=m({title:a.data.title,_method:"PUT"}),o=t=>{t.preventDefault(),i(route("usertype.update",a.data.id))};return e.jsxs(u,{user:s.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Update User Type"})}),children:[e.jsx(n,{title:"Programs"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsxs("form",{action:"",onSubmit:o,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(c,{htmlFor:"type_title",value:"User Type Title"}),e.jsx(h,{id:"type_title",type:"text",name:"title",value:r.title,className:"mt-1 block w-full",isFocused:!0,onChange:t=>l("title",t.target.value)}),e.jsx(p,{message:d.title,className:"mt-2"})]}),e.jsxs("div",{href:route("year.index"),className:"mt-4 text-right",children:[e.jsx(x,{className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Update User Type"})]})]})})})})})]})}export{k as default};
