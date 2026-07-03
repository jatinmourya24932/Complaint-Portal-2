import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardStats from "../../components/dashboard/DashboardStats";
import ComplaintTable from "../../components/complaints/ComplaintTable";

import { getComplaintsByStudent } from "../../services/ComplaintService";

export default function StudentDashboard() {

    const navigate = useNavigate();

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {

        loadComplaints();

    }, []);

    async function loadComplaints() {

        try {

            const userId = sessionStorage.getItem("id");

            const data = await getComplaintsByStudent(userId);

            setComplaints(data);

        }

        catch (error) {

            console.log(error);

        }

    }

    const recentComplaints = complaints.slice(0,5);

    return (

        <div className="space-y-8">

            <div className="rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600 p-8">

                <h1 className="text-4xl font-bold text-white">

                    Welcome,

                    {" "}

                    {sessionStorage.getItem("name")}

                    👋

                </h1>

                <p className="mt-3 text-slate-200">

                    Raise complaints, track progress and stay updated.

                </p>

                <div className="mt-8 flex gap-4">

                    <button

                        onClick={() =>

                            navigate("/student/create-complaint")

                        }

                        className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900"

                    >

                        + Create Complaint

                    </button>

                    <button

                        onClick={() =>

                            navigate("/student/my-complaints")

                        }

                        className="rounded-xl border border-white px-6 py-3 font-semibold text-white"

                    >

                        View All

                    </button>

                </div>

            </div>

            <DashboardStats

                complaints={complaints}

            />

            <div className="rounded-3xl bg-slate-900 p-6">

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-2xl font-bold text-white">

                        Recent Complaints

                    </h2>

                    <button

                        onClick={() =>

                            navigate("/student/my-complaints")

                        }

                        className="text-cyan-400"

                    >

                        View All →

                    </button>

                </div>

                <ComplaintTable

                    complaints={recentComplaints}

                    onView={() => {}}

                />

            </div>

        </div>

    );

}