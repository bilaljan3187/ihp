import Progress from "@/Components/Progress";
import Statistic from "@/Components/Statistic";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({
    auth,
    employeeCounts,
    totalEmployees,
    verifiedEmployees,
    districtData,
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg flex flex-auto justify-between  p-3 m-2">
                <Statistic
                    title="Total Employees"
                    value={totalEmployees}
                    message="Over all Employees"
                />

                {employeeCounts.map((count) => (
                    <Statistic
                        title={count.title}
                        value={count.total}
                        message="Employees"
                    />
                ))}
            </div>
            <div className="flex justify-center bg-white p-7 m-2">
                <Progress
                    value={Math.round(
                        (verifiedEmployees / totalEmployees) * 100
                    )}
                    verified_ratio={
                        verifiedEmployees + " Out Of " + totalEmployees
                    }
                    district={"Over All Verifications"}
                />
            </div>

            <div className="flex justify-between flex-wrap bg-white p-7 m-2">
                {districtData.map((data, i) => (
                    <Progress
                        key={i}
                        value={
                            isNaN(
                                Math.round(
                                    (data.verified_employees /
                                        data.total_employees) *
                                        100
                                )
                            )
                                ? 0
                                : Math.round(
                                      (data.verified_employees /
                                          data.total_employees) *
                                          100
                                  )
                        }
                        verified_ratio={
                            data.verified_employees +
                            " Out Of " +
                            data.total_employees
                        }
                        district={data.district_name}
                    />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
