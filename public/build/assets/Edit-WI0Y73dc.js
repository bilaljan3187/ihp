import{W as x,j as e,Y as h,a as p}from"./app-JctyaatL.js";import{I as l}from"./InputError-CK0fWoXt.js";import{I as d}from"./InputLabel-CHxpz2Wd.js";import{S as u}from"./SelectInput-C0j6sM9X.js";import{T as g}from"./TextInput-xsOVZClB.js";import{A as j}from"./AuthenticatedLayout-DT3kVLma.js";import"./ApplicationLogo-UL5X0txR.js";import"./Dropdown-4RDQ7-1R.js";import"./transition-Bxw8h7tv.js";function D({auth:m,tehsil:s,districts:o}){const{data:i,setData:a,post:n,errors:r,reset:v,progress:f}=x({title:s.title,district_id:s.district_id,_method:"PUT"}),c=t=>{t.preventDefault(),n(route("tehsil.update",s.id))};return e.jsxs(j,{user:m.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Update Tehsil"})}),children:[e.jsx(h,{title:"Tehsil"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsxs("form",{action:"",onSubmit:c,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(d,{htmlFor:"tehsil_title",value:"Tehsil Title"}),e.jsx(g,{id:"tehsil_title",type:"text",name:"title",value:i.title,className:"mt-1 block w-full",isFocused:!0,onChange:t=>a("title",t.target.value)}),e.jsx(l,{message:r.title,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(d,{htmlFor:"district",value:"District"}),e.jsxs(u,{id:"district",name:"district_id",value:i.district_id,className:"mt-1 block w-full",onChange:t=>a("district_id",t.target.value),children:[e.jsx("option",{children:"Select District"}),o.map(t=>e.jsx("option",{value:t.id,children:t.title},t.id))]}),e.jsx(l,{message:r.district_id,className:"mt-2"})]}),e.jsxs("div",{href:route("tehsil.index"),className:"mt-4 text-right",children:[e.jsx(p,{className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Update Tehsil"})]})]})})})})})]})}export{D as default};
