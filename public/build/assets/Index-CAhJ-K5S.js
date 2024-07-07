import{R as d,j as e,a as f,Y as O,y as u}from"./app-DITk7tyb.js";import{T as g,P as _}from"./TableHeading-gYFKoZxS.js";import"./SelectInput-B0h5w0zt.js";import{T as j}from"./TextInput-DrAfwsFR.js";import{A as E}from"./AuthenticatedLayout-DTpCNKd_.js";import"./ApplicationLogo-DuSb-NH3.js";import"./transition-C5pPCPjq.js";var N={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=d.createContext&&d.createContext(N),k=["attr","size","title"];function C(r,s){if(r==null)return{};var t=P(r,s),l,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)l=o[n],!(s.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(r,l)&&(t[l]=r[l])}return t}function P(r,s){if(r==null)return{};var t={};for(var l in r)if(Object.prototype.hasOwnProperty.call(r,l)){if(s.indexOf(l)>=0)continue;t[l]=r[l]}return t}function h(){return h=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(r[l]=t[l])}return r},h.apply(this,arguments)}function y(r,s){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);s&&(l=l.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),t.push.apply(t,l)}return t}function m(r){for(var s=1;s<arguments.length;s++){var t=arguments[s]!=null?arguments[s]:{};s%2?y(Object(t),!0).forEach(function(l){A(r,l,t[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(t,l))})}return r}function A(r,s,t){return s=D(s),s in r?Object.defineProperty(r,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[s]=t,r}function D(r){var s=S(r,"string");return typeof s=="symbol"?s:s+""}function S(r,s){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var l=t.call(r,s||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(r)}function v(r){return r&&r.map((s,t)=>d.createElement(s.tag,m({key:t},s.attr),v(s.child)))}function I(r){return s=>d.createElement(z,h({attr:m({},r.attr)},s),v(r.child))}function z(r){var s=t=>{var{attr:l,size:n,title:o}=r,x=C(r,k),p=n||t.size||"1em",i;return t.className&&(i=t.className),r.className&&(i=(i?i+" ":"")+r.className),d.createElement("svg",h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,x,{className:i,style:m(m({color:r.color||t.color},t.style),r.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),o&&d.createElement("title",null,o),r.children)};return b!==void 0?d.createElement(b.Consumer,null,t=>s(t)):s(N)}function T(r){return I({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 0 1-.82-1.256A8 8 0 0 1 18 9a22.47 22.47 0 0 1-1.228 7.351.75.75 0 1 1-1.417-.49A20.97 20.97 0 0 0 16.5 9 6.5 6.5 0 0 0 10 2.5ZM4.333 4.416a.75.75 0 0 1 .218 1.038A6.466 6.466 0 0 0 3.5 9a7.966 7.966 0 0 1-1.293 4.362.75.75 0 0 1-1.257-.819A6.466 6.466 0 0 0 2 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 0 1 1.038-.219ZM10 6.12a3 3 0 0 0-3.001 3.041 11.455 11.455 0 0 1-2.697 7.24.75.75 0 0 1-1.148-.965A9.957 9.957 0 0 0 5.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 0 1 8.996.084V9.15l-.005.297a.75.75 0 1 1-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 0 0-3-2.965Zm0 2.13a.75.75 0 0 1 .75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 1 1-1.186-.918A13.687 13.687 0 0 0 9.25 9a.75.75 0 0 1 .75-.75Zm3.529 3.698a.75.75 0 0 1 .584.885 18.883 18.883 0 0 1-2.257 5.84.75.75 0 1 1-1.29-.764 17.386 17.386 0 0 0 2.078-5.377.75.75 0 0 1 .885-.584Z",clipRule:"evenodd"},child:[]}]})(r)}function F({auth:r,employees:s,queryParams:t=null,success:l,currentPage:n,pageSize:o}){t=t||{};const x=(a,c)=>{c?t[a]=c:delete t[a],u.get(route("employee.index"),t)},p=(a,c)=>{c.key==="Enter"&&x(a,c.target.value)},i=a=>{a==t.sort_field?t.sort_direction=="asc"?t.sort_direction="desc":t.sort_direction="asc":(t.sort_field=a,t.sort_direction="asc"),u.get(route("employee.index"),t)},w=a=>{window.confirm("Are You sure to Delete")&&u.delete(route("employee.destroy",a.id))};return e.jsxs(E,{user:r.user,header:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Employees"}),e.jsx(f,{href:route("employee.create"),className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Add New"})]}),children:[e.jsx(O,{title:"Employees"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"mx-auto sm:px-6 lg:px-8",children:[l&&e.jsx("div",{className:"bg-emerald-500 py-2 px-4 text-white rounded mb-4",children:l}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:"Employees"}),e.jsxs("table",{className:"w-full text-sm teext-left rtl:text-right text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500",children:e.jsxs("tr",{className:"text-nowrap",children:[e.jsx("th",{scope:"col",className:"px-3 py-3 text-left",children:"S.No"}),e.jsx(g,{sort_field:t.sort_field,sort_direction:t.sort_direction,name:"name",sortChanged:i,children:"Name"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left",children:"father Name"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left",children:"husband Name"}),e.jsx(g,{sort_field:t.sort_field,sort_direction:t.sort_direction,name:"cnic",sortChanged:i,children:"Cnic"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left",children:"Program"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left",children:"District"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left",children:"Designation"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left",children:"Status"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left",children:"Verified"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-left",children:"Actions"})]})}),e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500",children:e.jsxs("tr",{className:"text-nowrap",children:[e.jsx("th",{scope:"col",className:"px-3 py-3"}),e.jsx("th",{scope:"col",className:"px-3 py-3",children:e.jsx(j,{className:"w-full",placeholder:"Employee Name",defaultValue:t.name,onBlur:a=>x("name",a.target.value),onKeyPress:a=>p("name",a)})}),e.jsx("th",{scope:"col",className:"px-3 py-3"}),e.jsx("th",{scope:"col",className:"px-3 py-3"}),e.jsx("th",{scope:"col",className:"px-3 py-3",children:e.jsx(j,{className:"w-full",placeholder:"Employee CNIC",defaultValue:t.cnic,onBlur:a=>x("cnic",a.target.value),onKeyPress:a=>p("cnic",a)})}),e.jsx("th",{scope:"col",className:"px-3 py-3"}),e.jsx("th",{scope:"col",className:"px-3 py-3"}),e.jsx("th",{scope:"col",className:"px-3 py-3"}),e.jsx("th",{scope:"col",className:"px-3 py-3"}),e.jsx("th",{scope:"col",className:"px-3 py-3"}),e.jsx("th",{scope:"col",className:"px-3 py-3"}),e.jsx("th",{scope:"col",className:"px-3 py-3 text-right"})]})}),e.jsx("tbody",{children:s.data.map((a,c)=>e.jsxs("tr",{className:` border-b dark:bg-gray-800 dark:border-gray-700 ${a.verified==="Yes"?"bg-green-200":"bg-red-200"}`,children:[e.jsx("td",{className:"px-3 py-2",children:c+(n-1)*o+1}),e.jsx("th",{className:"px-3 py-2 hover:underline  text-nowrap text-left",children:e.jsx(f,{href:route("employee.show",a.id),children:a.name})}),e.jsx("th",{className:"px-3 py-2   text-nowrap text-left",children:a.father_name}),e.jsx("th",{className:"px-3 py-2   text-nowrap text-left",children:a.husband_name}),e.jsx("th",{className:"px-3 py-2   text-nowrap text-left",children:a.cnic}),e.jsx("th",{className:"px-3 py-2   text-nowrap text-left",children:a.program.title}),e.jsx("td",{className:"px-3 py-2",children:a.district.title}),e.jsx("td",{className:"px-3 py-2",children:a.designation.title}),e.jsx("td",{className:"px-3 py-2",children:a.status}),e.jsx("td",{className:"px-3 py-2",children:e.jsxs("sapn",{className:""+a.verified=="Yes"?"text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 p-2 dark:text-green-400 border border-green-400 bg-green-100 text-green-800":"text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 p-2 dark:text-red-400 border border-red-400 bg-red-100 text-red-800",children:[" ",a.verified]})}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("a",{href:route("biometric.index",a.id),className:"font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1",children:e.jsx(T,{size:24,color:a.biometric?"green":"red"})})}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx(f,{href:route("employee.edit",a.id),className:"font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1",children:"Edit"}),e.jsx("button",{onClick:R=>w(a.id),className:"font-medium text-red-600 dark:text-red-500 hover:underline mx-1",children:"Delete"})]})]},c))})]}),e.jsx(_,{links:s.meta.links})]})]})})]})}export{F as default};
