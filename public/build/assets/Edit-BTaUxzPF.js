import{W as b,r as x,j as e,Y as T,a as C}from"./app-DITk7tyb.js";import{I as c}from"./InputError-CaebTp8f.js";import{I as o}from"./InputLabel-Bv-9TaNT.js";import{S as m}from"./SelectInput-B0h5w0zt.js";import{T as S}from"./TextInput-DrAfwsFR.js";import{A as I}from"./AuthenticatedLayout-DTpCNKd_.js";import"./ApplicationLogo-DuSb-NH3.js";import"./transition-C5pPCPjq.js";function Y({auth:u,facility:a,facilitytypes:p,districts:g,tehsils:j,unioncouncils:y}){const{data:l,setData:r,post:v,errors:n,reset:D,progress:E}=b({title:a.title,district_id:a.district_id,facility_type:a.facility_type,tehsil:a.tehsil,union_council:a.union_council,_method:"PUT"}),[f,h]=x.useState(j),[N,d]=x.useState(y),_=async t=>{d([]),h([]);const s=t.target.value;if(r("district_id",s),s)try{const i=await axios.get(`/districts-tehsils/${s}`);h(i.data)}catch(i){console.error("There was an error fetching the tehsils!",i)}else h([])},w=async t=>{d([]);const s=t.target.value;if(r("tehsil",s),s)try{const i=await axios.get(`/tehsil-councils/${s}`);d(i.data)}catch(i){console.error("There was an error fetching the union councils!",i)}else d([])},F=t=>{t.preventDefault(),v(route("facility.update",a.id))};return e.jsxs(I,{user:u.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Edit Facility"})}),children:[e.jsx(T,{title:"Edit Facility"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsxs("form",{action:"",onSubmit:F,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg flex flex-wrap",children:[e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(o,{htmlFor:"facility_title",value:"Facility Title"}),e.jsx(S,{id:"facility_title",type:"text",name:"title",value:l.title,className:"mt-1 w-80",isFocused:!0,onChange:t=>r("title",t.target.value)}),e.jsx(c,{message:n.title,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(o,{htmlFor:"facilitytype",value:"Facility Type"}),e.jsxs(m,{id:"facilitytype",name:"facility_type",value:l.facility_type,className:"mt-1 w-80",onChange:t=>r("facility_type",t.target.value),children:[e.jsx("option",{children:"Select Facility Type"}),p.map(t=>e.jsx("option",{value:t.id,children:t.title},t.id))]}),e.jsx(c,{message:n.facility_type,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(o,{htmlFor:"district",value:"District"}),e.jsxs(m,{id:"district_id",type:"text",name:"district_id",value:l.district_id,className:"mt-1 w-80",onChange:_,children:[e.jsx("option",{children:"Select District"}),g.map(t=>e.jsx("option",{value:t.id,children:t.title},t.key))]}),e.jsx(c,{message:n.district,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(o,{htmlFor:"tehsil",value:"Tehsil "}),e.jsxs(m,{id:"tehsil",name:"tehsil",value:l.tehsil,className:"mt-1 w-80",onChange:w,children:[e.jsx("option",{children:"Select District First"}),f.map(t=>e.jsx("option",{value:t.id,children:t.title}))]}),e.jsx(c,{message:n.tehsil,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(o,{htmlFor:"unioncouncil",value:"Union Council"}),e.jsxs(m,{id:"unioncouncil",name:"union_council",value:l.union_council,className:"mt-1 w-80",onChange:t=>{r("union_council",t.target.value)},children:[e.jsx("option",{children:"Select Tehsil First"}),N.map((t,s)=>e.jsx("option",{value:t.id,children:t.title},s))]}),e.jsx(c,{message:n.union_council,className:"mt-2"})]}),e.jsxs("div",{href:route("facility.index"),className:"mt-9 text-right",children:[e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Update Facility"}),e.jsx(C,{href:route("facility.index"),className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"})]})]})})})})})]})}export{Y as default};
