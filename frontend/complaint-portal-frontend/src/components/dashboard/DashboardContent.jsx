import { useMemo, useState } from "react";

import DashboardStats from "./DashboardStats";
import DashboardFilters from "./DashboardFilters";

import ComplaintTable from "../complaints/ComplaintTable";
import ComplaintDetailsModal from "../complaints/ComplaintDetailModal";

export default function DashboardContent({

    complaints,

    showActions

}) {

    const [selectedComplaint, setSelectedComplaint] = useState(null);

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] = useState("ALL");

    const [categoryFilter, setCategoryFilter] = useState("ALL");

    const [priorityFilter, setPriorityFilter] = useState("ALL");

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

                categoryFilter === "ALL" ||

                complaint.category === categoryFilter;

            const matchesPriority =

                priorityFilter === "ALL" ||

                complaint.priority === priorityFilter;

            return (

                matchesSearch &&

                matchesStatus &&

                matchesCategory &&

                matchesPriority

            );

        });

    }, [

        complaints,

        search,

        statusFilter,

        categoryFilter,

        priorityFilter

    ]);

    return (

        <>

            <DashboardFilters

                search={search}
                setSearch={setSearch}

                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}

                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}

                priorityFilter={priorityFilter}
                setPriorityFilter={setPriorityFilter}

            />

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

        </>

    );

}