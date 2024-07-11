import{r as m,W as B,j as e,a as O,Y as G,y as H}from"./app-DssH1EGq.js";import{I as l}from"./InputError-DojYFSgl.js";import{I as i}from"./InputLabel-Bo1FWj_s.js";import{S as d}from"./SelectInput-lIWdKMhc.js";import{T as c}from"./TextInput-CjuStT7k.js";import{A as J}from"./AuthenticatedLayout-DMjK5FD7.js";import"./ApplicationLogo-BB-fn7Rd.js";import"./transition-w1TJRnbJ.js";function le({auth:h,employee:t,employee_types:x,districts:o,afacilities:j,designations:p,qualifications:v,financials:g,programs:_,atehsils:N,aunion_councils:f,ctehsils:b,cunion_councils:y,cfacilities:w,officers:F,documents:C}){const[S,M]=m.useState(j),[D,Q]=m.useState(N),[A,R]=m.useState(f),[T,V]=m.useState(w),[E,$]=m.useState(b),[k,L]=m.useState(y),[I,W]=m.useState(F),{data:s,setData:r,post:q,errors:n,reset:z,progress:K}=B({name:t.data.name,father_name:t.data.father_name,husband_name:t.data.husband_name,gender:t.data.gender,cnic:t.data.cnic,program_id:t.data.program.id,dob:t.data.dob,domicile:t.data.domicile.id,employee_type_id:t.data.employee_type_id.id,qualification_id:t.data.qualification.id,financial_year_id:t.data.financial_year.id,contact_no:t.data.contact_no,account_no:t.data.account_no,address:t.data.address,verified:t.data.verified,designation_id:t.data.designation.id,doa:t.data.doa,doj:t.data.doj,station:t.data.station,district_id:t.data.district.id,appointed_tehsil:t.data.appointed_tehsil.id,appointed_union_council:t.data.appointed_union_council.id,facility_id:t.data.facility.id,current_district:t.data.current_district.id,current_tehsil:t.data.current_tehsil.id,current_union_council:t.data.current_union_council.id,current_facility:t.data.current_facility.id,reporting_officer:t.data.reporting_officer.id,appointed_catchment_area:t.data.appointed_catchment_area,current_catchment_area:t.data.current_catchment_area,document:"",files:"",remarks:"",employee:t.data.id,biometric:t.data.biometricc.biometric}),P=a=>{H.delete(`/document/${a}`,{onBefore:()=>confirm("Are you sure you want to delete this document?"),preserveScroll:!1})},U=a=>{a.preventDefault(),q(route("document.index"))};return e.jsxs(J,{user:h.user,header:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"View Employee"}),e.jsx(O,{href:route("employee.edit",t.data.id),className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Edit This Employee"})]}),children:[e.jsx(G,{title:"Employees"}),JSON.stringify(t.data),e.jsx("div",{className:"py-1",children:e.jsx("div",{className:" mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:`p-6 text-gray-900 dark:text-gray-100 ${s.verified==="Yes"?"bg-green-500":"bg-red-500"}`,children:e.jsxs("form",{className:"p-4  bg-white dark:bg-gray-800 shadow sm:rounded-lg ",children:[e.jsx("h1",{className:"font-bold underline",children:"Personal Information"}),e.jsxs("div",{className:"w-full flex flex-row flex-wrap",children:[e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"employee_name",value:"Employee Name"}),e.jsx(c,{disabled:!0,id:"employee_name",type:"text",name:"name",value:s.name,className:"mt-1 w-80",isFocused:!0,onChange:a=>r("name",a.target.value)}),e.jsx(l,{message:n.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"father_name",value:"Father Name"}),e.jsx(c,{disabled:!0,id:"father_name",type:"text",name:"father_name",value:s.father_name,className:"mt-1 w-80",onChange:a=>r("father_name",a.target.value)}),e.jsx(l,{message:n.father_name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"husband_name",value:"Husband Name"}),e.jsx(c,{disabled:!0,id:"husband_name",type:"text",name:"husband_name",value:s.husband_name,className:"mt-1 w-80",onChange:a=>r("husband_name",a.target.value)}),e.jsx(l,{message:n.husband_name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"cnic",value:"CNIC"}),e.jsx(c,{disabled:!0,id:"cnic",type:"text",name:"cnic",value:s.cnic,className:"mt-1 w-80",onChange:a=>r("cnic",a.target.value)}),e.jsx(l,{message:n.cnic,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"gender",value:"Gender"}),e.jsxs(d,{disabled:!0,id:"gender",name:"gender",value:s.gender,className:"mt-1 w-80",onChange:a=>r("gender",a.target.value),children:[e.jsx("option",{children:"Select Gender"}),e.jsx("option",{value:"Male",children:"Male"}),e.jsx("option",{value:"Female",children:"Female"})]}),e.jsx(l,{message:n.gender,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"dob",value:"Date of Birth"}),e.jsx(c,{disabled:!0,id:"dob",type:"date",name:"gender",value:s.dob,className:"mt-1 w-80",onChange:a=>r("dob",a.target.value)}),e.jsx(l,{message:n.dob,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"domicile",value:"Domicile"}),e.jsxs(d,{disabled:!0,id:"domicile",name:"domicile",value:s.domicile,className:"mt-1 w-80",onChange:a=>{r("domicile",a.target.value)},children:[e.jsx("option",{children:"Select District"}),o.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(l,{message:n.domicile,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"qualification",value:"Highest Qualification"}),e.jsxs(d,{disabled:!0,id:"qualification",name:"qualification_id",value:s.qualification_id,className:"mt-1 w-80",onChange:a=>r("qualification_id",a.target.value),children:[e.jsx("option",{children:"Select Qualification"}),v.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(l,{message:n.qualification_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"financial_year",value:"Financial year"}),e.jsxs(d,{disabled:!0,id:"financial_year",name:"financial_year_id",value:s.financial_year_id,className:"mt-1 w-80",onChange:a=>r("financial_year_id",a.target.value),children:[e.jsx("option",{children:"Select Financial year"}),g.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(l,{message:n.financial_year_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"account_no",value:"Account No"}),e.jsx(c,{disabled:!0,id:"account_no",type:"text",name:"account_no",value:s.account_no,className:"mt-1 w-80",onChange:a=>r("account_no",a.target.value)}),e.jsx(l,{message:n.account_no,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"contact_no",value:"Contact No"}),e.jsx(c,{disabled:!0,id:"contact_no",type:"text",name:"contact_no",value:s.contact_no,className:"mt-1 w-80",onChange:a=>r("contact_no",a.target.value)}),e.jsx(l,{message:n.contact_no,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"address",value:"Address"}),e.jsx(c,{disabled:!0,id:"address",type:"text",name:"address",value:s.address,className:"mt-1 w-80",onChange:a=>r("address",a.target.value)}),e.jsx(l,{message:n.address,className:"mt-2"})]})]}),e.jsx("h1",{className:"font-bold py-4 underline",children:"Employement Information"}),e.jsxs("div",{className:"w-full flex flex-row flex-wrap",children:[e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"program",value:"Program"}),e.jsxs(d,{disabled:!0,id:"program",name:"program_id",value:s.program_id,className:"mt-1 w-80",onChange:a=>r("program_id",a.target.value),children:[e.jsx("option",{children:"Select Program"}),_.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(l,{message:n.program_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"designation",value:"Designation"}),e.jsxs(d,{disabled:!0,id:"designation",name:"designation_id",value:s.designation_id,className:"mt-1 w-80",onChange:a=>r("designation_id",a.target.value),children:[e.jsx("option",{children:"Select Designation"}),p.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(l,{message:n.designation_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"employee_type",value:"Employee Type"}),e.jsxs(d,{disabled:!0,id:"employee_type",name:"employee_type",value:s.employee_type_id,className:"mt-1 w-80",onChange:a=>r("employee_type_id",a.target.value),children:[e.jsx("option",{children:"Select Employee Type"}),x.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(l,{message:n.employee_type_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"station",value:"Duty Station"}),e.jsxs(d,{disabled:!0,id:"station",name:"station",value:s.station,className:"mt-1 w-80",onChange:a=>r("station",a.target.value),children:[e.jsx("option",{children:"Select Station"}),e.jsx("option",{value:"Provincial",children:"Provincial"}),e.jsx("option",{value:"District",children:"District"})]}),e.jsx(l,{message:n.station,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"doa",value:"Date of Appointment"}),e.jsx(c,{disabled:!0,id:"doa",type:"date",name:"gender",value:s.doa,className:"mt-1 w-80",onChange:a=>r("doa",a.target.value)}),e.jsx(l,{message:n.doa,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"doj",value:"Date of Joining"}),e.jsx(c,{disabled:!0,id:"doj",type:"date",name:"doj",value:s.doj,className:"mt-1 w-80",onChange:a=>r("doj",a.target.value)}),e.jsx(l,{message:n.doj,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"district",value:"Duty District (Appointed)"}),e.jsxs(d,{disabled:!0,id:"district",name:"district_id",value:s.district_id,className:"mt-1 w-80",children:[e.jsx("option",{children:"Select District"}),o.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(l,{message:n.district_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"appointTehsil",value:"Duty Tehsil (Appointed)"}),e.jsxs(d,{disabled:!0,id:"appointTehsil",name:"appointed_tehsil",value:s.appointed_tehsil,className:"mt-1 w-80",children:[e.jsx("option",{children:"Select District First"}),D.map(a=>e.jsx("option",{value:a.id,children:a.title},a.id))]}),e.jsx(l,{message:n.appointed_tehsil,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"appointCouncil",value:"Duty Union Council (Appointed)"}),e.jsxs(d,{disabled:!0,id:"appointCouncil",name:"appointed_union_council",value:s.appointed_union_council,className:"mt-1 w-80",children:[e.jsx("option",{children:"Select Tehsil First"}),A.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(l,{message:n.appointed_union_council,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"appointFacility",value:"Duty Facility (Appointed)"}),e.jsxs(d,{disabled:!0,id:"appointFacility",name:"facility_id",value:s.facility_id,className:"mt-1 w-80",onChange:a=>{r("facility_id",a.target.value)},children:[e.jsx("option",{children:"Select Union Council First"}),S.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(l,{message:n.facility_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"appointcatchment",value:"Catchment Area (Appointed)"}),e.jsx(c,{disabled:!0,id:"appointcatchment",type:"text",name:"appointed_catchment_area",value:s.appointed_catchment_area,className:"mt-1 w-80",onChange:a=>r("appointed_catchment_area",a.target.value)}),e.jsx(l,{message:n.appointed_catchment_area,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"currentdistrict",value:"Duty District (Current)"}),e.jsxs(d,{disabled:!0,id:"currentdistrict",name:"current_district",value:s.current_district,className:"mt-1 w-80",children:[e.jsx("option",{children:"Select District"}),o.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(l,{message:n.current_district,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"currentTehsil",value:"Duty Tehsil (Current)"}),e.jsxs(d,{disabled:!0,id:"currentTehsil",name:"current_tehsil",value:s.current_tehsil,className:"mt-1 w-80",children:[e.jsx("option",{children:"Select District First"}),E.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(l,{message:n.current_tehsil,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"currentCouncil",value:"Duty Union Council (Current)"}),e.jsxs(d,{disabled:!0,id:"currentCouncil",name:"current_union_council",value:s.current_union_council,className:"mt-1 w-80",children:[e.jsx("option",{children:"Select Tehsil First"}),k.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(l,{message:n.current_union_council,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"currentFacility",value:"Duty Facility (Current)"}),e.jsxs(d,{disabled:!0,id:"currentFacility",name:"current_facility",value:s.current_facility,className:"mt-1 w-80",children:[e.jsx("option",{children:"Select Union Council First"}),T.map(a=>e.jsx("option",{value:a.id,children:a.title}))]}),e.jsx(l,{message:n.current_facility,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"reportingofficer",value:"Reporting Officer"}),e.jsxs(d,{disabled:!0,id:"reportingofficer",name:"reporting_officer",value:s.reporting_officer,className:"mt-1 w-80",onChange:a=>{r("reporting_officer",a.target.value)},children:[e.jsx("option",{children:"Select Officer"}),I.map(a=>e.jsx("option",{value:a.id,children:a.name}))]}),e.jsx(l,{message:n.current_district,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"currentcatchment",value:"Catchment Area (Current)"}),e.jsx(c,{disabled:!0,id:"currentcatchment",type:"text",name:"current_catchment_area",value:s.current_catchment_area,className:"mt-1 w-80",onChange:a=>r("current_catchment_area",a.target.value)}),e.jsx(l,{message:n.current_catchment_area,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{htmlFor:"verified",value:"Verified"}),e.jsxs(d,{disabled:!0,id:"verified",name:"verified",value:s.verified,className:"mt-1 w-80",onChange:a=>r("verified",a.target.value),children:[e.jsx("option",{children:"Select Status"}),e.jsx("option",{value:"No",children:"No"}),e.jsx("option",{value:"Yes",children:"Yes"})]}),e.jsx(l,{message:n.verified,className:"mt-2"})]})]})]})})})})}),e.jsx("div",{className:"py-1",children:e.jsx("div",{className:"w-full mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsxs("div",{className:" p-3",children:[e.jsx("h3",{className:"font-bold",children:"Attached Documents"}),e.jsx("hr",{}),C.map((a,u)=>e.jsxs("div",{children:[e.jsxs("span",{className:"mr-4",children:[u+1," : "]}),e.jsx("a",{href:a.file,target:"_blank",rel:"noopener noreferrer",children:a.document.replace(".pdf","")}),e.jsx("button",{className:"ml-4 text-red-500",onClick:Y=>{Y.preventDefault(),P(a.id)},children:"Delete Document"})]},u))]}),e.jsxs("div",{className:"p-1 text-gray-900 dark:text-gray-100",children:[e.jsxs("form",{action:"",onSubmit:U,className:"p-1 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg flex",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"file",value:"Select Documents"}),e.jsx("input",{type:"file",multiple:!0,onChange:a=>r("files",a.target.files),className:"mt-1 block w-full p-2"}),e.jsx(l,{message:n.files,className:"mt-2"})]}),e.jsx("div",{className:"mt-10 text-right ml-4",children:e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Add Document"})})]}),e.jsxs("div",{className:"mt-4 mr-3",children:[e.jsx(i,{value:"Biometric"}),e.jsx("img",{src:s.biometric,className:"h-40"})]})]})]})})})]})}export{le as default};
