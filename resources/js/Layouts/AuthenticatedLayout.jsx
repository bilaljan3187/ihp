import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                    {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
                    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <Link href="/">
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                    </Link>
                                </div>

                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Dashboard
                                    </NavLink>
                                    <NavLink
                                        href={route("employee.index")}
                                        active={route().current(
                                            "employee.index"
                                        )}
                                    >
                                        Employees
                                    </NavLink>
                                    <NavLink
                                        href={route("employeetype.index")}
                                        active={route().current(
                                            "employeetype.index"
                                        )}
                                    >
                                        {" "}
                                        Employee Types
                                    </NavLink>
                                    <NavLink
                                        href={route("designation.index")}
                                        active={route().current(
                                            "designation.index"
                                        )}
                                    >
                                        {" "}
                                        Designations
                                    </NavLink>
                                    <NavLink
                                        href={route("qualification.index")}
                                        active={route().current(
                                            "qualification.index"
                                        )}
                                    >
                                        {" "}
                                        Qualifications
                                    </NavLink>
                                    <NavLink
                                        href={route("district.index")}
                                        active={route().current(
                                            "district.index"
                                        )}
                                    >
                                        {" "}
                                        Districts
                                    </NavLink>
                                    <NavLink
                                        href={route("tehsil.index")}
                                        active={route().current("tehsil.index")}
                                    >
                                        {" "}
                                        Tehsils
                                    </NavLink>
                                    <NavLink
                                        href={route("uc.index")}
                                        active={route().current("uc.index")}
                                    >
                                        {" "}
                                        UCs
                                    </NavLink>
                                    <NavLink
                                        href={route("facility.index")}
                                        active={route().current(
                                            "facility.index"
                                        )}
                                    >
                                        {" "}
                                        Facilities
                                    </NavLink>
                                    <NavLink
                                        href={route("facilitytype.index")}
                                        active={route().current(
                                            "facilitytype.index"
                                        )}
                                    >
                                        {" "}
                                        Facility Types
                                    </NavLink>
                                    <NavLink
                                        href={route("program.index")}
                                        active={route().current(
                                            "program.index"
                                        )}
                                    >
                                        {" "}
                                        Programs
                                    </NavLink>
                                    <NavLink
                                        href={route("year.index")}
                                        active={route().current("year.index")}
                                    >
                                        {" "}
                                        Years
                                    </NavLink>
                                    <NavLink
                                        href={route("users")}
                                        active={route().current("users")}
                                    >
                                        {" "}
                                        Users
                                    </NavLink>
                                    <NavLink
                                        href={route("usertype.index")}
                                        active={route().current(
                                            "usertype.index"
                                        )}
                                    >
                                        {" "}
                                        User types
                                    </NavLink>
                                </div>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("employee.index")}
                                active={route().current("employee.index")}
                            >
                                Employees
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("employeetype.index")}
                                active={route().current("employeetype.index")}
                            >
                                {" "}
                                Employee Types
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("designation.index")}
                                active={route().current("designation.index")}
                            >
                                {" "}
                                Designations
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("qualification.index")}
                                active={route().current("qualification.index")}
                            >
                                {" "}
                                Qualifications
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("district.index")}
                                active={route().current("district.index")}
                            >
                                {" "}
                                Districts
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("facility.index")}
                                active={route().current("facility.index")}
                            >
                                {" "}
                                Facilities
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("facilitytype.index")}
                                active={route().current("facilitytype.index")}
                            >
                                {" "}
                                Facility Types
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("program.index")}
                                active={route().current("program.index")}
                            >
                                {" "}
                                Programs
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("year.index")}
                                active={route().current("year.index")}
                            >
                                {" "}
                                Years
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("users")}
                                active={route().current("users")}
                            >
                                {" "}
                                Users
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("usertype.index")}
                                active={route().current("usertype.index")}
                            >
                                {" "}
                                User types
                            </ResponsiveNavLink>
                        </div>

                        <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                                    {user.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                {header && (
                    <header className="bg-white dark:bg-gray-800 shadow">
                        <div className=" mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
                <div className="overflow-hidden">
                    <div className=" mx-auto px-4 sm:px-6 md:px-8 flex">
                        {/* left slider */}
                        {/* <div className="hidden lg:block  z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10  overflow-y-auto">
                            <Navbar className="bg-white dark:bg-slate-900" />
                        </div> */}
                        {/* main section */}
                        <div className="w-full">
                            <main className="w-full pt-2 ">{children}</main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
