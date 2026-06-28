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
                    path="/admin/dashboard"
                    element={
                        <ProtectedRoute allowedRoles={["ADMIN"]}>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/student/dashboard"
                    element={
                        <ProtectedRoute allowedRoles={["STUDENT"]}>
                            <StudentDashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
    path="/student/create-complaint"
    element={
        <ProtectedRoute allowedRoles={["STUDENT"]}>
            <CreateComplaint />
        </ProtectedRoute>
    }
/>

                <Route
                    path="/faculty/dashboard"
                    element={
                        <ProtectedRoute allowedRoles={["FACULTY"]}>
                            <FacultyDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/hod/dashboard"
                    element={
                        <ProtectedRoute allowedRoles={["HOD"]}>
                            <HodDashboard />
                        </ProtectedRoute>
                    }
                />
                    <Route

path="/register"

element={<Register/>}

/>
            </Routes>

        </BrowserRouter>

    );

}