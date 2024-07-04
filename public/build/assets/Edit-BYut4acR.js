import{r as h,W as z,j as e,Y as K,a as X}from"./app-C29KYL2e.js";import{I as r}from"./InputError-BH8t4fU8.js";import{I as c}from"./InputLabel-BvMpiiex.js";import{S as d}from"./SelectInput-CWPV1TrY.js";import{T as m}from"./TextInput-DY-iC6yZ.js";import{A as Z}from"./AuthenticatedLayout-4EaVsIev.js";import"./ApplicationLogo-BopYhmHI.js";import"./transition-I43RbZRO.js";function de({auth:N,employee:s,employee_types:y,districts:j,afacilities:C,designations:w,qualifications:F,financials:b,programs:S,atehsils:D,aunion_councils:T,ctehsils:I,cunion_councils:A,cfacilities:E,officers:q}){const[$,g]=h.useState(C),[P,v]=h.useState(D),[U,x]=h.useState(T),[k,_]=h.useState(E),[Y,f]=h.useState(I),[G,p]=h.useState(A),[H,u]=h.useState(q),{data:i,setData:t,post:M,errors:n,reset:ee,progress:ae}=z({name:s.data.name,father_name:s.data.father_name,husband_name:s.data.husband_name,gender:s.data.gender,cnic:s.data.cnic,program_id:s.data.program.id,dob:s.data.dob,domicile:s.data.domicile.id,employee_type_id:s.data.employee_type_id.id,qualification_id:s.data.qualification.id,financial_year_id:s.data.financial_year.id,contact_no:s.data.contact_no,account_no:s.data.account_no,address:s.data.address,verified:s.data.verified,designation_id:s.data.designation.id,doa:s.data.doa,doj:s.data.doj,station:s.data.station,district_id:s.data.district.id,appointed_tehsil:s.data.appointed_tehsil.id,appointed_union_council:s.data.appointed_union_council.id,facility_id:s.data.facility.id,current_district:s.data.current_district.id,current_tehsil:s.data.current_tehsil.id,current_union_council:s.data.current_union_council.id,current_facility:s.data.current_facility.id,reporting_officer:s.data.reporting_officer.id,appointed_catchment_area:s.data.appointed_catchment_area,current_catchment_area:s.data.current_catchment_area,_method:"PUT"}),O=async a=>{x([]),g([]),t("appointed_tehsil",null),alert(appointed_tehsil),t("appointed_union_council",null),t("facility_id",null);const l=a.target.value;if(t("district_id",l),l)try{const o=await axios.get(`/districts-tehsils/${l}`);v(o.data)}catch(o){console.error("There was an error fetching the tehsils!",o)}else v([])},Q=async a=>{x([]);const l=a.target.value;if(t("appointed_tehsil",l),l)try{const o=await axios.get(`/tehsil-councils/${l}`);x(o.data)}catch(o){console.error("There was an error fetching the union councils!",o)}else x([])},R=async a=>{const l=a.target.value;if(t("appointed_union_council",l),l)try{const o=await axios.get(`/council-facilites/${l}`);g(o.data)}catch(o){console.error("There was an error fetching the Facilities!",o)}else g([])},B=async a=>{p([]),_([]),u([]);const l=a.target.value;if(t("current_district",l),l)try{const o=await axios.get(`/districts-tehsils/${l}`);f(o.data)}catch(o){console.error("There was an error fetching the tehsils!",o)}else f([])},J=async a=>{p([]),u([]);const l=a.target.value;if(t("current_tehsil",l),l)try{const o=await axios.get(`/tehsil-councils/${l}`);p(o.data)}catch(o){console.error("There was an error fetching the union councils!",o)}else p([])},L=async a=>{u([]);const l=a.target.value;if(t("current_union_council",l),l)try{const o=await axios.get(`/council-facilites/${l}`);_(o.data)}catch(o){console.error("There was an error fetching the Facilities!",o)}else _([])},V=async a=>{const l=a.target.value;if(t("current_facility",l),l)try{const o=await axios.get(`/facility-employee/${l}`);u(o.data)}catch(o){console.error("There was an error fetching the employees!",o)}else u([])},W=a=>{a.preventDefault(),M(route("employee.update",s.data.id))};return e.jsxs(Z,{user:N.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Create New Employee"})}),children:[e.jsx(K,{title:"Employees"}),e.jsx("div",{className:"py-1",children:e.jsx("div",{className:" mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100 ",children:e.jsxs("form",{action:"",onSubmit:W,className:"p-4  bg-white dark:bg-gray-800 shadow sm:rounded-lg ",children:[e.jsx("h1",{className:"font-bold underline",children:"Personal Information"}),e.jsxs("div",{className:"w-full flex flex-row flex-wrap",children:[e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"employee_name",value:"Employee Name"}),e.jsx(m,{id:"employee_name",type:"text",name:"name",value:i.name,className:"mt-1 w-80",isFocused:!0,onChange:a=>t("name",a.target.value)}),e.jsx(r,{message:n.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"father_name",value:"Father Name"}),e.jsx(m,{id:"father_name",type:"text",name:"father_name",value:i.father_name,className:"mt-1 w-80",onChange:a=>t("father_name",a.target.value)}),e.jsx(r,{message:n.father_name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"husband_name",value:"Husband Name"}),e.jsx(m,{id:"husband_name",type:"text",name:"husband_name",value:i.husband_name,className:"mt-1 w-80",onChange:a=>t("husband_name",a.target.value)}),e.jsx(r,{message:n.husband_name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"cnic",value:"CNIC"}),e.jsx(m,{id:"cnic",type:"text",name:"cnic",value:i.cnic,className:"mt-1 w-80",onChange:a=>t("cnic",a.target.value)}),e.jsx(r,{message:n.cnic,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"gender",value:"Gender"}),e.jsxs(d,{id:"gender",name:"gender",value:i.gender,className:"mt-1 w-80",onChange:a=>t("gender",a.target.value),children:[e.jsx("option",{children:"Select Gender"}),e.jsx("option",{value:"Male",children:"Male"}),e.jsx("option",{value:"Female",children:"Female"})]}),e.jsx(r,{message:n.gender,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"dob",value:"Date of Birth"}),e.jsx(m,{id:"dob",type:"date",name:"gender",value:i.dob,className:"mt-1 w-80",onChange:a=>t("dob",a.target.value)}),e.jsx(r,{message:n.dob,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"domicile",value:"Domicile"}),e.jsxs(d,{id:"domicile",name:"domicile",value:i.domicile,className:"mt-1 w-80",onChange:a=>{t("domicile",a.target.value)},children:[e.jsx("option",{children:"Select District"}),j.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(r,{message:n.domicile,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"qualification",value:"Highest Qualification"}),e.jsxs(d,{id:"qualification",name:"qualification_id",value:i.qualification_id,className:"mt-1 w-80",onChange:a=>t("qualification_id",a.target.value),children:[e.jsx("option",{children:"Select Qualification"}),F.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(r,{message:n.qualification_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"financial_year",value:"Financial year"}),e.jsxs(d,{id:"financial_year",name:"financial_year_id",value:i.financial_year_id,className:"mt-1 w-80",onChange:a=>t("financial_year_id",a.target.value),children:[e.jsx("option",{children:"Select Financial year"}),b.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(r,{message:n.financial_year_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"account_no",value:"Account No"}),e.jsx(m,{id:"account_no",type:"text",name:"account_no",value:i.account_no,className:"mt-1 w-80",onChange:a=>t("account_no",a.target.value)}),e.jsx(r,{message:n.account_no,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"contact_no",value:"Contact No"}),e.jsx(m,{id:"contact_no",type:"text",name:"contact_no",value:i.contact_no,className:"mt-1 w-80",onChange:a=>t("contact_no",a.target.value)}),e.jsx(r,{message:n.contact_no,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"address",value:"Address"}),e.jsx(m,{id:"address",type:"text",name:"address",value:i.address,className:"mt-1 w-80",onChange:a=>t("address",a.target.value)}),e.jsx(r,{message:n.address,className:"mt-2"})]})]}),e.jsx("h1",{className:"font-bold py-4 underline",children:"Employement Information"}),e.jsxs("div",{className:"w-full flex flex-row flex-wrap",children:[e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"program",value:"Program"}),e.jsxs(d,{id:"program",name:"program_id",value:i.program_id,className:"mt-1 w-80",onChange:a=>t("program_id",a.target.value),children:[e.jsx("option",{children:"Select Program"}),S.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(r,{message:n.program_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"designation",value:"Designation"}),e.jsxs(d,{id:"designation",name:"designation_id",value:i.designation_id,className:"mt-1 w-80",onChange:a=>t("designation_id",a.target.value),children:[e.jsx("option",{children:"Select Designation"}),w.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(r,{message:n.designation_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"employee_type",value:"Employee Type"}),e.jsxs(d,{id:"employee_type",name:"employee_type",value:i.employee_type_id,className:"mt-1 w-80",onChange:a=>t("employee_type_id",a.target.value),children:[e.jsx("option",{children:"Select Employee Type"}),y.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(r,{message:n.employee_type_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"station",value:"Duty Station"}),e.jsxs(d,{id:"station",name:"station",value:i.station,className:"mt-1 w-80",onChange:a=>t("station",a.target.value),children:[e.jsx("option",{children:"Select Station"}),e.jsx("option",{value:"Provincial",children:"Provincial"}),e.jsx("option",{value:"District",children:"District"})]}),e.jsx(r,{message:n.station,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"doa",value:"Date of Appointment"}),e.jsx(m,{id:"doa",type:"date",name:"gender",value:i.doa,className:"mt-1 w-80",onChange:a=>t("doa",a.target.value)}),e.jsx(r,{message:n.doa,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"doj",value:"Date of Joining"}),e.jsx(m,{id:"doj",type:"date",name:"doj",value:i.doj,className:"mt-1 w-80",onChange:a=>t("doj",a.target.value)}),e.jsx(r,{message:n.doj,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"district",value:"Duty District (Appointed)"}),e.jsxs(d,{id:"district",name:"district_id",value:i.district_id,className:"mt-1 w-80",onChange:O,children:[e.jsx("option",{children:"Select District"}),j.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(r,{message:n.district_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"appointTehsil",value:"Duty Tehsil (Appointed)"}),e.jsxs(d,{id:"appointTehsil",name:"appointed_tehsil",value:i.appointed_tehsil,className:"mt-1 w-80",onChange:Q,children:[e.jsx("option",{children:"Select District First"}),P.map(a=>e.jsx("option",{value:a.id,children:a.title},a.id))]}),e.jsx(r,{message:n.appointed_tehsil,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"appointCouncil",value:"Duty Union Council (Appointed)"}),e.jsxs(d,{id:"appointCouncil",name:"appointed_union_council",value:i.appointed_union_council,className:"mt-1 w-80",onChange:R,children:[e.jsx("option",{children:"Select Tehsil First"}),U.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(r,{message:n.appointed_union_council,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"appointFacility",value:"Duty Facility (Appointed)"}),e.jsxs(d,{id:"appointFacility",name:"facility_id",value:i.facility_id,className:"mt-1 w-80",onChange:a=>{t("facility_id",a.target.value)},children:[e.jsx("option",{children:"Select Union Council First"}),$.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(r,{message:n.facility_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"appointcatchment",value:"Catchment Area (Appointed)"}),e.jsx(m,{id:"appointcatchment",type:"text",name:"appointed_catchment_area",value:i.appointed_catchment_area,className:"mt-1 w-80",onChange:a=>t("appointed_catchment_area",a.target.value)}),e.jsx(r,{message:n.appointed_catchment_area,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"currentdistrict",value:"Duty District (Current)"}),e.jsxs(d,{id:"currentdistrict",name:"current_district",value:i.current_district,className:"mt-1 w-80",onChange:B,children:[e.jsx("option",{children:"Select District"}),j.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(r,{message:n.current_district,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"currentTehsil",value:"Duty Tehsil (Current)"}),e.jsxs(d,{id:"currentTehsil",name:"current_tehsil",value:i.current_tehsil,className:"mt-1 w-80",onChange:J,children:[e.jsx("option",{children:"Select District First"}),Y.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(r,{message:n.current_tehsil,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"currentCouncil",value:"Duty Union Council (Current)"}),e.jsxs(d,{id:"currentCouncil",name:"current_union_council",value:i.current_union_council,className:"mt-1 w-80",onChange:L,children:[e.jsx("option",{children:"Select Tehsil First"}),G.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(r,{message:n.current_union_council,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"currentFacility",value:"Duty Facility (Current)"}),e.jsxs(d,{id:"currentFacility",name:"current_facility",value:i.current_facility,className:"mt-1 w-80",onChange:V,children:[e.jsx("option",{children:"Select Union Council First"}),k.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(r,{message:n.current_facility,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"reportingofficer",value:"Reporting Officer"}),e.jsxs(d,{id:"reportingofficer",name:"reporting_officer",value:i.reporting_officer,className:"mt-1 w-80",onChange:a=>{t("reporting_officer",a.target.value)},children:[e.jsx("option",{children:"Select Officer"}),H.map(a=>e.jsx("option",{value:a.id,children:a.name}))]}),e.jsx(r,{message:n.current_district,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"currentcatchment",value:"Catchment Area (Current)"}),e.jsx(m,{id:"currentcatchment",type:"text",name:"current_catchment_area",value:i.current_catchment_area,className:"mt-1 w-80",onChange:a=>t("current_catchment_area",a.target.value)}),e.jsx(r,{message:n.current_catchment_area,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(c,{htmlFor:"verified",value:"Verified"}),e.jsxs(d,{id:"verified",name:"verified",value:i.verified,className:"mt-1 w-80",onChange:a=>t("verified",a.target.value),children:[e.jsx("option",{children:"Select Status"}),e.jsx("option",{value:"No",children:"No"}),e.jsx("option",{value:"Yes",children:"Yes"})]}),e.jsx(r,{message:n.verified,className:"mt-2"})]}),e.jsxs("div",{className:"mt-9 text-right",children:[e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Update Employee"}),e.jsx(X,{href:route("employee.index"),className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"})]})]})]})})})})})]})}export{de as default};
