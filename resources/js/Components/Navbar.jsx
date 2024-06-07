// Sidebar.js

import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import ResponsiveNavLink from "./ResponsiveNavLink";
// import { Link } from '@inertiajs/inertia-react';

const Navbar = () => {
    return (
        // <!-- drawer component -->
        <>
            <nav
                id="nav"
                className="lg:text-sm border lg:leading-6   bg-white dark:bg-slate-900 px-3 h-screen [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                <div className="sticky top-0 -ml-0.5 pointer-events-none">
                    <div className="h-10 bg-white dark:bg-slate-900"></div>
                </div>

                <ul className="menu bg-base-200 w-56 rounded-box">
                    <li>
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            {" "}
                            Dashboard
                        </ResponsiveNavLink>
                    </li>
                    <li>
                        <details close>
                            <summary>Employees</summary>
                            <ul>
                                <li>
                                    <ResponsiveNavLink
                                        href={route("employee.index")}
                                        active={route().current(
                                            "employee.index"
                                        )}
                                    >
                                        {" "}
                                        Employees
                                    </ResponsiveNavLink>
                                </li>

                                <li>
                                    <ResponsiveNavLink
                                        href={route("designation.index")}
                                        active={route().current(
                                            "designation.index"
                                        )}
                                    >
                                        {" "}
                                        Designations
                                    </ResponsiveNavLink>
                                </li>
                                <li>
                                    <ResponsiveNavLink
                                        href={route("qualification.index")}
                                        active={route().current(
                                            "qualification.index"
                                        )}
                                    >
                                        {" "}
                                        Qualifications
                                    </ResponsiveNavLink>
                                </li>
                                <li>
                                    <ResponsiveNavLink
                                        href={route("employeetype.index")}
                                        active={route().current(
                                            "employeetype.index"
                                        )}
                                    >
                                        {" "}
                                        Employee Types
                                    </ResponsiveNavLink>
                                </li>
                                {/* <li>
                                    <ResponsiveNavLink
                                        href={route("dashboard")}
                                    >
                                        {" "}
                                        Document Types
                                    </ResponsiveNavLink>
                                </li>
                                <li>
                                    <ResponsiveNavLink
                                        href={route("dashboard")}
                                    >
                                        {" "}
                                        Duty Station Type
                                    </ResponsiveNavLink>
                                </li> */}
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details close>
                            <summary>Location Settings</summary>
                            <ul>
                                <li>
                                    <ResponsiveNavLink
                                        href={route("district.index")}
                                        active={route().current(
                                            "district.index"
                                        )}
                                    >
                                        {" "}
                                        Districts
                                    </ResponsiveNavLink>
                                </li>
                                {/* <li>
                                    <ResponsiveNavLink
                                        href={route("dashboard")}
                                    >
                                        {" "}
                                        Tehsils
                                    </ResponsiveNavLink>
                                </li>
                                <li>
                                    <ResponsiveNavLink
                                        href={route("dashboard")}
                                    >
                                        {" "}
                                        Union councils
                                    </ResponsiveNavLink>
                                </li> */}
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details close>
                            <summary>Facility Settings</summary>
                            <ul>
                                <li>
                                    <ResponsiveNavLink
                                        href={route("facility.index")}
                                        active={route().current(
                                            "facility.index"
                                        )}
                                    >
                                        {" "}
                                        Facilities
                                    </ResponsiveNavLink>
                                </li>
                                <li>
                                    <ResponsiveNavLink
                                        href={route("facilitytype.index")}
                                        active={route().current(
                                            "facilitytype.index"
                                        )}
                                    >
                                        {" "}
                                        Facility types
                                    </ResponsiveNavLink>
                                </li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details close>
                            <summary>General Settings</summary>
                            <ul>
                                <li>
                                    <ResponsiveNavLink
                                        href={route("program.index")}
                                        active={route().current(
                                            "program.index"
                                        )}
                                    >
                                        {" "}
                                        Programs
                                    </ResponsiveNavLink>
                                </li>
                                <li>
                                    <ResponsiveNavLink
                                        href={route("year.index")}
                                        active={
                                            route().current("year.index") ||
                                            route().current("year.create")
                                        }
                                    >
                                        {" "}
                                        Financial Years
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        href={route("usertype.index")}
                                        active={
                                            route().current("usertype.index") ||
                                            route().current("usertype.create")
                                        }
                                    >
                                        {" "}
                                        User Types
                                    </ResponsiveNavLink>

                                    <ResponsiveNavLink
                                        href={route("users")}
                                        active={route().current("users")}
                                    >
                                        {" "}
                                        Users
                                    </ResponsiveNavLink>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
