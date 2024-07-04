import{j as e,a as o,Y as m,y as l}from"./app-C29KYL2e.js";import{T as x,P as g}from"./TableHeading-Dzm2b0o5.js";import"./SelectInput-CWPV1TrY.js";import{T as j}from"./TextInput-DY-iC6yZ.js";import{A as f}from"./AuthenticatedLayout-4EaVsIev.js";import"./ApplicationLogo-BopYhmHI.js";import"./transition-I43RbZRO.js";function v({auth:n,programs:d,queryParams:s=null,success:a}){s=s||{};const i=(t,r)=>{r?s[t]=r:delete s[t],l.get(route("program.index"),s)},p=(t,r)=>{r.key==="Enter"&&i(t,r.target.value)},c=t=>{t==s.sort_field?s.sort_direction=="asc"?s.sort_direction="desc":s.sort_direction="asc":(s.sort_field=t,s.sort_direction="asc"),l.get(route("program.index"),s)},h=t=>{window.confirm("Are You sure to Delete")&&l.delete(route("program.destroy",t.id))};return e.jsxs(f,{user:n.user,header:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Program"}),e.jsx(o,{href:route("program.create"),className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Add New"})]}),children:[e.jsx(m,{title:"Projects"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"mx-auto sm:px-6 lg:px-8",children:[a&&e.jsx("div",{className:"bg-emerald-500 py-2 px-4 text-white rounded mb-4",children:a}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:"Programs"}),e.jsxs("table",{className:"w-full text-sm teext-left rtl:text-right text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500",children:e.jsxs("tr",{className:"text-nowrap",children:[e.jsx(x,{sort_field:s.sort_field,sort_direction:s.sort_direction,name:"id",sortChanged:c,children:"ID"}),e.jsx(x,{sort_field:s.sort_field,sort_direction:s.sort_direction,name:"title",sortChanged:c,children:"Title"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left",children:"Created By"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left",children:"Updated By"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left",children:"Created at"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left",children:"Actions"})]})}),e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500",children:e.jsxs("tr",{className:"text-nowrap",children:[e.jsx("th",{scope:"col",className:"px-3 py-3"}),e.jsx("th",{scope:"col",className:"px-3 py-3",children:e.jsx(j,{className:"w-full",placeholder:"Program",defaultValue:s.title,onBlur:t=>i("title",t.target.value),onKeyPress:t=>p("title",t)})}),e.jsx("th",{scope:"col",className:"px-3 py-3"}),e.jsx("th",{scope:"col",className:"px-3 py-3"}),e.jsx("th",{scope:"col",className:"px-3 py-3"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-right"})]})}),e.jsx("tbody",{children:d.data.map(t=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 ",children:[e.jsx("td",{className:"px-3 py-2",children:t.id}),e.jsx("th",{className:"px-3 py-2 hover:underline  text-nowrap text-left",children:t.title}),e.jsx("td",{className:"px-3 py-2",children:t.createdBy.name}),e.jsx("td",{className:"px-3 py-2",children:t.updatedBy.name}),e.jsx("td",{className:"px-3 py-2",children:t.created_at}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx(o,{href:route("program.edit",t.id),className:"font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1",children:"Edit"}),e.jsx("button",{onClick:r=>h(t),className:"font-medium text-red-600 dark:text-red-500 hover:underline mx-1",children:"Delete"})]})]},t.id))})]}),e.jsx(g,{links:d.meta.links})]})]})})]})}export{v as default};
