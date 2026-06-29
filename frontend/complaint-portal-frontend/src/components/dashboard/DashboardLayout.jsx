
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";

import ComplaintTable from "../complaints/ComplaintTable";
import ComplaintDetailsModal from "../complaints/ComplaintDetailModal";
import { useMemo, useState } from "react";
import DashboardFilters from "./DashboardFilters";

export default function DashboardLayout({

    title,

    complaints,

    showActions

}) {

    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("ALL");

const [categoryFilter,setCategoryFilter]=useState("ALL");

const [priorityFilter,setPriorityFilter]=useState("ALL");
const filteredComplaints = useMemo(() => {

    return complaints.filter((complaint) => {

        const matchesSearch =
            complaint.trackingId
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            complaint.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "ALL" ||

            complaint.status === statusFilter;

       const matchesCategory =

categoryFilter==="ALL" ||

complaint.category===categoryFilter;

const matchesPriority =

priorityFilter==="ALL" ||

complaint.priority===priorityFilter;

return matchesSearch &&
       matchesStatus &&
       matchesCategory &&
       matchesPriority;

    });

}, [complaints, search, statusFilter]);

    return (

        <div className="min-h-screen bg-slate-900 p-8">

            <DashboardHeader

                title={title}

            /><DashboardFilters

    search={search}
    setSearch={setSearch}

    statusFilter={statusFilter}
    setStatusFilter={setStatusFilter}

    categoryFilter={categoryFilter}
    setCategoryFilter={setCategoryFilter}

    priorityFilter={priorityFilter}
    setPriorityFilter={setPriorityFilter}

/>
            
            <div className="mb-6 flex flex-col gap-4 md:flex-row">

    <input

        type="text"

        placeholder="Search Tracking ID / Title"

        value={search}

        onChange={(e) => setSearch(e.target.value)}

        className="flex-1 rounded-xl bg-slate-800 p-3 text-white outline-none"

    />

    <select

        value={statusFilter}

        onChange={(e) =>

            setStatusFilter(e.target.value)

        }

        className="rounded-xl bg-slate-800 p-3 text-white"

    >

        <option value="ALL">All</option>

        <option value="SUBMITTED">Submitted</option>

        <option value="IN_PROGRESS">In Progress</option>

        <option value="RESOLVED">Resolved</option>

        <option value="REJECTED">Rejected</option>

    </select>

</div>

            <DashboardStats

               complaints={filteredComplaints}

            />

            <div className="overflow-hidden rounded-2xl bg-slate-800">

                <ComplaintTable

                   complaints={filteredComplaints}

                    onView={setSelectedComplaint}

                />

            </div>

            {

                selectedComplaint && (

                    <ComplaintDetailsModal

                        complaint={selectedComplaint}

                        onClose={() =>

                            setSelectedComplaint(null)

                        }

                        showActions={showActions}

                    />

                )

            }

        </div>

    );

}