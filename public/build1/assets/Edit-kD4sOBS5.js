import{W as f,r as N,j as e,Y as b,a as y}from"./app-DssH1EGq.js";import{I as o}from"./InputError-DojYFSgl.js";import{I as c}from"./InputLabel-Bo1FWj_s.js";import{S as m}from"./SelectInput-lIWdKMhc.js";import{T as w}from"./TextInput-CjuStT7k.js";import{A as _}from"./AuthenticatedLayout-DMjK5FD7.js";import"./ApplicationLogo-BB-fn7Rd.js";import"./transition-w1TJRnbJ.js";function L({auth:h,unioncouncil:s,districts:x,tehsils:u}){const{data:i,setData:a,post:p,errors:l,reset:C,progress:T}=f({title:s.title,district_id:s.district_id,tehsil_id:s.tehsil_id,_method:"PUT"}),[g,r]=N.useState(u),j=async t=>{r([]);const d=t.target.value;if(a("district_id",d),d)try{const n=await axios.get(`/districts-tehsils/${d}`);r(n.data)}catch(n){console.error("There was an error fetching the tehsils!",n)}else r([])},v=t=>{t.preventDefault(),p(route("unioncouncil.update",s.id))};return e.jsxs(_,{user:h.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Update Union Council"})}),children:[e.jsx(b,{title:"Union Council"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsxs("form",{action:"",onSubmit:v,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(c,{htmlFor:"unioncouncil_title",value:"Unioncouncil Title"}),e.jsx(w,{id:"unioncouncil_title",type:"text",name:"title",value:i.title,className:"mt-1 block w-full",isFocused:!0,onChange:t=>a("title",t.target.value)}),e.jsx(o,{message:l.title,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(c,{htmlFor:"district",value:"District"}),e.jsxs(m,{id:"district",name:"district_id",value:i.district_id,className:"mt-1 block w-full",onChange:j,children:[e.jsx("option",{children:"Select District"}),x.map(t=>e.jsx("option",{value:t.id,children:t.title},t.id))]}),e.jsx(o,{message:l.district_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(c,{htmlFor:"tehsil",value:"Tehsil"}),e.jsxs(m,{id:"tehsil",name:"tehsil_id",value:i.tehsil_id,className:"mt-1 block w-full",onChange:t=>a("tehsil_id",t.target.value),children:[e.jsx("option",{children:"Select Tehsil"}),g.map(t=>e.jsx("option",{value:t.id,children:t.title},t.id))]}),e.jsx(o,{message:l.tehsil_id,className:"mt-2"})]}),e.jsxs("div",{href:route("unioncouncil.index"),className:"mt-4 text-right",children:[e.jsx(y,{className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Update Unioncouncil"})]})]})})})})})]})}export{L as default};
