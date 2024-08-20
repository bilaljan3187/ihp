import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

import React, { useState } from "react";

export default function ({ auth, districts, users }) {
    const [lhs, setLhs] = useState([]);
    const { data, setData, post, errors, reset, progress } = useForm({
        current_district: "",
        updated_by: "",
        updated_at: "",
        verified: "Yes",
        reporting_officer: "",
    });
    const lhsSet = async (e) => {
        const districtId = e.target.value;
        setData("current_district", districtId);

        if (districtId) {
            try {
                const response = await axios.get(
                    `/facility-employee/${districtId}`
                );

                setLhs(response.data);
            } catch (error) {
                console.error(
                    "There was an error fetching the employees!",
                    error
                );
            }
        } else {
            setLhs([]);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("report.search"));
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Reports
                    </h2>
                </div>
            }
        >
            <Head title="Reports" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form
                                action=""
                                onSubmit={onSubmit}
                                className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg flex flex-wrap"
                            >
                                {/* Start users */}
                                <div className="mt-4 mr-3">
                                    <InputLabel htmlFor="users" value="Users" />

                                    <SelectInput
                                        id="user"
                                        name="updated_by"
                                        value={data.updated_by}
                                        className="mt-1 w-80"
                                        onChange={(e) => {
                                            setData(
                                                "updated_by",
                                                e.target.value
                                            );
                                        }}
                                    >
                                        <option>Select User</option>
                                        {users.map((user, index) => (
                                            <option value={user.id} key={index}>
                                                {user.name}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.user}
                                        className="mt-2"
                                    />
                                </div>
                                {/* end user */}
                                {/* Start current district */}
                                <div className="mt-4 mr-3">
                                    <InputLabel
                                        htmlFor="district"
                                        value="District"
                                    />

                                    <SelectInput
                                        id="district"
                                        name="current_district"
                                        className="mt-1 w-80"
                                        onChange={lhsSet}
                                        value={data.current_district}
                                    >
                                        <option>Select District</option>
                                        {districts.map((district, index) => (
                                            <option
                                                value={district.id}
                                                key={index}
                                            >
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
                                {/* Start lhs */}
                                <div className="mt-4 mr-3">
                                    <InputLabel
                                        htmlFor="reporting_officer"
                                        value="Select LHS"
                                    />

                                    <SelectInput
                                        id="reporting_officer"
                                        name="reporting_officer"
                                        value={data.reporting_officer}
                                        className="mt-1 w-80"
                                        onChange={(e) =>
                                            setData(
                                                "reporting_officer",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option>Select LHS</option>
                                        {lhs.map((lhs, index) => (
                                            <option value={lhs.id} key={index}>
                                                {lhs.name}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.reporting_officer}
                                        className="mt-2"
                                    />
                                </div>
                                {/* end lhs*/}
                                {/* start date */}
                                <div className="mt-4 mr-3">
                                    <InputLabel htmlFor="date" value="Date" />
                                    <TextInput
                                        id="date"
                                        type="date"
                                        name="updated_at"
                                        value={data.updated_at}
                                        className="mt-1 w-80"
                                        onChange={(e) =>
                                            setData(
                                                "updated_at",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.updated_at}
                                        className="mt-2"
                                    />
                                </div>
                                {/* end date */}
                                {/* Start verified */}
                                <div className="mt-4 mr-3">
                                    <InputLabel
                                        htmlFor="verified"
                                        value="Verified"
                                    />

                                    <SelectInput
                                        required
                                        id="verified"
                                        name="verified"
                                        value={data.verified}
                                        className="mt-1 w-80"
                                        onChange={(e) => {
                                            setData("verified", e.target.value);
                                        }}
                                    >
                                        <option value={"Yes"}>Yes</option>
                                        <option value={"No"}>No</option>
                                    </SelectInput>
                                    <InputError
                                        message={errors.verified}
                                        className="mt-2"
                                    />
                                </div>
                                {/* end verified */}

                                <div className="mt-10 text-right">
                                    <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                        Generate Report
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
