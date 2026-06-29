export default function DashboardFilters({

    search,
    setSearch,

    statusFilter,
    setStatusFilter,

    categoryFilter,
    setCategoryFilter,

    priorityFilter,
    setPriorityFilter

}) {

    return (

        <div className="mb-6 flex flex-wrap gap-4">

            <input

                type="text"

                placeholder="Search Tracking ID / Title"

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

                className="flex-1 rounded-xl bg-slate-800 p-3 text-white"

            />

            <select

                value={statusFilter}

                onChange={(e)=>setStatusFilter(e.target.value)}

                className="rounded-xl bg-slate-800 p-3 text-white"

            >

                <option value="ALL">All Status</option>
                <option value="SUBMITTED">Submitted</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="RESOLVED">Resolved</option>
                <option value="REJECTED">Rejected</option>

            </select>

            <select

                value={categoryFilter}

                onChange={(e)=>setCategoryFilter(e.target.value)}

                className="rounded-xl bg-slate-800 p-3 text-white"

            >

                <option value="ALL">All Category</option>
                <option value="FACULTY">Faculty</option>
                <option value="INFRASTRUCTURE">Infrastructure</option>
                <option value="LIBRARY">Library</option>
                <option value="TRANSPORT">Transport</option>

            </select>

            <select

                value={priorityFilter}

                onChange={(e)=>setPriorityFilter(e.target.value)}

                className="rounded-xl bg-slate-800 p-3 text-white"

            >

                <option value="ALL">All Priority</option>
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>

            </select>

        </div>

    );

}