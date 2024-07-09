import{W as w,r as h,j as e,Y as F,a as b}from"./app-CYNdlHj9.js";import{I as n}from"./InputError-C62KWxWL.js";import{I as c}from"./InputLabel-Dj_e_RE1.js";import{S as d}from"./SelectInput-DV1au4eB.js";import{T as C}from"./TextInput-7XRobYks.js";import{A as _}from"./AuthenticatedLayout-DzbaUVRv.js";import"./ApplicationLogo-CpZlfsLN.js";import"./transition-DrVfayog.js";function U({auth:x,districts:u,facilitytypes:p}){const{data:a,setData:l,post:g,errors:r,reset:T,progress:S}=w({title:"",facility_type:"",district_id:"",tehsil:"",unioncouncil:""}),[j,m]=h.useState([]),[y,o]=h.useState([]),v=async t=>{o([]),m([]);const s=t.target.value;if(l("district_id",s),s)try{const i=await axios.get(`/districts-tehsils/${s}`);m(i.data)}catch(i){console.error("There was an error fetching the tehsils!",i)}else m([])},f=async t=>{o([]);const s=t.target.value;if(l("tehsil",s),s)try{const i=await axios.get(`/tehsil-councils/${s}`);o(i.data)}catch(i){console.error("There was an error fetching the union councils!",i)}else o([])},N=t=>{t.preventDefault(),g(route("facility.store"))};return e.jsxs(_,{user:x.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Create New Facility"})}),children:[e.jsx(F,{title:"Create Facility"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsxs("form",{action:"",onSubmit:N,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg flex flex-wrap",children:[e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"facility_title",value:"Facility Title"}),e.jsx(C,{id:"facility_title",type:"text",name:"title",value:a.title,className:"mt-1 w-80",isFocused:!0,onChange:t=>l("title",t.target.value)}),e.jsx(n,{message:r.title,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"facilitytype",value:"Facility Type"}),e.jsxs(d,{id:"facilitytype",name:"facility_type",value:a.facility_type,className:"mt-1 w-80",onChange:t=>l("facility_type",t.target.value),children:[e.jsx("option",{children:"Select Facility Type"}),p.map(t=>e.jsx("option",{value:t.id,children:t.title},t.id))]}),e.jsx(n,{message:r.facility_type,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"district",value:"District"}),e.jsxs(d,{id:"district_id",type:"text",name:"district_id",value:a.district_id,className:"mt-1 w-80",onChange:v,children:[e.jsx("option",{children:"Select District"}),u.map(t=>e.jsx("option",{value:t.id,children:t.title},t.key))]}),e.jsx(n,{message:r.district,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"tehsil",value:"Tehsil "}),e.jsxs(d,{id:"tehsil",name:"tehsil",value:a.tehsil,className:"mt-1 w-80",onChange:f,children:[e.jsx("option",{children:"Select District First"}),j.map(t=>e.jsx("option",{value:t.id,children:t.title}))]}),e.jsx(n,{message:r.tehsil,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"unioncouncil",value:"Union Council"}),e.jsxs(d,{id:"unioncouncil",name:"unioncouncil",value:a.unioncouncil,className:"mt-1 w-80",onChange:t=>{l("unioncouncil",t.target.value)},children:[e.jsx("option",{children:"Select Tehsil First"}),y.map(t=>e.jsx("option",{value:t.id,children:t.title}))]}),e.jsx(n,{message:r.unioncouncil,className:"mt-2"})]}),e.jsxs("div",{href:route("facility.index"),className:"mt-9 text-right",children:[e.jsx(b,{href:route("facility.index"),className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Add Facility"})]})]})})})})})]})}export{U as default};