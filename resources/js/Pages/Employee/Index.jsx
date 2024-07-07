import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";
import { HiMiniFingerPrint } from "react-icons/hi2";

export default function ({
    auth,
    employees,
    queryParams = null,
    success,
    currentPage,
    pageSize,
}) {
    queryParams = queryParams || {};
    // console.log(queryParams.status)
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route("employee.index"), queryParams);
    };
    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;
        searchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name == queryParams.sort_field) {
            if (queryParams.sort_direction == "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("employee.index"), queryParams);
    };

    const deleteProject = (employee) => {
        if (!window.confirm("Are You sure to Delete")) {
            return;
        }
        router.delete(route("employee.destroy", employee.id));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Employees
                    </h2>
                    <Link
                        href={route("employee.create")}
                        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Add New
                    </Link>
                </div>
            }
        >
            <Head title="Employees" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8">
                    {success && (
                        <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
                            {success}
                        </div>
                    )}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Employees
                        </div>
                        <table className="w-full text-sm teext-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                <tr className="text-nowrap">
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left"
                                    >
                                        S.No
                                    </th>

                                    <TableHeading
                                        sort_field={queryParams.sort_field}
                                        sort_direction={
                                            queryParams.sort_direction
                                        }
                                        name="name"
                                        sortChanged={sortChanged}
                                    >
                                        Name
                                    </TableHeading>

                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left"
                                    >
                                        father Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left"
                                    >
                                        husband Name
                                    </th>
                                    <TableHeading
                                        sort_field={queryParams.sort_field}
                                        sort_direction={
                                            queryParams.sort_direction
                                        }
                                        name="cnic"
                                        sortChanged={sortChanged}
                                    >
                                        Cnic
                                    </TableHeading>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left"
                                    >
                                        Program
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left"
                                    >
                                        District
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left"
                                    >
                                        Designation
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left"
                                    >
                                        Verified
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left"
                                    ></th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                <tr className="text-nowrap">
                                    <th scope="col" className="px-3 py-3"></th>

                                    <th scope="col" className="px-3 py-3">
                                        <TextInput
                                            className="w-full"
                                            placeholder="Employee Name"
                                            defaultValue={queryParams.name}
                                            onBlur={(e) =>
                                                searchFieldChanged(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                            onKeyPress={(e) =>
                                                onKeyPress("name", e)
                                            }
                                        />
                                    </th>

                                    <th scope="col" className="px-3 py-3"></th>
                                    <th scope="col" className="px-3 py-3"></th>
                                    <th scope="col" className="px-3 py-3">
                                        <TextInput
                                            className="w-full"
                                            placeholder="Employee CNIC"
                                            defaultValue={queryParams.cnic}
                                            onBlur={(e) =>
                                                searchFieldChanged(
                                                    "cnic",
                                                    e.target.value
                                                )
                                            }
                                            onKeyPress={(e) =>
                                                onKeyPress("cnic", e)
                                            }
                                        />
                                    </th>
                                    <th scope="col" className="px-3 py-3"></th>
                                    <th scope="col" className="px-3 py-3"></th>
                                    <th scope="col" className="px-3 py-3"></th>
                                    <th scope="col" className="px-3 py-3"></th>
                                    <th scope="col" className="px-3 py-3"></th>
                                    <th scope="col" className="px-3 py-3"></th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-right"
                                    ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.data.map((employee, i) => (
                                    <tr
                                        className={` border-b dark:bg-gray-800 dark:border-gray-700 ${
                                            employee.verified === "Yes"
                                                ? "bg-green-200"
                                                : "bg-red-200"
                                        }`}
                                        key={i}
                                    >
                                        <td className="px-3 py-2">
                                            {i +
                                                (currentPage - 1) * pageSize +
                                                1}
                                        </td>

                                        <th className="px-3 py-2 hover:underline  text-nowrap text-left">
                                            <Link
                                                href={route(
                                                    "employee.show",
                                                    employee.id
                                                )}
                                            >
                                                {employee.name}
                                            </Link>
                                        </th>
                                        <th className="px-3 py-2   text-nowrap text-left">
                                            {employee.father_name}
                                        </th>
                                        <th className="px-3 py-2   text-nowrap text-left">
                                            {employee.husband_name}
                                        </th>
                                        <th className="px-3 py-2   text-nowrap text-left">
                                            {employee.cnic}
                                        </th>
                                        <th className="px-3 py-2   text-nowrap text-left">
                                            {employee.program.title}
                                        </th>

                                        <td className="px-3 py-2">
                                            {employee.district.title}
                                        </td>
                                        <td className="px-3 py-2">
                                            {employee.designation.title}
                                        </td>
                                        <td className="px-3 py-2">
                                            {employee.status}
                                        </td>
                                        <td className="px-3 py-2">
                                            <sapn
                                                className={
                                                    "" + employee.verified ==
                                                    "Yes"
                                                        ? "text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 p-2 dark:text-green-400 border border-green-400 bg-green-100 text-green-800"
                                                        : "text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 p-2 dark:text-red-400 border border-red-400 bg-red-100 text-red-800"
                                                }
                                            >
                                                {" "}
                                                {employee.verified}
                                            </sapn>
                                        </td>
                                        <td className="px-3 py-2">
                                            <a
                                                href={route(
                                                    "biometric.index",
                                                    employee.id
                                                )}
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                            >
                                                <HiMiniFingerPrint
                                                    size={24}
                                                    color={
                                                        employee.biometric
                                                            ? "green"
                                                            : "red"
                                                    }
                                                />
                                            </a>
                                        </td>
                                        <td className="px-3 py-2">
                                            <Link
                                                href={route(
                                                    "employee.edit",
                                                    employee.id
                                                )}
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={(e) =>
                                                    deleteProject(employee.id)
                                                }
                                                className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination links={employees.meta.links}></Pagination>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
