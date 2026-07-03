import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import TrackComplaint from "../pages/TrackComplaint";

import ProtectedRoute from "./ProtectedRoute";

import AdminDashboard from "../pages/admin/AdminDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import HodDashboard from "../pages/hod/HodDashboard";
import Register from "../pages/Register";
import CreateComplaint from "../pages/student/CreateComplaint";
import StudentLayout from "../layouts/StudentLayout";
import FacultyLayout from "../layouts/FacultyLayout";
import HodLayout from "../layouts/HodLayout";
import AdminLayout from "../layouts/AdminLayout";
import MyComplaints from "../pages/student/MyComplaints";
import FacultyManagement from "../pages/admin/FacultyManagement";

import { Outlet } from "react-router-dom";

export default function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/track"
                    element={<TrackComplaint />}
                />
                    
                <Route
    element={
        <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminLayout />
        </ProtectedRoute>
    }
>

    <Route

        path="/admin/dashboard"

        element={<AdminDashboard />}

    />
    <Route

    path="/admin/faculty"

    element={<FacultyManagement />}

/>

</Route>

               <Route
    element={
        <ProtectedRoute allowedRoles={["STUDENT"]}>
            <StudentLayout />
        </ProtectedRoute>
    }
>

    <Route

        path="/student/dashboard"

        element={<StudentDashboard />}

    />

    <Route

        path="/student/create-complaint"

        element={<CreateComplaint />}


    />
    <Route
    path="/student/my-complaints"
    element={<MyComplaints />}
/>
     <Route
        path="/student/track"
        element={<TrackComplaint />}
    />


</Route>

               <Route
    element={
        <ProtectedRoute allowedRoles={["FACULTY"]}>
            <FacultyLayout />
        </ProtectedRoute>
    }
>

    <Route

        path="/faculty/dashboard"

        element={<FacultyDashboard />}

    />

</Route>

                <Route
    element={
        <ProtectedRoute allowedRoles={["HOD"]}>
            <HodLayout />
        </ProtectedRoute>
    }
>

    <Route

        path="/hod/dashboard"

        element={<HodDashboard />}

    />

</Route>
                    <Route

path="/register"

element={<Register/>}

/>
            </Routes>

        </BrowserRouter>

    );

}