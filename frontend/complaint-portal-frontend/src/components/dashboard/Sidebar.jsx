
import { NavLink } from "react-router-dom";

import { logout } from "../../utils/Logout";
import { sidebarConfig } from "../../config/sidebarConfig";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { useSidebar } from "../../context/SidebarContext";

export default function Sidebar({ role }) {

    const menu = sidebarConfig[role] || [];

    const name = sessionStorage.getItem("name");
    const { collapsed, toggleSidebar } = useSidebar();

    return (

        <aside className={`sticky top-0 flex h-screen

${collapsed ? "w-24" : "w-72"}

flex-col border-r border-slate-800 bg-[#050816]

transition-all duration-300`}>

            {/* Logo */}

           <div className="border-b border-slate-800 p-5">

    <div className="mb-6 flex items-center justify-between">

        {

            !collapsed && (

                <div>

                    <h1 className="text-3xl font-black text-white">

                        Complaint Portal

                    </h1>

                    <p className="text-sm text-slate-500">

                        Student Complaint System

                    </p>

                </div>

            )

        }

        <button

            onClick={toggleSidebar}

            className="rounded-xl bg-slate-800 p-2 hover:bg-slate-700"

        >

            <FiMenu className="text-xl text-white"/>

        </button>

    </div>

    {

        !collapsed && (

            <div className="flex items-center gap-4">

                ...

                // Tera current user profile code yahin rahega

            </div>

        )

    }

</div>

            {/* User */}

            <div className="border-b border-slate-800 px-7 py-6">

                <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-xl font-bold text-white shadow-lg">

                        {name?.charAt(0).toUpperCase()}

                    </div>

                    <div>

                        <h3 className="font-semibold text-white">

                            {name}

                        </h3>

                        <div className="mt-1 flex items-center gap-2">

                            <span className="h-2 w-2 rounded-full bg-green-400"></span>

                            <span className="text-sm text-slate-400">

                                {role}

                            </span>

                        </div>

                    </div>

                </div>

            </div>

            {/* Navigation */}

            <div className="flex-1 space-y-2 px-4 py-6">

                {

                    menu.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink

                                key={item.title}

                                to={item.path}

                                className={({ isActive }) =>

                                    `group flex items-center gap-4 rounded-2xl px-5 py-4 font-medium transition-all duration-300

                                    ${

                                        isActive

                                            ? "border-l-4 border-cyan-400 bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-xl shadow-cyan-500/20"

                                            : "text-slate-300 hover:bg-slate-800 hover:text-white"

                                    }`

                                }

                            >

                                <Icon

                                    size={20}

                                    className="transition group-hover:scale-110"

                                />

                                {

    !collapsed && (

        <span>

            {item.title}

        </span>

    )

}

                            </NavLink>

                        );

                    })

                }

            </div>

            {/* Footer */}

            <div className="border-t border-slate-800 p-5">

                <button

                    onClick={logout}

                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-500 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-red-500/20 active:scale-95"

                >

                    <FiLogOut size={18} />

                    {

    !collapsed && "Logout"

}

                </button>

            </div>

        </aside>

    );

}