import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStudentComplaints } from "../../services/ComplaintService";

export default function StudentDashboard() {

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {

        loadComplaints();

    }, []);

    const loadComplaints = async () => {

        try {

            const userId = sessionStorage.getItem("id");

            const data = await getStudentComplaints(userId);

            setComplaints(data);

        } catch (error) {

            console.log(error);

        }

    };

    const total = complaints.length;

    const pending = complaints.filter(
        c => c.status === "SUBMITTED"
    ).length;

    const progress = complaints.filter(
        c => c.status === "IN_PROGRESS"
    ).length;

    const resolved = complaints.filter(
        c => c.status === "RESOLVED"
    ).length;

    return (

        <div className="min-h-screen bg-slate-900 p-8">

            <h1 className="mb-8 text-4xl font-bold text-white">

                Welcome,
                {" "}
                {sessionStorage.getItem("name")}

            </h1>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">

                <div className="rounded-2xl bg-slate-800 p-6">

                    <h2 className="text-gray-400">

                        Total

                    </h2>

                    <p className="mt-2 text-4xl font-bold text-white">

                        {total}

                    </p>

                </div>

                <div className="rounded-2xl bg-yellow-600 p-6">

                    <h2>

                        Pending

                    </h2>

                    <p className="mt-2 text-4xl font-bold">

                        {pending}

                    </p>

                </div>

                <div className="rounded-2xl bg-blue-600 p-6">

                    <h2>

                        In Progress

                    </h2>

                    <p className="mt-2 text-4xl font-bold">

                        {progress}

                    </p>

                </div>

                <div className="rounded-2xl bg-green-600 p-6">

                    <h2>

                        Resolved

                    </h2>

                    <p className="mt-2 text-4xl font-bold">

                        {resolved}

                    </p>

                </div>

            </div>

            <div className="mb-6 flex justify-end">

                <Link

                    to="/student/create-complaint"

                    className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white"

                >

                    + Register Complaint

                </Link>

            </div>

            <div className="overflow-hidden rounded-2xl bg-slate-800">

                <table className="w-full">

                    <thead className="bg-slate-700">

                        <tr>

                            <th className="p-4 text-left">

                                Title

                            </th>

                            <th className="p-4 text-left">

                                Priority

                            </th>

                            <th className="p-4 text-left">

                                Status

                            </th>

                            <th className="p-4 text-left">

                                Date

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            complaints.length === 0 ?

                                (

                                    <tr>

                                        <td
                                            colSpan="4"
                                            className="p-8 text-center text-gray-400">

                                            No Complaints Found

                                        </td>

                                    </tr>

                                )

                                :

                                complaints.map((complaint) => (

                                    <tr
                                        key={complaint.id}
                                        className="border-t border-slate-700">

                                        <td className="p-4 text-white">

                                            {complaint.title}

                                        </td>

                                        <td className="p-4 text-white">

                                            {complaint.priority}

                                        </td>

                                        <td className="p-4 text-white">

                                            {complaint.status}

                                        </td>

                                        <td className="p-4 text-white">

                                            {

                                                complaint.createdAt?.substring(0,10)

                                            }

                                        </td>

                                    </tr>

                                ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}