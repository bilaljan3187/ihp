import{r as o,j as e,a as l}from"./app-DssH1EGq.js";import{A as f}from"./ApplicationLogo-BB-fn7Rd.js";import{q as y}from"./transition-w1TJRnbJ.js";const g=o.createContext(),x=({children:r})=>{const[t,i]=o.useState(!1),a=()=>{i(d=>!d)};return e.jsx(g.Provider,{value:{open:t,setOpen:i,toggleOpen:a},children:e.jsx("div",{className:"relative",children:r})})},p=({children:r})=>{const{open:t,setOpen:i,toggleOpen:a}=o.useContext(g);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:a,children:r}),t&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>i(!1)})]})},v=({align:r="right",width:t="48",contentClasses:i="py-1 bg-white dark:bg-gray-700",children:a})=>{const{open:d,setOpen:u}=o.useContext(g);let h="origin-top";r==="left"?h="ltr:origin-top-left rtl:origin-top-right start-0":r==="right"&&(h="ltr:origin-top-right rtl:origin-top-left end-0");let m="";return t==="48"&&(m="w-48"),e.jsx(e.Fragment,{children:e.jsx(y,{as:o.Fragment,show:d,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${h} ${m}`,onClick:()=>u(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+i,children:a})})})})},j=({className:r="",children:t,...i})=>e.jsx(l,{...i,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out "+r,children:t});x.Trigger=p;x.Content=v;x.Link=j;const c=x;function s({active:r=!1,className:t="",children:i,...a}){return e.jsx(l,{...a,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(r?"border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 ":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ")+t,children:i})}function n({active:r=!1,className:t="",children:i,...a}){return e.jsx(l,{...a,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${r?"border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300":"border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`,children:i})}function w({user:r,header:t,children:i}){const[a,d]=o.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900",children:[e.jsxs("nav",{className:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700",children:[e.jsx("div",{className:" mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(l,{href:"/",children:e.jsx(f,{className:"block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"})})}),e.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:[e.jsx(s,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),e.jsx(s,{href:route("employee.index"),active:route().current("employee.index"),children:"Employees"}),e.jsxs(s,{href:route("employeetype.index"),active:route().current("employeetype.index"),children:[" ","Employee Types"]}),e.jsxs(s,{href:route("designation.index"),active:route().current("designation.index"),children:[" ","Designations"]}),e.jsxs(s,{href:route("qualification.index"),active:route().current("qualification.index"),children:[" ","Qualifications"]}),e.jsxs(s,{href:route("district.index"),active:route().current("district.index"),children:[" ","Districts"]}),e.jsxs(s,{href:route("tehsil.index"),active:route().current("tehsil.index"),children:[" ","Tehsils"]}),e.jsxs(s,{href:route("unioncouncil.index"),active:route().current("unioncouncil.index"),children:[" ","UCs"]}),e.jsxs(s,{href:route("facility.index"),active:route().current("facility.index"),children:[" ","Facilities"]}),e.jsxs(s,{href:route("facilitytype.index"),active:route().current("facilitytype.index"),children:[" ","Facility Types"]}),e.jsxs(s,{href:route("program.index"),active:route().current("program.index"),children:[" ","Programs"]}),e.jsxs(s,{href:route("year.index"),active:route().current("year.index"),children:[" ","Years"]}),e.jsxs(s,{href:route("users"),active:route().current("users"),children:[" ","Users"]}),e.jsxs(s,{href:route("usertype.index"),active:route().current("usertype.index"),children:[" ","User types"]})]})]}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:e.jsx("div",{className:"ms-3 relative",children:e.jsxs(c,{children:[e.jsx(c.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",children:[r.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(c.Content,{children:[e.jsx(c.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(c.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>d(u=>!u),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:a?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:a?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(a?"block":"hidden")+" sm:hidden",children:[e.jsxs("div",{className:"pt-2 pb-3 space-y-1",children:[e.jsx(n,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),e.jsx(n,{href:route("employee.index"),active:route().current("employee.index"),children:"Employees"}),e.jsxs(n,{href:route("employeetype.index"),active:route().current("employeetype.index"),children:[" ","Employee Types"]}),e.jsxs(n,{href:route("designation.index"),active:route().current("designation.index"),children:[" ","Designations"]}),e.jsxs(n,{href:route("qualification.index"),active:route().current("qualification.index"),children:[" ","Qualifications"]}),e.jsxs(n,{href:route("district.index"),active:route().current("district.index"),children:[" ","Districts"]}),e.jsxs(n,{href:route("facility.index"),active:route().current("facility.index"),children:[" ","Facilities"]}),e.jsxs(n,{href:route("facilitytype.index"),active:route().current("facilitytype.index"),children:[" ","Facility Types"]}),e.jsxs(n,{href:route("program.index"),active:route().current("program.index"),children:[" ","Programs"]}),e.jsxs(n,{href:route("year.index"),active:route().current("year.index"),children:[" ","Years"]}),e.jsxs(n,{href:route("users"),active:route().current("users"),children:[" ","Users"]}),e.jsxs(n,{href:route("usertype.index"),active:route().current("usertype.index"),children:[" ","User types"]})]}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800 dark:text-gray-200",children:r.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:r.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(n,{href:route("profile.edit"),children:"Profile"}),e.jsx(n,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&e.jsx("header",{className:"bg-white dark:bg-gray-800 shadow",children:e.jsx("div",{className:" mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t})}),e.jsx("div",{className:"overflow-hidden",children:e.jsx("div",{className:" mx-auto px-4 sm:px-6 md:px-8 flex",children:e.jsx("div",{className:"w-full",children:e.jsx("main",{className:"w-full pt-2 ",children:i})})})})]})})}export{w as A};
