import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

export default function ({ auth, unioncouncils, queryParams = null, success }) {
    queryParams = queryParams || {};
    // console.log(queryParams.status)
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route("unioncouncil.index"), queryParams);
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
        router.get(route("unioncouncil.index"), queryParams);
    };

    const deleteUnioncouncil = (unioncouncil) => {
        if (!window.confirm("Are You sure to Delete")) {
            return;
        }
        router.delete(route("unioncouncil.destroy", unioncouncil.id));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Union Councils
                    </h2>
                    <Link
                        href={route("unioncouncil.create")}
                        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Add New
                    </Link>
                </div>
            }
        >
            <Head title="Unioncouncil" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8">
                    {success && (
                        <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
                            {success}
                        </div>
                    )}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Union Councils
                        </div>
                        <table className="w-full text-sm teext-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                <tr className="text-nowrap">
                                    <TableHeading
                                        sort_field={queryParams.sort_field}
                                        sort_direction={
                                            queryParams.sort_direction
                                        }
                                        name="id"
                                        sortChanged={sortChanged}
                                    >
                                        ID
                                    </TableHeading>

                                    <TableHeading
                                        sort_field={queryParams.sort_field}
                                        sort_direction={
                                            queryParams.sort_direction
                                        }
                                        name="title"
                                        sortChanged={sortChanged}
                                    >
                                        Title
                                    </TableHeading>

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
                                        Tehsil
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left"
                                    >
                                        Created By
                                    </th>
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
                                            placeholder="Unioncouncil"
                                            defaultValue={queryParams.title}
                                            onBlur={(e) =>
                                                searchFieldChanged(
                                                    "title",
                                                    e.target.value
                                                )
                                            }
                                            onKeyPress={(e) =>
                                                onKeyPress("title", e)
                                            }
                                        />
                                    </th>

                                    <th scope="col" className="px-3 py-3"></th>
                                    <th scope="col" className="px-3 py-3"></th>
                                    <th scope="col" className="px-3 py-3"></th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-right"
                                    ></th>
                                </tr>
                            </thead>
                            {/* {JSON.stringify(unioncouncils)} */}
                            <tbody>
                                {unioncouncils.data.map((unioncouncil) => (
                                    <tr
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
                                        key={unioncouncil.id}
                                    >
                                        <td className="px-3 py-2">
                                            {unioncouncil.id}
                                        </td>

                                        <th className="px-3 py-2 hover:underline  text-nowrap text-left">
                                            {unioncouncil.title}
                                        </th>

                                        <td className="px-3 py-2">
                                            {unioncouncil.district.title}
                                        </td>
                                        <td className="px-3 py-2">
                                            {unioncouncil.tehsil.title}
                                        </td>
                                        <td className="px-3 py-2">
                                            {unioncouncil.createdBy.name}
                                        </td>
                                        <td className="px-3 py-2">
                                            <Link
                                                href={route(
                                                    "unioncouncil.edit",
                                                    unioncouncil.id
                                                )}
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={(e) =>
                                                    deleteUnioncouncil(
                                                        unioncouncil
                                                    )
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
                        <Pagination
                            links={unioncouncils.meta.links}
                        ></Pagination>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
