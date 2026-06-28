import { useEffect, useState } from "react";
import { getAllComplaints } from "../../services/ComplaintService";

export default function AdminDashboard() {

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {

        loadComplaints();

    }, []);

    const loadComplaints = async () => {

        try {

            const data = await getAllComplaints();

            setComplaints(data);

        }

        catch (error) {

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

                Admin Dashboard

            </h1>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">

                <div className="rounded-2xl bg-slate-800 p-6">

                    <h3 className="text-gray-400">

                        Total Complaints

                    </h3>

                    <p className="mt-3 text-4xl font-bold text-white">

                        {total}

                    </p>

                </div>

                <div className="rounded-2xl bg-yellow-600 p-6">

                    <h3>

                        Pending

                    </h3>

                    <p className="mt-3 text-4xl font-bold">

                        {pending}

                    </p>

                </div>

                <div className="rounded-2xl bg-blue-600 p-6">

                    <h3>

                        In Progress

                    </h3>

                    <p className="mt-3 text-4xl font-bold">

                        {progress}

                    </p>

                </div>

                <div className="rounded-2xl bg-green-600 p-6">

                    <h3>

                        Resolved

                    </h3>

                    <p className="mt-3 text-4xl font-bold">

                        {resolved}

                    </p>

                </div>

            </div>

            <div className="overflow-hidden rounded-2xl bg-slate-800">

                <table className="w-full">

                    <thead className="bg-slate-700">

                        <tr>

                            <th className="p-4 text-left">

                                Tracking ID

                            </th>

                            <th className="p-4 text-left">

                                Title

                            </th>

                            <th className="p-4 text-left">

                                Category

                            </th>

                            <th className="p-4 text-left">

                                Priority

                            </th>

                            <th className="p-4 text-left">

                                Status

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            complaints.length===0 ?

                            (

                                <tr>

                                    <td

                                        colSpan="5"

                                        className="p-8 text-center text-gray-400"

                                    >

                                        No Complaints Found

                                    </td>

                                </tr>

                            )

                            :

                            complaints.map((complaint)=>(

                                <tr

                                    key={complaint.id}

                                    className="border-t border-slate-700"

                                >

                                    <td className="p-4 text-white">

                                        {complaint.trackingId}

                                    </td>

                                    <td className="p-4 text-white">

                                        {complaint.title}

                                    </td>

                                    <td className="p-4 text-white">

                                        {complaint.category}

                                    </td>

                                    <td className="p-4 text-white">

                                        {complaint.priority}

                                    </td>

                                    <td className="p-4 text-green-400">

                                        {complaint.status}

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