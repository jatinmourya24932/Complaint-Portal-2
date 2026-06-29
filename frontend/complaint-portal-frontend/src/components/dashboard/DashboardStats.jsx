import {
    FiClipboard,
    FiClock,
    FiLoader,
    FiCheckCircle
} from "react-icons/fi";

export default function DashboardStats({

    complaints

}) {

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

        <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <Card

                title="Total Complaints"

                value={total}

                icon={<FiClipboard size={28}/>}

                color="from-slate-700 to-slate-900"

            />

            <Card

                title="Pending"

                value={pending}

                icon={<FiClock size={28}/>}

                color="from-yellow-500 to-orange-600"

            />

            <Card

                title="In Progress"

                value={progress}

                icon={<FiLoader size={28}/>}

                color="from-blue-500 to-cyan-600"

            />

            <Card

                title="Resolved"

                value={resolved}

                icon={<FiCheckCircle size={28}/>}

                color="from-green-500 to-emerald-700"

            />

        </div>

    );

}

function Card({

    title,

    value,

    color,

    icon

}) {

    return (

        <div

            className={`group overflow-hidden rounded-3xl bg-gradient-to-br ${color} p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}

        >

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm font-medium text-white/80">

                        {title}

                    </p>

                    <h2 className="mt-4 text-5xl font-extrabold text-white">

                        {value}

                    </h2>

                </div>

                <div

                    className="rounded-2xl bg-white/10 p-4 transition-all duration-300 group-hover:scale-110"

                >

                    {icon}

                </div>

            </div>

        </div>

    );

}