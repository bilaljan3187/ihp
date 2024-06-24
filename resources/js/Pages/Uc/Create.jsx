import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Create({ auth, districts }) {
    const { data, setData, post, errors, reset, progress } = useForm({
        title: "",
        district_id: "",
        tehsil_id: "",
    });

    const [tehsils, setTehsils] = useState([]);
    const handleDistrictChange = async (e) => {
        setTehsils([]); // reset tehsil list

        const districtId = e.target.value;
        setData("district_id", districtId);
        if (districtId) {
            try {
                const response = await axios.get(
                    `/districts-tehsils/${districtId}`
                );
                setTehsils(response.data);
            } catch (error) {
                console.error(
                    "There was an error fetching the tehsils!",
                    error
                );
            }
        } else {
            setTehsils([]);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("unioncouncil.store"));
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Create New Unioncouncil
                    </h2>
                </div>
            }
        >
            <Head title="Union Council" />
            <div className="py-12">
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
                                        htmlFor="unioncouncil_title"
                                        value="Union Council Title"
                                    />
                                    <TextInput
                                        id="unioncouncil_title"
                                        type="text"
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
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="district"
                                        value="District"
                                    />
                                    <SelectInput
                                        id="district"
                                        name="district_id"
                                        value={data.district_id}
                                        className="mt-1 block w-full"
                                        onChange={handleDistrictChange}
                                    >
                                        <option>Select District</option>
                                        {districts.map((district) => (
                                            <option
                                                key={district.id}
                                                value={district.id}
                                            >
                                                {district.title}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.district_id}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="tehsil"
                                        value="Tehsil"
                                    />
                                    <SelectInput
                                        id="tehsil"
                                        name="tehsil_id"
                                        value={data.tehsil_id}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("tehsil_id", e.target.value)
                                        }
                                    >
                                        <option>Select District</option>
                                        {tehsils.map((tehsil) => (
                                            <option
                                                key={tehsil.id}
                                                value={tehsil.id}
                                            >
                                                {tehsil.title}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.tehsil_id}
                                        className="mt-2"
                                    />
                                </div>

                                <div
                                    href={route("unioncouncil.index")}
                                    className="mt-4 text-right"
                                >
                                    <Link
                                        href={route("unioncouncil.index")}
                                        className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                    >
                                        Cancel
                                    </Link>
                                    <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                        Add Unioncouncil
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
