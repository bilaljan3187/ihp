import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

export default function Create({ auth, success, attendance }) {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const [error, setError] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setData("type", e.target.value);
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    setData({
                        ...data,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);

    const { data, setData, post, errors, reset, progress } = useForm({
        latitude: "",
        longitude: "",
        type: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("att.store"));
        data.type = "";
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Mark Attendance
                    </h2>
                </div>
            }
        >
            <Head title="Attendance" />

            <div className="py-12">
                {/* {JSON.stringify(attendance)} */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (
                        <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
                            {success}
                        </div>
                    )}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form
                                action=""
                                onSubmit={onSubmit}
                                className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg flex justify-center"
                            >
                                {attendance.length >= 1 ? (
                                    ""
                                ) : (
                                    <div className="mt-4 mr-4 flex px-2">
                                        <InputLabel
                                            htmlFor="check_in"
                                            value="Check In"
                                            className="mr-2"
                                        />
                                        <TextInput
                                            id="in"
                                            type="radio"
                                            checked={selectedOption === "in"}
                                            className="mt-1 "
                                            value="in"
                                            onChange={handleOptionChange}
                                        />
                                    </div>
                                )}
                                {attendance.length == 2 ? (
                                    ""
                                ) : (
                                    <div className="mt-4 flex  ">
                                        <InputLabel
                                            htmlFor="check_in"
                                            value="Check Out"
                                            className="mr-2"
                                        />
                                        <TextInput
                                            id="out"
                                            type="radio"
                                            checked={selectedOption === "out"}
                                            className="mt-1 px-2"
                                            value="out"
                                            onChange={handleOptionChange}
                                        />
                                    </div>
                                )}
                                <InputError
                                    message={errors.type}
                                    className="mt-2"
                                />
                                {attendance.length == 2 ? (
                                    <h1 className="font-bold">
                                        You have Submitted Today Attendance
                                    </h1>
                                ) : (
                                    <div>
                                        <button className="ml-3 bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                            Mark Attendance
                                        </button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {attendance.length > 0 ? (
                    <div>
                        <h3>Today Attendance Record</h3>
                        <div>
                            {attendance.map((a, index) => (
                                <p className="font-bold">
                                    You Have checked {a.type} at {a.time}
                                </p>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="font-bold ">
                        You Have't checked in or Checked Out today
                    </p>
                )}
            </div>
            <hr />
            <div>
                <h3>Current Location</h3>
                {error ? (
                    <p>Error: {error}</p>
                ) : (
                    <div>
                        <p>Latitude: {latitude}</p>
                        <p>Longitude: {longitude}</p>
                    </div>
                )}
            </div>
        </Authenticated>
    );
}
