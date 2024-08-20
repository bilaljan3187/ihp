import{W as m,j as e,Y as d,a as n}from"./app-JctyaatL.js";import{I as x}from"./InputError-CK0fWoXt.js";import{I as g}from"./InputLabel-CHxpz2Wd.js";import"./SelectInput-C0j6sM9X.js";import{T as c}from"./TextInput-xsOVZClB.js";import{A as p}from"./AuthenticatedLayout-DT3kVLma.js";import"./ApplicationLogo-UL5X0txR.js";import"./Dropdown-4RDQ7-1R.js";import"./transition-Bxw8h7tv.js";function C({auth:r}){const{data:a,setData:s,post:o,errors:i,reset:h,progress:u}=m({title:""}),l=t=>{t.preventDefault(),o(route("program.store"))};return e.jsxs(p,{user:r.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Create New Program"})}),children:[e.jsx(d,{title:"Programs"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsxs("form",{action:"",onSubmit:l,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(g,{htmlFor:"program_title",value:"Program Title"}),e.jsx(c,{id:"program_title",type:"text",name:"title",value:a.title,className:"mt-1 block w-full",isFocused:!0,onChange:t=>s("title",t.target.value)}),e.jsx(x,{message:i.title,className:"mt-2"})]}),e.jsxs("div",{href:route("program.index"),className:"mt-4 text-right",children:[e.jsx(n,{href:route("program.index"),className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Add Program"})]})]})})})})})]})}export{C as default};