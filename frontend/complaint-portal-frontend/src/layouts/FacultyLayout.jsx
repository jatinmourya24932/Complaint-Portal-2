import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";

export default function FacultyLayout() {

    return (

        <div className="flex min-h-screen bg-slate-950">

            <Sidebar role="FACULTY" />

            <div className="flex-1 overflow-y-auto p-8">

                <DashboardHeader title="Faculty Dashboard" />

                <Outlet />

            </div>

        </div>

    );

}