import { FiBell, FiCalendar, FiChevronDown } from "react-icons/fi";

export default function DashboardHeader({ title }) {

    const name = sessionStorage.getItem("name");

    const date = new Date().toLocaleDateString("en-IN", {

        day: "numeric",
        month: "long",
        year: "numeric"

    });

    return (

        <div className="mb-8 flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-900 px-8 py-6">

            <div>

                <h1 className="text-4xl font-bold text-white">

                    {title}

                </h1>

                <div className="mt-3 flex items-center gap-3 text-slate-400">

                    <FiCalendar />

                    {date}

                </div>

            </div>

            <div className="flex items-center gap-5">

                <button className="relative rounded-2xl bg-slate-800 p-3 transition hover:bg-slate-700">

                    <FiBell className="text-xl text-white" />

                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

                </button>

                <div className="flex items-center gap-5">

    <button className="relative rounded-2xl bg-slate-800 p-3 transition hover:bg-slate-700">

        <FiBell className="text-xl text-white" />

        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

    </button>

</div>

            </div>

        </div>

    );

}