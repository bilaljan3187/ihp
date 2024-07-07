import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Edit({
    auth,
    facility,
    facilitytypes,
    districts,
    tehsils,
    unioncouncils,
}) {
    const { data, setData, post, errors, reset, progress } = useForm({
        title: facility.title,
        district_id: facility.district_id,
        facility_type: facility.facility_type,
        tehsil: facility.tehsil,
        union_council: facility.union_council,
        _method: "PUT",
    });
    const [appointtehsils, setAppointtehsils] = useState(tehsils);
    const [appointcouncils, setAppointcouncils] = useState(unioncouncils);
    const handleDistrictChange = async (e) => {
        setAppointcouncils([]); // reset union council list
        setAppointtehsils([]);
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
        setData("tehsil", tehsilId);
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
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("facility.update", facility.id));
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Edit Facility
                    </h2>
                </div>
            }
        >
            <Head title="Edit Facility" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form
                                action=""
                                onSubmit={onSubmit}
                                className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg flex flex-wrap"
                            >
                                <div className="mt-4 mr-3">
                                    <InputLabel
                                        htmlFor="facility_title"
                                        value="Facility Title"
                                    />
                                    <TextInput
                                        id="facility_title"
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 w-80"
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
                                <div className="mt-4 mr-3">
                                    <InputLabel
                                        htmlFor="facilitytype"
                                        value="Facility Type"
                                    />
                                    <SelectInput
                                        id="facilitytype"
                                        name="facility_type"
                                        value={data.facility_type}
                                        className="mt-1 w-80"
                                        onChange={(e) =>
                                            setData(
                                                "facility_type",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option>Select Facility Type</option>
                                        {facilitytypes.map((facilitytype) => (
                                            <option
                                                key={facilitytype.id}
                                                value={facilitytype.id}
                                            >
                                                {facilitytype.title}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.facility_type}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4 mr-3">
                                    <InputLabel
                                        htmlFor="district"
                                        value="District"
                                    />
                                    <SelectInput
                                        id="district_id"
                                        type="text"
                                        name="district_id"
                                        value={data.district_id}
                                        className="mt-1 w-80"
                                        onChange={handleDistrictChange}
                                    >
                                        <option>Select District</option>
                                        {districts.map((district) => (
                                            <option
                                                key={district.key}
                                                value={district.id}
                                            >
                                                {district.title}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.district}
                                        className="mt-2"
                                    />
                                </div>

                                {/* start  tehsil */}
                                <div className="mt-4 mr-3">
                                    <InputLabel
                                        htmlFor="tehsil"
                                        value="Tehsil "
                                    />

                                    <SelectInput
                                        id="tehsil"
                                        name="tehsil"
                                        value={data.tehsil}
                                        className="mt-1 w-80"
                                        onChange={handleTehsilChange}
                                    >
                                        <option>Select District First</option>
                                        {appointtehsils.map((tehsil) => (
                                            <option value={tehsil.id}>
                                                {tehsil.title}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.tehsil}
                                        className="mt-2"
                                    />
                                </div>
                                {/* end  tehsil */}
                                {/* start  union council */}
                                <div className="mt-4 mr-3">
                                    <InputLabel
                                        htmlFor="unioncouncil"
                                        value="Union Council"
                                    />

                                    <SelectInput
                                        id="unioncouncil"
                                        name="union_council"
                                        value={data.union_council}
                                        className="mt-1 w-80"
                                        onChange={(e) => {
                                            setData(
                                                "union_council",
                                                e.target.value
                                            );
                                        }}
                                    >
                                        <option>Select Tehsil First</option>
                                        {appointcouncils.map((council, i) => (
                                            <option value={council.id} key={i}>
                                                {council.title}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.union_council}
                                        className="mt-2"
                                    />
                                </div>

                                <div
                                    href={route("facility.index")}
                                    className="mt-9 text-right"
                                >
                                    <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                        Update Facility
                                    </button>
                                    <Link
                                        href={route("facility.index")}
                                        className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
