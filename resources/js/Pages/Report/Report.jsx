import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";
import { HiMiniFingerPrint } from "react-icons/hi2";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { FaRegFilePdf } from "react-icons/fa";

export default function Report({
    auth,
    employees,
    queryParams = null,
    date,
    officers,
    operators,
    user,
    verified,
}) {
    queryParams = queryParams || {};
    function formatDate(datetimeString) {
        const date = new Date(datetimeString);
        const options = { year: "numeric", month: "numeric", day: "numeric" }; // Customize format as needed
        return date.toLocaleDateString("en-UK", options); // Replace 'en-US' with your locale
    }
    return (
        <>
            <Head title="Employees" />
            <div className="py-1">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-2 text-gray-900 dark:text-gray-100 text-center border-b-4">
                            <ApplicationLogo></ApplicationLogo>
                            <h2 className="font-bold text-lg ">
                                Integrated Health Project
                            </h2>
                            <h1 className="">
                                Integration of Health Services Delivery With
                                Special Focus On MNCH, LHW's and Nutrition
                                Program
                            </h1>
                            <h2 className="font-bold text-lg ">
                                GOVT. OF KHYBER PAKHTUNKHWA, PESHAWAR
                            </h2>
                            <p>
                                Phone: (Office):{" "}
                                <span className="italic underline px-2">
                                    091-9216344
                                </span>
                                Fax:{" "}
                                <span className="italic underline pr-2">
                                    091-9216346
                                </span>
                                Email:{" "}
                                <span className="italic underline">
                                    ihphealthkp@gmail.com
                                </span>
                            </p>

                            <p>
                                House No 13C/C Sifat ghayoor Road University
                                Town Peshawar
                            </p>
                            <h1 className="underline font-bold text-lg text-center">
                                {verified == "Yes"
                                    ? "Verified List of Employees "
                                    : "UnVerified List of Employees"}
                            </h1>
                        </div>

                        <table className="w-full text-sm teext-left rtl:text-right text-gray-500 dark:text-gray-400 mt-2">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                <tr className="text-nowrap border-t-2 ">
                                    <th
                                        scope="col"
                                        className="py-2 border-r-2 "
                                    >
                                        S.No
                                    </th>
                                    <th>Name</th>
                                    <th
                                        scope="col"
                                        className="py-2 border-r-2 "
                                    >
                                        father Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 border-r-2 "
                                    >
                                        husband Name
                                    </th>
                                    <th>CNIC</th>
                                    <th>DOB</th>
                                    <th>DOA</th>
                                    <th
                                        scope="col"
                                        className="py-2 border-r-2 "
                                    >
                                        Program
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 border-r-2 "
                                    >
                                        Designation
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 border-r-2 "
                                    >
                                        Domicile
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 border-r-2 "
                                    >
                                        Type
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 border-r-2 "
                                    >
                                        District
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 border-r-2 "
                                    >
                                        Tehsil
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 border-r-2 "
                                    >
                                        UC
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-2 border-r-2 "
                                    >
                                        Facility
                                    </th>

                                    {verified == "Yes" && (
                                        <>
                                            <th
                                                scope="col"
                                                className="py-2 border-r-2 "
                                            >
                                                Officer
                                            </th>
                                            <th>Verified By</th>
                                            <th>Verified On</th>
                                        </>
                                    )}
                                    <th
                                        scope="col"
                                        className="py-2 border-r-2 "
                                    ></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {employees.map((employee, i) => (
                                    <tr
                                        className="border-b  dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-400 hover:text-white"
                                        key={i}
                                    >
                                        <th className=" text-nowrap border-r-2 border-l-2">
                                            {i + 1}
                                        </th>

                                        <th className=" hover:underline  text-nowrap border-r-2 text-left pl-1">
                                            <Link
                                                href={route(
                                                    "employee.show",
                                                    employee.id
                                                )}
                                            >
                                                {employee.name}
                                            </Link>
                                        </th>
                                        <th className="py-2 border-r-2 text-nowrap text-left pl-1">
                                            {employee.father_name}
                                        </th>
                                        <th className="text-nowrap border-r-2 text-left pl-1">
                                            {employee.husband_name}
                                        </th>
                                        <th className="text-nowrap border-r-2 ">
                                            {employee.cnic}
                                        </th>
                                        <th className="text-nowrap border-r-2 ">
                                            {formatDate(employee.dob)}
                                        </th>
                                        <th className="text-nowrap border-r-2 ">
                                            {formatDate(employee.doa)}
                                        </th>
                                        <th className="text-nowrap border-r-2 ">
                                            {employee.program.title}
                                        </th>
                                        <th className="text-nowrap border-r-2 ">
                                            {employee.designation.title}
                                        </th>

                                        <th className="text-nowrap border-r-2 ">
                                            {employee.domicilee.title}
                                        </th>
                                        <th className="text-nowrap border-r-2 ">
                                            {employee.employee_typee.title}
                                        </th>
                                        <th className="text-nowrap border-r-2">
                                            {employee.district.title}
                                        </th>
                                        <th className="text-nowrap border-r-2">
                                            {employee.current_tehsill.title}
                                        </th>
                                        <th className="text-nowrap border-r-2">
                                            {
                                                employee.current_union_councill
                                                    .title
                                            }
                                        </th>
                                        <th className="text-nowrap border-r-2">
                                            {employee.current_facilityy.title}
                                        </th>
                                        {verified == "Yes" && (
                                            <>
                                                <th className="text-nowrap border-r-2">
                                                    {
                                                        employee
                                                            .reporting_officerr
                                                            .name
                                                    }
                                                </th>
                                                <th className="text-nowrap border-r-2">
                                                    {" "}
                                                    {employee.updated_byy.name}
                                                </th>
                                                <th className="text-nowrap border-r-2">
                                                    {formatDate(
                                                        employee.updated_at
                                                    )}
                                                </th>
                                            </>
                                        )}
                                        <th className="">
                                            <HiMiniFingerPrint
                                                size={24}
                                                color={
                                                    employee.is_biometric == 1
                                                        ? "green"
                                                        : "red"
                                                }
                                            />
                                        </th>
                                        <th>
                                            <FaRegFilePdf
                                                size={24}
                                                color={
                                                    employee.documents.length >
                                                    0
                                                        ? "green"
                                                        : "red"
                                                }
                                            />
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {verified == "Yes" && (
                            <>
                                <div className="mt-2 py-2  w-full block text-center">
                                    <h3 className="font-bold text-xl underline">
                                        Acknowlegement
                                    </h3>
                                    <h4 className="font-bold text-xl">
                                        All the above employees are verified
                                        under the supervision of the following
                                        LHS/LHS's
                                    </h4>
                                </div>
                                <div className="border-b-4">
                                    {officers.map((officer, index) => (
                                        <>
                                            <h1 className="font-bold text-lg block pt-7 border-b">
                                                {officer.reporting_officerr
                                                    ? officer.reporting_officerr
                                                          .name
                                                    : "Un Known Officer"}{" "}
                                                <span className="font-normal">
                                                    has verified {officer.total}{" "}
                                                    Employees
                                                </span>
                                            </h1>
                                        </>
                                    ))}
                                    <h1 className=" text-xl font-bold mt-3">
                                        Total Employees {employees.length}
                                    </h1>
                                </div>
                                <div className="border-b-4">
                                    <h2 className="text-center text-xl font-bold">
                                        IHP Representatives
                                    </h2>
                                    {operators.map((operator, index) => (
                                        <>
                                            <h1 className="font-bold text-lg block pt-7 border-b">
                                                {operator.updated_byy
                                                    ? operator.updated_byy.name
                                                    : "UnKnown Officer"}{" "}
                                                <span className="font-normal">
                                                    has verified{" "}
                                                    {operator.total} Employees
                                                </span>
                                            </h1>
                                        </>
                                    ))}

                                    <h1 className=" text-xl font-bold mt-3">
                                        Total Employees {employees.length}
                                    </h1>
                                    <h1 className="font-bold text-lg block pt-7 border-b">
                                        Deputy Director Operation Integrated
                                        Health Project{" "}
                                        <span className="underline italic">
                                            Dr. Muhammad Zarin
                                        </span>
                                    </h1>
                                </div>
                            </>
                        )}
                        {verified == "No" && (
                            <h1 className=" text-xl font-bold mt-3">
                                Total Unverified Employees {employees.length}
                            </h1>
                        )}

                        <div className="mt-4 flex justify-between">
                            <h1>
                                Report generated By {user} at{" "}
                                {new Date().toLocaleString()}
                            </h1>
                            <h1>
                                System Developed by{" "}
                                <span className="font-bold">
                                    Bilal Muhammad (IT Assistant)
                                </span>
                                <span> Integrated Health Project </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
