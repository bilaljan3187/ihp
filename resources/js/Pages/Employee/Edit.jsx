import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import React, { useState } from "react";

export default function Edit({
    auth,
    employee,
    employee_types,
    districts,
    afacilities,
    designations,
    qualifications,
    financials,
    programs,
    atehsils,
    aunion_councils,
    ctehsils,
    cunion_councils,
    cfacilities,
    officers,
}) {
    const [appointedfacilities, setAppointedfacilities] = useState(afacilities);
    const [appointtehsils, setAppointtehsils] = useState(atehsils);
    const [appointcouncils, setAppointcouncils] = useState(aunion_councils);
    const [currentfacilities, setCurrentfacilities] = useState(cfacilities);
    const [currenttehsils, setCurrenttehsils] = useState(ctehsils);
    const [currentcouncils, setCurrentcouncils] = useState(cunion_councils);
    const [cofficers, setCofficers] = useState(officers);
    const { data, setData, post, errors, reset, progress } = useForm({
        name: employee.data.name,
        father_name: employee.data.father_name,
        husband_name: employee.data.husband_name,
        gender: employee.data.gender,
        cnic: employee.data.cnic,
        program_id: employee.data.program.id,
        dob: employee.data.dob,
        domicile: employee.data.domicile.id,
        employee_type_id: employee.data.employee_type_id.id,
        qualification_id: employee.data.qualification.id,
        financial_year_id: employee.data.financial_year.id,
        contact_no: employee.data.contact_no,
        account_no: employee.data.account_no,
        address: employee.data.address,
        verified: employee.data.verified,

        designation_id: employee.data.designation.id,
        doa: employee.data.doa,
        doj: employee.data.doj,
        station: employee.data.station,
        district_id: employee.data.district.id, //appointed district
        appointed_tehsil: employee.data.appointed_tehsil.id,
        appointed_union_council: employee.data.appointed_union_council.id,
        facility_id: employee.data.facility.id, //appointed facility
        current_district: employee.data.current_district.id,
        current_tehsil: employee.data.current_tehsil.id,
        current_union_council: employee.data.current_union_council.id,
        current_facility: employee.data.current_facility.id,
        reporting_officer: employee.data.reporting_officer.id,
        appointed_catchment_area: employee.data.appointed_catchment_area,
        current_catchment_area: employee.data.current_catchment_area,
        remarks: employee.data.remarks,
        _method: "PUT",
    });

    const handleDistrictChange = async (e) => {
        setAppointcouncils([]); // reset union council list
        setAppointedfacilities([]); // reset union facilities list
        setData("appointed_tehsil", null);
        // alert(appointed_tehsil);
        setData("appointed_union_council", null);
        setData("facility_id", null);
        const districtId = e.target.value;
        setData("district_id", districtId);
        if (districtId) {
            try {
                const response = await axios.get(
                    `/districts-tehsils/${districtId}`
                );
                setAppointtehsils(response.data);
            } catch (error) {
                console.error(
                    "There was an error fetching the tehsils!",
                    error
                );
            }
        } else {
            setAppointtehsils([]);
        }
    };

    const handleTehsilChange = async (e) => {
        setAppointcouncils([]); // reset union council list
        const tehsilId = e.target.value;
        setData("appointed_tehsil", tehsilId);
        if (tehsilId) {
            try {
                const response = await axios.get(
                    `/tehsil-councils/${tehsilId}`
                );
                setAppointcouncils(response.data);
            } catch (error) {
                console.error(
                    "There was an error fetching the union councils!",
                    error
                );
            }
        } else {
            setAppointcouncils([]);
        }
    };

    const handleCouncilChange = async (e) => {
        const councilId = e.target.value;
        setData("appointed_union_council", councilId);
        if (councilId) {
            try {
                const response = await axios.get(
                    `/council-facilites/${councilId}`
                );
                setAppointedfacilities(response.data);
            } catch (error) {
                console.error(
                    "There was an error fetching the Facilities!",
                    error
                );
            }
        } else {
            setAppointedfacilities([]);
        }
    };
    // -----------------------------
    const handleCurrentDistrictChange = async (e) => {
        setCurrentcouncils([]); // reset union council list
        setCurrentfacilities([]); // reset union facilities list
        setCofficers([]); // reset officers list
        const districtId = e.target.value;
        setData("current_district", districtId);
        if (districtId) {
            try {
                const response = await axios.get(
                    `/districts-tehsils/${districtId}`
                );
                setCurrenttehsils(response.data);
            } catch (error) {
                console.error(
                    "There was an error fetching the tehsils!",
                    error
                );
            }
        } else {
            setCurrenttehsils([]);
        }
    };

    const handleCurrentTehsilChange = async (e) => {
        setCurrentcouncils([]); // reset union council list
        setCofficers([]); // reset officers list
        const tehsilId = e.target.value;
        setData("current_tehsil", tehsilId);
        if (tehsilId) {
            try {
                const response = await axios.get(
                    `/tehsil-councils/${tehsilId}`
                );
                setCurrentcouncils(response.data);
            } catch (error) {
                console.error(
                    "There was an error fetching the union councils!",
                    error
                );
            }
        } else {
            setCurrentcouncils([]);
        }
    };

    const handleCurrentCouncilChange = async (e) => {
        setCofficers([]); // reset officers list

        const councilId = e.target.value;
        setData("current_union_council", councilId);
        if (councilId) {
            try {
                const response = await axios.get(
                    `/council-facilites/${councilId}`
                );
                setCurrentfacilities(response.data);
            } catch (error) {
                console.error(
                    "There was an error fetching the Facilities!",
                    error
                );
            }
        } else {
            setCurrentfacilities([]);
        }
    };

    const handleCurrentFacilityChange = async (e) => {
        const facilityId = e.target.value;
        setData("current_facility", facilityId);
        if (facilityId) {
            try {
                const response = await axios.get(
                    `/facility-employee/${data.current_district}`
                );
                setCofficers(response.data);
            } catch (error) {
                console.error(
                    "There was an error fetching the employees!",
                    error
                );
            }
        } else {
            setCofficers([]);
        }
    };

    // -----------------------------
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("employee.update", employee.data.id));
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Create New Employee
                    </h2>
                </div>
            }
        >
            <Head title="Employees" />
            {/* {JSON.stringify(employee)} */}
            <div className="py-1">
                <div className=" mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 ">
                            <form
                                action=""
                                onSubmit={onSubmit}
                                className="p-4  bg-white dark:bg-gray-800 shadow sm:rounded-lg "
                            >
                                <h1 className="font-bold underline">
                                    Personal Information
                                </h1>
                                <div className="w-full flex flex-row flex-wrap">
                                    {/* start name */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="employee_name"
                                            value="Employee Name"
                                        />
                                        <TextInput
                                            id="employee_name"
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            className="mt-1 w-80"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end name */}
                                    {/* start father name */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="father_name"
                                            value="Father Name"
                                        />
                                        <TextInput
                                            id="father_name"
                                            type="text"
                                            name="father_name"
                                            value={data.father_name}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "father_name",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.father_name}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end father name */}

                                    {/* start husband name */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="husband_name"
                                            value="Husband Name"
                                        />
                                        <TextInput
                                            id="husband_name"
                                            type="text"
                                            name="husband_name"
                                            value={data.husband_name}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "husband_name",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.husband_name}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end husband name */}

                                    {/* start cnic */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="cnic"
                                            value="CNIC"
                                        />
                                        <TextInput
                                            id="cnic"
                                            type="text"
                                            name="cnic"
                                            value={data.cnic}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData("cnic", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.cnic}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end cnic */}

                                    {/* start gender */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="gender"
                                            value="Gender"
                                        />
                                        <SelectInput
                                            id="gender"
                                            name="gender"
                                            value={data.gender}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "gender",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option>Select Gender</option>
                                            <option value={"Male"}>Male</option>
                                            <option value={"Female"}>
                                                Female
                                            </option>
                                        </SelectInput>
                                        <InputError
                                            message={errors.gender}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end gender */}
                                    {/* start dob */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="dob"
                                            value="Date of Birth"
                                        />
                                        <TextInput
                                            id="dob"
                                            type="date"
                                            name="gender"
                                            value={data.dob}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData("dob", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.dob}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end dob */}
                                    {/* Start Domicile */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="domicile"
                                            value="Domicile"
                                        />

                                        <SelectInput
                                            id="domicile"
                                            name="domicile"
                                            value={data.domicile}
                                            className="mt-1 w-80"
                                            onChange={(e) => {
                                                setData(
                                                    "domicile",
                                                    e.target.value
                                                );
                                            }}
                                        >
                                            <option>Select District</option>
                                            {districts.map((district) => (
                                                <option value={district.id}>
                                                    {district.title}
                                                </option>
                                            ))}
                                        </SelectInput>
                                        <InputError
                                            message={errors.domicile}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end domicile */}

                                    {/* start qualification */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="qualification"
                                            value="Highest Qualification"
                                        />

                                        <SelectInput
                                            id="qualification"
                                            name="qualification_id"
                                            value={data.qualification_id}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "qualification_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option>
                                                Select Qualification
                                            </option>
                                            {qualifications.map(
                                                (qualification) => (
                                                    <option
                                                        value={qualification.id}
                                                    >
                                                        {qualification.title}
                                                    </option>
                                                )
                                            )}
                                        </SelectInput>
                                        <InputError
                                            message={errors.qualification_id}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end qualification */}

                                    {/* start financial year */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="financial_year"
                                            value="Financial year"
                                        />

                                        <SelectInput
                                            id="financial_year"
                                            name="financial_year_id"
                                            value={data.financial_year_id}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "financial_year_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option>
                                                Select Financial year
                                            </option>
                                            {financials.map((financial) => (
                                                <option value={financial.id}>
                                                    {financial.title}
                                                </option>
                                            ))}
                                        </SelectInput>
                                        <InputError
                                            message={errors.financial_year_id}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end financial year */}

                                    {/* start account no*/}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="account_no"
                                            value="Account No"
                                        />
                                        <TextInput
                                            id="account_no"
                                            type="text"
                                            name="account_no"
                                            value={data.account_no}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "account_no",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.account_no}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end account no */}
                                    {/* start contact no*/}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="contact_no"
                                            value="Contact No"
                                        />
                                        <TextInput
                                            id="contact_no"
                                            type="text"
                                            name="contact_no"
                                            value={data.contact_no}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "contact_no",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.contact_no}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end contact no */}
                                    {/* start address*/}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="address"
                                            value="Address"
                                        />
                                        <TextInput
                                            id="address"
                                            type="text"
                                            name="address"
                                            value={data.address}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "address",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.address}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end address */}
                                </div>
                                <h1 className="font-bold py-4 underline">
                                    Employement Information
                                </h1>
                                <div className="w-full flex flex-row flex-wrap">
                                    {/* Start Program */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="program"
                                            value="Program"
                                        />
                                        <SelectInput
                                            id="program"
                                            name="program_id"
                                            value={data.program_id}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "program_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option>Select Program</option>
                                            {programs.map((program) => (
                                                <option value={program.id}>
                                                    {program.title}
                                                </option>
                                            ))}
                                        </SelectInput>
                                        <InputError
                                            message={errors.program_id}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end program */}
                                    {/* start designation  */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="designation"
                                            value="Designation"
                                        />

                                        <SelectInput
                                            id="designation"
                                            name="designation_id"
                                            value={data.designation_id}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "designation_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option>Select Designation</option>
                                            {designations.map((designation) => (
                                                <option value={designation.id}>
                                                    {designation.title}
                                                </option>
                                            ))}
                                        </SelectInput>
                                        <InputError
                                            message={errors.designation_id}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end designation  */}
                                    {/* start employee type */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="employee_type"
                                            value="Employee Type"
                                        />

                                        <SelectInput
                                            id="employee_type"
                                            name="employee_type"
                                            value={data.employee_type_id}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "employee_type_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option>
                                                Select Employee Type
                                            </option>
                                            {employee_types.map(
                                                (employee_type) => (
                                                    <option
                                                        value={employee_type.id}
                                                    >
                                                        {employee_type.title}
                                                    </option>
                                                )
                                            )}
                                        </SelectInput>
                                        <InputError
                                            message={errors.employee_type_id}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end employee type */}

                                    {/* start duty station */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="station"
                                            value="Duty Station"
                                        />
                                        <SelectInput
                                            id="station"
                                            name="station"
                                            value={data.station}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "station",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option>Select Station</option>
                                            <option value={"Provincial"}>
                                                Provincial
                                            </option>
                                            <option value={"District"}>
                                                District
                                            </option>
                                        </SelectInput>
                                        <InputError
                                            message={errors.station}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end duty station */}
                                    {/* start doa */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="doa"
                                            value="Date of Appointment"
                                        />
                                        <TextInput
                                            id="doa"
                                            type="date"
                                            name="gender"
                                            value={data.doa}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData("doa", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.doa}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end doa */}

                                    {/* start doj */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="doj"
                                            value="Date of Joining"
                                        />
                                        <TextInput
                                            id="doj"
                                            type="date"
                                            name="doj"
                                            value={data.doj}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData("doj", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.doj}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end doj */}
                                    {/* start appointment district */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="district"
                                            value="Duty District (Appointed)"
                                        />

                                        <SelectInput
                                            id="district"
                                            name="district_id"
                                            value={data.district_id}
                                            className="mt-1 w-80"
                                            onChange={handleDistrictChange}
                                        >
                                            <option>Select District</option>
                                            {districts.map((district) => (
                                                <option value={district.id}>
                                                    {district.title}
                                                </option>
                                            ))}
                                        </SelectInput>
                                        <InputError
                                            message={errors.district_id}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end appointment district */}
                                    {/* start appointment tehsil */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="appointTehsil"
                                            value="Duty Tehsil (Appointed)"
                                        />

                                        <SelectInput
                                            id="appointTehsil"
                                            name="appointed_tehsil"
                                            value={data.appointed_tehsil}
                                            className="mt-1 w-80"
                                            onChange={handleTehsilChange}
                                        >
                                            <option>
                                                Select District First
                                            </option>
                                            {appointtehsils.map((tehsil) => (
                                                <option
                                                    value={tehsil.id}
                                                    key={tehsil.id}
                                                >
                                                    {tehsil.title}
                                                </option>
                                            ))}
                                        </SelectInput>
                                        <InputError
                                            message={errors.appointed_tehsil}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end appointment tehsil */}
                                    {/* start appointment union council */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="appointCouncil"
                                            value="Duty Union Council (Appointed)"
                                        />

                                        <SelectInput
                                            id="appointCouncil"
                                            name="appointed_union_council"
                                            value={data.appointed_union_council}
                                            className="mt-1 w-80"
                                            onChange={handleCouncilChange}
                                        >
                                            <option>Select Tehsil First</option>
                                            {appointcouncils.map((council) => (
                                                <option value={council.id}>
                                                    {council.title}
                                                </option>
                                            ))}
                                        </SelectInput>
                                        <InputError
                                            message={
                                                errors.appointed_union_council
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end appointment union council */}

                                    {/* start appointment facility */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="appointFacility"
                                            value="Duty Facility (Appointed)"
                                        />

                                        <SelectInput
                                            id="appointFacility"
                                            name="facility_id"
                                            value={data.facility_id}
                                            className="mt-1 w-80"
                                            onChange={(e) => {
                                                setData(
                                                    "facility_id",
                                                    e.target.value
                                                );
                                            }}
                                        >
                                            <option>
                                                Select Union Council First
                                            </option>
                                            {appointedfacilities.map(
                                                (facility) => (
                                                    <option value={facility.id}>
                                                        {facility.title}
                                                    </option>
                                                )
                                            )}
                                        </SelectInput>
                                        <InputError
                                            message={errors.facility_id}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end appointment facility */}
                                    {/* start catchment*/}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="appointcatchment"
                                            value="Catchment Area (Appointed)"
                                        />
                                        <TextInput
                                            id="appointcatchment"
                                            type="text"
                                            name="appointed_catchment_area"
                                            value={
                                                data.appointed_catchment_area
                                            }
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "appointed_catchment_area",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={
                                                errors.appointed_catchment_area
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end catchment */}

                                    {/* ------------------------------------------ */}

                                    {/* start current district */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="currentdistrict"
                                            value="Duty District (Current)"
                                        />

                                        <SelectInput
                                            id="currentdistrict"
                                            name="current_district"
                                            value={data.current_district}
                                            className="mt-1 w-80"
                                            onChange={
                                                handleCurrentDistrictChange
                                            }
                                        >
                                            <option>Select District</option>
                                            {districts.map((district) => (
                                                <option value={district.id}>
                                                    {district.title}
                                                </option>
                                            ))}
                                        </SelectInput>
                                        <InputError
                                            message={errors.current_district}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end current district */}
                                    {/* start current tehsil */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="currentTehsil"
                                            value="Duty Tehsil (Current)"
                                        />

                                        <SelectInput
                                            id="currentTehsil"
                                            name="current_tehsil"
                                            value={data.current_tehsil}
                                            className="mt-1 w-80"
                                            onChange={handleCurrentTehsilChange}
                                        >
                                            <option>
                                                Select District First
                                            </option>
                                            {currenttehsils.map((tehsil) => (
                                                <option value={tehsil.id}>
                                                    {tehsil.title}
                                                </option>
                                            ))}
                                        </SelectInput>
                                        <InputError
                                            message={errors.current_tehsil}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end current tehsil */}
                                    {/* start current union council */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="currentCouncil"
                                            value="Duty Union Council (Current)"
                                        />

                                        <SelectInput
                                            id="currentCouncil"
                                            name="current_union_council"
                                            value={data.current_union_council}
                                            className="mt-1 w-80"
                                            onChange={
                                                handleCurrentCouncilChange
                                            }
                                        >
                                            <option>Select Tehsil First</option>
                                            {currentcouncils.map((council) => (
                                                <option value={council.id}>
                                                    {council.title}
                                                </option>
                                            ))}
                                        </SelectInput>
                                        <InputError
                                            message={
                                                errors.current_union_council
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end current union council */}

                                    {/* start current facility */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="currentFacility"
                                            value="Duty Facility (Current)"
                                        />

                                        <SelectInput
                                            id="currentFacility"
                                            name="current_facility"
                                            value={data.current_facility}
                                            className="mt-1 w-80"
                                            onChange={
                                                handleCurrentFacilityChange
                                            }
                                        >
                                            <option>
                                                Select Union Council First
                                            </option>
                                            {currentfacilities.map(
                                                (facility) => (
                                                    <option value={facility.id}>
                                                        {facility.title}
                                                    </option>
                                                )
                                            )}
                                        </SelectInput>
                                        <InputError
                                            message={errors.current_facility}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end current facility */}
                                    {/* start current reporting officer */}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="reportingofficer"
                                            value="Reporting Officer"
                                        />

                                        <SelectInput
                                            id="reportingofficer"
                                            name="reporting_officer"
                                            value={data.reporting_officer}
                                            className="mt-1 w-80"
                                            onChange={(e) => {
                                                setData(
                                                    "reporting_officer",
                                                    e.target.value
                                                );
                                            }}
                                        >
                                            <option>Select Officer</option>
                                            {cofficers.map((officer) => (
                                                <option value={officer.id}>
                                                    {officer.name}
                                                </option>
                                            ))}
                                        </SelectInput>
                                        <InputError
                                            message={errors.current_district}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end current reporting officer */}
                                    {/* start catchment*/}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="currentcatchment"
                                            value="Catchment Area (Current)"
                                        />
                                        <TextInput
                                            id="currentcatchment"
                                            type="text"
                                            name="current_catchment_area"
                                            value={data.current_catchment_area}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "current_catchment_area",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={
                                                errors.current_catchment_area
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end catchment */}
                                    {/* start remarks*/}
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="remarks"
                                            value="Remarks"
                                        />
                                        <textarea
                                            className="mt-1 w-80 h-40"
                                            id="remarks"
                                            name="remarks"
                                            onChange={(e) =>
                                                setData(
                                                    "remarks",
                                                    e.target.value
                                                )
                                            }
                                            value={data.remarks}
                                        />

                                        <InputError
                                            message={errors.remarks}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* end remarks */}
                                    {/* verififed start */}

                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="verified"
                                            value="Verified"
                                        />
                                        <SelectInput
                                            id="verified"
                                            name="verified"
                                            value={data.verified}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "verified",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option>Select Status</option>

                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </SelectInput>
                                        <InputError
                                            message={errors.verified}
                                            className="mt-2"
                                        />
                                    </div>
                                    {/* verified ends */}

                                    <div className="mt-9 text-right">
                                        <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                            Update Employee
                                        </button>
                                        <Link
                                            href={route("employee.index")}
                                            className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                        >
                                            Cancel
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
