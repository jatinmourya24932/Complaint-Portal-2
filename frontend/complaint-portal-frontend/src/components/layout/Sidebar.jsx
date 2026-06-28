import { NavLink } from "react-router-dom";

export default function Sidebar() {

  const role = sessionStorage.getItem("role");

  return (

    <aside className="w-72 border-r border-white/10 bg-slate-950">

      <div className="border-b border-white/10 p-6">

        <h1 className="text-3xl font-bold text-white">

          ShadowSpeak

          <span className="text-violet-500"> 2.0</span>

        </h1>

        <p className="mt-2 text-sm text-gray-400">

          {role} PANEL

        </p>

      </div>

      <nav className="space-y-2 p-5">

        <NavLink
          to={`/${role.toLowerCase()}/dashboard`}
          className="block rounded-xl px-4 py-3 text-gray-300 transition hover:bg-violet-600 hover:text-white"
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/complaints"
          className="block rounded-xl px-4 py-3 text-gray-300 transition hover:bg-violet-600 hover:text-white"
        >
          📋 Complaints
        </NavLink>

        {
          role === "ADMIN" && (

            <NavLink
              to="/faculty"
              className="block rounded-xl px-4 py-3 text-gray-300 transition hover:bg-violet-600 hover:text-white"
            >
              👨‍🏫 Faculty Management
            </NavLink>

          )

        }

        {
          role === "ADMIN" && (

            <NavLink
              to="/analytics"
              className="block rounded-xl px-4 py-3 text-gray-300 transition hover:bg-violet-600 hover:text-white"
            >
              📈 Analytics
            </NavLink>

          )

        }

      </nav>

    </aside>

  );

}