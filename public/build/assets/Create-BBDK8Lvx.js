import{W as c,j as e,Y as x,a as g}from"./app-JctyaatL.js";import{I as i}from"./InputError-CK0fWoXt.js";import{I as l}from"./InputLabel-CHxpz2Wd.js";import"./SelectInput-C0j6sM9X.js";import{T as n}from"./TextInput-xsOVZClB.js";import{A as h}from"./AuthenticatedLayout-DT3kVLma.js";import"./ApplicationLogo-UL5X0txR.js";import"./Dropdown-4RDQ7-1R.js";import"./transition-Bxw8h7tv.js";function D({auth:o}){const{data:s,setData:a,post:d,errors:r,reset:u,progress:p}=c({title:"",scale:""}),m=t=>{t.preventDefault(),d(route("designation.store"))};return e.jsxs(h,{user:o.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Create New Designation"})}),children:[e.jsx(x,{title:"Programs"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsxs("form",{action:"",onSubmit:m,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"designation_title",value:"Designation Title"}),e.jsx(n,{id:"designation_title",type:"text",name:"title",value:s.title,className:"mt-1 block w-full",isFocused:!0,onChange:t=>a("title",t.target.value)}),e.jsx(i,{message:r.title,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"scale",value:"Scale"}),e.jsx(n,{id:"scale",type:"text",name:"title",value:s.scale,className:"mt-1 block w-full",isFocused:!0,onChange:t=>a("scale",t.target.value)}),e.jsx(i,{message:r.scale,className:"mt-2"})]}),e.jsxs("div",{href:route("designation.index"),className:"mt-4 text-right",children:[e.jsx(g,{href:route("designation.index"),className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Add Designation"})]})]})})})})})]})}export{D as default};
