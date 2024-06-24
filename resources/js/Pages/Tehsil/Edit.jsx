import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, tehsil, districts }) {
    const { data, setData, post, errors, reset, progress } = useForm({
        title: tehsil.title,
        district_id: tehsil.district_id,
        _method: "PUT",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("tehsil.update", tehsil.id));
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Update Tehsil
                    </h2>
                </div>
            }
        >
            <Head title="Tehsil" />
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
                                        htmlFor="tehsil_title"
                                        value="Tehsil Title"
                                    />
                                    <TextInput
                                        id="tehsil_title"
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
                                        onChange={(e) =>
                                            setData(
                                                "district_id",
                                                e.target.value
                                            )
                                        }
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

                                <div
                                    href={route("tehsil.index")}
                                    className="mt-4 text-right"
                                >
                                    <Link className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
                                        Cancel
                                    </Link>
                                    <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                        Update Tehsil
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
