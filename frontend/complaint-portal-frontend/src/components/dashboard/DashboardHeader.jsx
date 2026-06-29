import {
    FiLogOut,
    FiUser,
    FiCalendar
} from "react-icons/fi";

import { logout } from "../../utils/Logout";

export default function DashboardHeader({

    title

}) {

    const name = sessionStorage.getItem("name");

    const role = sessionStorage.getItem("role");

    const date = new Date().toLocaleDateString("en-IN",{

        day:"numeric",

        month:"long",

        year:"numeric"

    });

    return (

        <div className="mb-8 flex flex-col gap-5 rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl md:flex-row md:items-center md:justify-between">

            <div>

                <h1 className="text-4xl font-bold text-white">

                    {title}

                </h1>

                <p className="mt-2 flex flex-wrap items-center gap-5 text-slate-400">

                    <span className="flex items-center gap-2">

                        <FiUser />

                        {name}

                    </span>

                    <span className="rounded-full bg-violet-600/20 px-3 py-1 text-violet-300">

                        {role}

                    </span>

                    <span className="flex items-center gap-2">

                        <FiCalendar />

                        {date}

                    </span>

                </p>

            </div>

            <button

                onClick={logout}

                className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-rose-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"

            >

                <FiLogOut />

                Logout

            </button>

        </div>

    );

}