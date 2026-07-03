import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";

export default function AdminLayout() {

    return (

        <div className="flex min-h-screen bg-slate-950">

            <Sidebar role="ADMIN" />

            <div className="flex-1 overflow-y-auto p-8">

                <DashboardHeader title="Admin Dashboard" />

                <Outlet />

            </div>

        </div>

    );

}