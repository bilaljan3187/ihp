import{j as e,Y as h,a as x}from"./app-JctyaatL.js";import"./SelectInput-C0j6sM9X.js";import"./TextInput-xsOVZClB.js";import{A as m}from"./ApplicationLogo-UL5X0txR.js";import"./Dropdown-4RDQ7-1R.js";import{H as j,F as p}from"./index-ezSadYuD.js";import"./transition-Bxw8h7tv.js";function _({auth:b,employees:a,queryParams:n=null,date:N,officers:c,operators:i,user:d,verified:t}){n=n||{};function l(r){const s=new Date(r),o={year:"numeric",month:"numeric",day:"numeric"};return s.toLocaleDateString("en-UK",o)}return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Employees"}),e.jsx("div",{className:"py-1",children:e.jsx("div",{className:"mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsxs("div",{className:"p-2 text-gray-900 dark:text-gray-100 text-center border-b-4",children:[e.jsx(m,{}),e.jsx("h2",{className:"font-bold text-lg ",children:"Integrated Health Project"}),e.jsx("h1",{className:"",children:"Integration of Health Services Delivery With Special Focus On MNCH, LHW's and Nutrition Program"}),e.jsx("h2",{className:"font-bold text-lg ",children:"GOVT. OF KHYBER PAKHTUNKHWA, PESHAWAR"}),e.jsxs("p",{children:["Phone: (Office):"," ",e.jsx("span",{className:"italic underline px-2",children:"091-9216344"}),"Fax:"," ",e.jsx("span",{className:"italic underline pr-2",children:"091-9216346"}),"Email:"," ",e.jsx("span",{className:"italic underline",children:"ihphealthkp@gmail.com"})]}),e.jsx("p",{children:"House No 13C/C Sifat ghayoor Road University Town Peshawar"}),e.jsx("h1",{className:"underline font-bold text-lg text-center",children:t=="Yes"?"Verified List of Employees ":"UnVerified List of Employees"})]}),e.jsxs("table",{className:"w-full text-sm teext-left rtl:text-right text-gray-500 dark:text-gray-400 mt-2",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500",children:e.jsxs("tr",{className:"text-nowrap border-t-2 ",children:[e.jsx("th",{scope:"col",className:"py-2 border-r-2 ",children:"S.No"}),e.jsx("th",{children:"Name"}),e.jsx("th",{scope:"col",className:"py-2 border-r-2 ",children:"father Name"}),e.jsx("th",{scope:"col",className:"py-2 border-r-2 ",children:"husband Name"}),e.jsx("th",{children:"CNIC"}),e.jsx("th",{children:"DOB"}),e.jsx("th",{children:"DOA"}),e.jsx("th",{scope:"col",className:"py-2 border-r-2 ",children:"Program"}),e.jsx("th",{scope:"col",className:"py-2 border-r-2 ",children:"Designation"}),e.jsx("th",{scope:"col",className:"py-2 border-r-2 ",children:"Domicile"}),e.jsx("th",{scope:"col",className:"py-2 border-r-2 ",children:"Type"}),e.jsx("th",{scope:"col",className:"py-2 border-r-2 ",children:"District"}),e.jsx("th",{scope:"col",className:"py-2 border-r-2 ",children:"Tehsil"}),e.jsx("th",{scope:"col",className:"py-2 border-r-2 ",children:"UC"}),e.jsx("th",{scope:"col",className:"py-2 border-r-2 ",children:"Facility"}),t=="Yes"&&e.jsxs(e.Fragment,{children:[e.jsx("th",{scope:"col",className:"py-2 border-r-2 ",children:"Officer"}),e.jsx("th",{children:"Verified By"}),e.jsx("th",{children:"Verified On"})]}),e.jsx("th",{scope:"col",className:"py-2 border-r-2 "}),e.jsx("th",{})]})}),e.jsx("tbody",{children:a.map((r,s)=>e.jsxs("tr",{className:"border-b  dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-400 hover:text-white",children:[e.jsx("th",{className:" text-nowrap border-r-2 border-l-2",children:s+1}),e.jsx("th",{className:" hover:underline  text-nowrap border-r-2 text-left pl-1",children:e.jsx(x,{href:route("employee.show",r.id),children:r.name})}),e.jsx("th",{className:"py-2 border-r-2 text-nowrap text-left pl-1",children:r.father_name}),e.jsx("th",{className:"text-nowrap border-r-2 text-left pl-1",children:r.husband_name}),e.jsx("th",{className:"text-nowrap border-r-2 ",children:r.cnic}),e.jsx("th",{className:"text-nowrap border-r-2 ",children:l(r.dob)}),e.jsx("th",{className:"text-nowrap border-r-2 ",children:l(r.doa)}),e.jsx("th",{className:"text-nowrap border-r-2 ",children:r.program.title}),e.jsx("th",{className:"text-nowrap border-r-2 ",children:r.designation.title}),e.jsx("th",{className:"text-nowrap border-r-2 ",children:r.domicilee.title}),e.jsx("th",{className:"text-nowrap border-r-2 ",children:r.employee_typee.title}),e.jsx("th",{className:"text-nowrap border-r-2",children:r.district.title}),e.jsx("th",{className:"text-nowrap border-r-2",children:r.current_tehsill.title}),e.jsx("th",{className:"text-nowrap border-r-2",children:r.current_union_councill.title}),e.jsx("th",{className:"text-nowrap border-r-2",children:r.current_facilityy.title}),t=="Yes"&&e.jsxs(e.Fragment,{children:[e.jsx("th",{className:"text-nowrap border-r-2",children:r.reporting_officerr.name}),e.jsxs("th",{className:"text-nowrap border-r-2",children:[" ",r.updated_byy.name]}),e.jsx("th",{className:"text-nowrap border-r-2",children:l(r.updated_at)})]}),e.jsx("th",{className:"",children:e.jsx(j,{size:24,color:r.is_biometric==1?"green":"red"})}),e.jsx("th",{children:e.jsx(p,{size:24,color:r.documents.length>0?"green":"red"})})]},s))})]}),t=="Yes"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-2 py-2  w-full block text-center",children:[e.jsx("h3",{className:"font-bold text-xl underline",children:"Acknowlegement"}),e.jsx("h4",{className:"font-bold text-xl",children:"All the above employees are verified under the supervision of the following LHS/LHS's"})]}),e.jsxs("div",{className:"border-b-4",children:[c.map((r,s)=>e.jsx(e.Fragment,{children:e.jsxs("h1",{className:"font-bold text-lg block pt-7 border-b",children:[r.reporting_officerr?r.reporting_officerr.name:"Un Known Officer"," ",e.jsxs("span",{className:"font-normal",children:["has verified ",r.total," ","Employees"]})]})})),e.jsxs("h1",{className:" text-xl font-bold mt-3",children:["Total Employees ",a.length]})]}),e.jsxs("div",{className:"border-b-4",children:[e.jsx("h2",{className:"text-center text-xl font-bold",children:"IHP Representatives"}),i.map((r,s)=>e.jsx(e.Fragment,{children:e.jsxs("h1",{className:"font-bold text-lg block pt-7 border-b",children:[r.updated_byy?r.updated_byy.name:"UnKnown Officer"," ",e.jsxs("span",{className:"font-normal",children:["has verified"," ",r.total," Employees"]})]})})),e.jsxs("h1",{className:" text-xl font-bold mt-3",children:["Total Employees ",a.length]}),e.jsxs("h1",{className:"font-bold text-lg block pt-7 border-b",children:["Deputy Director Operation Integrated Health Project"," ",e.jsx("span",{className:"underline italic",children:"Dr. Muhammad Zarin"})]})]})]}),t=="No"&&e.jsxs("h1",{className:" text-xl font-bold mt-3",children:["Total Unverified Employees ",a.length]}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[e.jsxs("h1",{children:["Report generated By ",d," at"," ",new Date().toLocaleString()]}),e.jsxs("h1",{children:["System Developed by"," ",e.jsx("span",{className:"font-bold",children:"Bilal Muhammad (IT Assistant)"}),e.jsx("span",{children:" Integrated Health Project "})]})]})]})})})]})}export{_ as default};
