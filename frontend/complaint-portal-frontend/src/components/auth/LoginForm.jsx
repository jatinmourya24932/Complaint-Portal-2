import { useState } from "react";
import { loginUser } from "../../services/Authservice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function LoginForm() {

    const navigate = useNavigate();

    const [email,setEmail]=useState("");

    const [password,setPassword]=useState("");

    const [loading,setLoading]=useState(false);

    const handleLogin=async(e)=>{

        e.preventDefault();

        try{

            setLoading(true);

            const response=await loginUser({

                email,

                password

            });

            sessionStorage.setItem("id", response.id);

            sessionStorage.setItem("email", response.email);

            sessionStorage.setItem(

                "token",

                response.token

            );

            sessionStorage.setItem(

                "role",

                response.role

            );

            sessionStorage.setItem(

                "name",

                response.name

            );

            sessionStorage.setItem(
                "loginTime",
                Date.now()
            );

            toast.success(

                "Login Successful"

            );

            switch(response.role){

                case "ADMIN":

                    navigate("/admin/dashboard");

                    break;

                case "HOD":

                    navigate("/hod/dashboard");

                    break;

                case "FACULTY":

                    navigate("/faculty/dashboard");

                    break;

                case "STUDENT":

                    navigate("/student/dashboard");

                    break;

                default:

                    navigate("/");

            }

        }

        catch(error){

            toast.error(

                "Invalid Email or Password"

            );

        }

        finally{

            setLoading(false);

        }

    }

    return(

        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

            <h1 className="text-4xl font-bold text-white">

                Welcome Back

            </h1>

            <p className="mt-2 text-gray-400">

                Login to ShadowSpeak 2.0

            </p>

            <form

                onSubmit={handleLogin}

                className="mt-8 space-y-5">

                <input

                    type="email"

                    placeholder="Email"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-violet-500"

                />

                <input

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none focus:border-violet-500"

                />

                <button

                    disabled={loading}

                    className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 py-4 font-semibold text-white transition hover:scale-[1.02]">

                    {

                        loading

                        ?

                        "Logging in..."

                        :

                        "Login"

                    }

                </button>

            </form>

        </div>

    );

}