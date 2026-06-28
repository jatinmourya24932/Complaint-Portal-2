import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-slate-950">

      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">

        <Topbar />

        <main className="flex-1 overflow-y-auto bg-slate-900 p-6">

          <Outlet />

        </main>

      </div>

    </div>
  );
}