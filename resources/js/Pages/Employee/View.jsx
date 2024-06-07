import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Create({
    auth,
    employee,
    employee_types,
    districts,
    facilities,
    designations,
    qualifications,
    financials,
    programs,
}) {
    // const [facilities, setFacilities] = useState([]);
    const { data, setData, post, errors, reset, progress } = useForm({
        name: employee.data.name,
        father_name: employee.data.father_name,
        husband_name: employee.data.husband_name,
        gender: employee.data.gender,
        doa: employee.data.doa,
        doj: employee.data.doj,
        cnic: employee.data.cnic,
        station: employee.data.station,
        employee_type_id: employee.data.employee_type_id.id,
        facility_id: employee.data.facility.id,
        district_id: employee.data.district.id,
        designation_id: employee.data.designation.id,
        qualification_id: employee.data.qualification.id,
        financial_year_id: employee.data.financial_year.id,
        program_id: employee.data.program.id,
        _method: "PUT",
    });

    const handleDistrictChange = async (e) => {
        const districtId = e.target.value;

        setData("district_id", districtId);
        //alert(district_id);
        if (districtId) {
            try {
                const response = await axios.get(
                    `/districts-facilities/${districtId}`
                );

                setData("facilities", response.data);
                console.log(e.target.value);
                // setFacilities(response.data);
            } catch (error) {
                console.error(
                    "There was an error fetching the facilities!",
                    error
                );
            }
        } else {
            setData("facilities", []);
            // setFacilities([]);
        }
    };

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
                        View Employee
                    </h2>
                </div>
            }
        >
            <Head title="Employee" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form
                                action=""
                                onSubmit={onSubmit}
                                className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                            >
                                <div className="w-full flex flex-row flex-wrap">
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="employee_name"
                                            value="Employee Name"
                                        />
                                        <TextInput
                                            disabled
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
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="father_name"
                                            value="Father Name"
                                        />

                                        <TextInput
                                            disabled
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

                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="husband_name"
                                            value="Husband Name"
                                        />
                                        <TextInput
                                            disabled
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

                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="cnic"
                                            value="CNIC"
                                        />
                                        <TextInput
                                            disabled
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

                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="gender"
                                            value="Gender"
                                        />
                                        <SelectInput
                                            disabled
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
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="doa"
                                            value="Date of Appointment"
                                        />
                                        <TextInput
                                            disabled
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
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="doj"
                                            value="Date of Joining"
                                        />
                                        <TextInput
                                            disabled
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
                                            message={errors.doa}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="program"
                                            value="Program"
                                        />
                                        <SelectInput
                                            disabled
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

                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="station"
                                            value="Duty Station"
                                        />
                                        <SelectInput
                                            disabled
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
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="employee_type"
                                            value="Employee Type"
                                        />

                                        <SelectInput
                                            disabled
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
                                                        key={employee_type.id}
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
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="district"
                                            value="District"
                                        />

                                        <SelectInput
                                            disabled
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

                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="facility"
                                            value="Facility"
                                        />

                                        <SelectInput
                                            disabled
                                            id="facility"
                                            name="facility_id"
                                            value={data.facility_id}
                                            className="mt-1 w-80"
                                            onChange={(e) =>
                                                setData(
                                                    "facility_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option>
                                                Select District First
                                            </option>
                                            {facilities.map((facility) => (
                                                <option value={facility.id}>
                                                    {facility.title}
                                                </option>
                                            ))}
                                        </SelectInput>
                                        <InputError
                                            message={errors.facility_id}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="designation"
                                            value="Designation"
                                        />

                                        <SelectInput
                                            disabled
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
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="qualification"
                                            value="Highest Qualification"
                                        />

                                        <SelectInput
                                            disabled
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
                                    <div className="mt-4 mr-3">
                                        <InputLabel
                                            htmlFor="financial_year"
                                            value="Financial year"
                                        />

                                        <SelectInput
                                            disabled
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

                                    {/* <div className="mt-9 text-right">
                                        <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                            Update Program
                                        </button>

                                        <Link
                                            href={route("employee.index")}
                                            className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                        >
                                            Cancel
                                        </Link>
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form
                                action=""
                                onSubmit={onSubmit}
                                className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                            >
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="facilitytype_title"
                                        value="Facility Title"
                                    />
                                    <TextInput
                                        id="facilitytype_title"
                                        type="file"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
