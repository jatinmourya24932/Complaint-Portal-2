import LoginForm from "../components/auth/LoginForm";
import { Navigate } from "react-router-dom";

export default function Login() {
    const token = sessionStorage.getItem("token");

if(token){

    const role=sessionStorage.getItem("role");

    switch(role){

        case "ADMIN":

            return <Navigate to="/admin/dashboard"/>;

        case "HOD":

            return <Navigate to="/hod/dashboard"/>;

        case "FACULTY":

            return <Navigate to="/faculty/dashboard"/>;

        default:

            return <Navigate to="/student/dashboard"/>;

    }

}
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <LoginForm />
    </div>
  );
}