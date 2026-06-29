import RegisterForm from "../components/auth/RegisterForm";

export default function Register() {

    return (

       <div className="relative min-h-screen overflow-hidden bg-[#050816]">

    <div className="absolute inset-0 bg-[radial-gradient(circle,#7c3aed18_1px,transparent_1px)] bg-[size:35px_35px]"></div>

    <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"></div>

    <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-3xl"></div>

    <div className="relative z-10">

        <RegisterForm/>

    </div>

</div>

    );

}