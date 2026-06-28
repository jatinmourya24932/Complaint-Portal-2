import { useNavigate } from "react-router-dom";

export default function Topbar() {

  const navigate = useNavigate();

  const logout = () => {

    sessionStorage.clear();

    navigate("/login");

  };

  return (

    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-slate-950 px-8">

      <div>

        <h2 className="text-2xl font-bold text-white">

          Dashboard

        </h2>

      </div>

      <div className="flex items-center gap-5">

        <div className="text-right">

          <p className="font-semibold text-white">

            {sessionStorage.getItem("name")}

          </p>

          <p className="text-sm text-gray-400">

            {sessionStorage.getItem("email")}

          </p>

        </div>

        <button
          onClick={logout}
          className="rounded-xl bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
        >
          Logout
        </button>

      </div>

    </header>

  );

}