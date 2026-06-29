import { useState } from "react";

export default function ComplaintTable({

    complaints,

    onView

}) {

    const [loadingId, setLoadingId] = useState(null);

    const handleView = async (complaint) => {

        setLoadingId(complaint.id);

        try {

            await onView(complaint);

        }

        finally {

            setLoadingId(null);

        }

    };

    const getStatusClass = (status) => {

        switch (status) {

            case "RESOLVED":

                return "bg-green-600 text-white";

            case "IN_PROGRESS":

                return "bg-yellow-500 text-black";

            case "REJECTED":

                return "bg-red-600 text-white";

            default:

                return "bg-blue-600 text-white";

        }

    };

    const getPriorityClass = (priority) => {

        switch (priority) {

            case "HIGH":

                return "bg-red-600 text-white";

            case "MEDIUM":

                return "bg-orange-500 text-white";

            default:

                return "bg-green-600 text-white";

        }

    };

    return (

        <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">

            <table className="w-full">

                <thead className="sticky top-0 bg-slate-800 text-slate-200">

                    <tr>

                        <th className="px-6 py-4 text-left font-semibold">

                            Tracking ID

                        </th>

                        <th className="px-6 py-4 text-left font-semibold">

                            Title

                        </th>

                        <th className="px-6 py-4 text-left font-semibold">

                            Category

                        </th>

                        <th className="px-6 py-4 text-center font-semibold">

                            Priority

                        </th>

                        <th className="px-6 py-4 text-center font-semibold">

                            Status

                        </th>

                        <th className="px-6 py-4 text-center font-semibold">

                            Action

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        complaints.length===0

                        ?

                        (

                            <tr>

                                <td

                                    colSpan={6}

                                    className="py-16 text-center text-slate-400"

                                >

                                    <div className="text-5xl">

                                        📭

                                    </div>

                                    <p className="mt-4 text-lg">

                                        No Complaints Found

                                    </p>

                                </td>

                            </tr>

                        )

                        :

                        complaints.map((complaint,index)=>(

                            <tr

                                key={complaint.id}

                                className={`

                                border-t border-slate-700

                                transition-all duration-300

                                hover:bg-slate-800/80

                                ${

                                    index%2===0

                                    ?

                                    "bg-slate-900"

                                    :

                                    "bg-slate-800/40"

                                }

                                `}

                            >

                                <td className="px-6 py-5 font-mono text-cyan-400">

                                    {complaint.trackingId}

                                </td>

                                <td className="px-6 py-5 font-medium text-white">

                                    {complaint.title}

                                </td>

                                <td className="px-6 py-5 text-slate-300">

                                    {complaint.category}

                                </td>

                                <td className="px-6 py-5 text-center">

                                    <span

                                        className={`rounded-full px-4 py-2 text-xs font-bold ${getPriorityClass(complaint.priority)}`}

                                    >

                                        {complaint.priority}

                                    </span>

                                </td>

                                <td className="px-6 py-5 text-center">

                                    <span

                                        className={`rounded-full px-4 py-2 text-xs font-bold ${getStatusClass(complaint.status)}`}

                                    >

                                        {complaint.status}

                                    </span>

                                </td>

                                <td className="px-6 py-5">

                                    <div className="flex justify-center">

                                        <button

                                            disabled={loadingId===complaint.id}

                                            onClick={()=>handleView(complaint)}

                                            className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-60"

                                        >

                                            {

                                                loadingId===complaint.id

                                                ?

                                                "Loading..."

                                                :

                                                "View"

                                            }

                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}