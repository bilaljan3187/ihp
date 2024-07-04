import{W as o,j as t,Y as m,a as n}from"./app-C29KYL2e.js";import{I as c}from"./InputError-BH8t4fU8.js";import{I as x}from"./InputLabel-BvMpiiex.js";import"./SelectInput-CWPV1TrY.js";import{T as h}from"./TextInput-DY-iC6yZ.js";import{A as g}from"./AuthenticatedLayout-4EaVsIev.js";import"./ApplicationLogo-BopYhmHI.js";import"./transition-I43RbZRO.js";function D({auth:s}){const{data:r,setData:a,post:i,errors:l,reset:u,progress:p}=o({title:""}),d=e=>{e.preventDefault(),i(route("district.store"))};return t.jsxs(g,{user:s.user,header:t.jsx("div",{className:"flex justify-between items-center",children:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Create New District"})}),children:[t.jsx(m,{title:"Programs"}),t.jsx("div",{className:"py-12",children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:t.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:t.jsxs("form",{action:"",onSubmit:d,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[t.jsxs("div",{className:"mt-4",children:[t.jsx(x,{htmlFor:"district_title",value:"District Title"}),t.jsx(h,{id:"district_title",type:"text",name:"title",value:r.title,className:"mt-1 block w-full",isFocused:!0,onChange:e=>a("title",e.target.value)}),t.jsx(c,{message:l.title,className:"mt-2"})]}),t.jsxs("div",{href:route("district.index"),className:"mt-4 text-right",children:[t.jsx(n,{href:route("district.index"),className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),t.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Add District"})]})]})})})})})]})}export{D as default};
