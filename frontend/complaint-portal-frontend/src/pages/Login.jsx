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
    <div className="relative min-h-screen overflow-hidden bg-[#050816]">

    <div className="absolute inset-0 bg-[radial-gradient(circle,#7c3aed18_1px,transparent_1px)] bg-[size:35px_35px]"></div>

    <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"></div>

    <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-3xl"></div>

    <div className="relative z-10">

        <LoginForm/>

    </div>

</div>
  );
}