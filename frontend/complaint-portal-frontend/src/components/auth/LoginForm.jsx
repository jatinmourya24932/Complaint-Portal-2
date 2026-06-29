import { useState } from "react";
import { loginUser } from "../../services/Authservice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Tilt from "react-parallax-tilt";

import {
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
    FiShield,
    FiActivity,
    FiCheckCircle
} from "react-icons/fi";

export default function LoginForm() {

    const navigate = useNavigate();

    const [email,setEmail]=useState("");

    const [password,setPassword]=useState("");

    const [loading,setLoading]=useState(false);
    
    const [showPassword, setShowPassword] = useState(false);

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

    return (

<div className="flex min-h-screen items-center justify-center bg-[#060816] px-6 py-10">

<Tilt

tiltMaxAngleX={4}
tiltMaxAngleY={4}
perspective={1200}
transitionSpeed={2000}
glareEnable={true}
glareMaxOpacity={0.15}

className="w-full max-w-7xl"

>

<div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,.45)] backdrop-blur-3xl">

<div className="grid lg:grid-cols-2">

{/* LEFT PANEL */}

<div className="relative hidden overflow-hidden bg-gradient-to-br from-[#1b1040] via-[#101c52] to-[#071529] p-14 lg:flex lg:flex-col lg:justify-between">

<div>

<div className="mb-12 flex items-center gap-4">

<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400">

<FiShield className="text-2xl text-white"/>

</div>

<div>

<h1 className="text-3xl font-bold text-white">

Complaint Portal

</h1>

<p className="text-slate-400">

AI Enabled Complaint Management

</p>

</div>

</div>

<h2 className="text-6xl font-black leading-tight text-white">

Raise

your voice

<span className="block bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">

securely.

</span>

</h2>

<p className="mt-8 max-w-lg text-lg leading-8 text-slate-300">

A secure platform where students can register complaints, upload evidence, track complaint status and communicate with faculty, HOD and administrators.

</p>

</div>

<div className="space-y-7">

<div className="flex items-center gap-4">

<div className="rounded-xl bg-green-500/10 p-3">

<FiCheckCircle className="text-2xl text-green-400"/>

</div>

<div>

<h3 className="font-semibold text-white">

Secure Authentication

</h3>

<p className="text-slate-400">

JWT Protected Login

</p>

</div>

</div>

<div className="flex items-center gap-4">

<div className="rounded-xl bg-blue-500/10 p-3">

<FiActivity className="text-2xl text-cyan-400"/>

</div>

<div>

<h3 className="font-semibold text-white">

Complaint Tracking

</h3>

<p className="text-slate-400">

Real Time Status Updates

</p>

</div>

</div>

<div className="flex items-center gap-4">

<div className="rounded-xl bg-violet-500/10 p-3">

<FiShield className="text-2xl text-violet-400"/>

</div>

<div>

<h3 className="font-semibold text-white">

Anonymous Complaints

</h3>

<p className="text-slate-400">

Privacy First Approach

</p>

</div>

</div>

</div>

<div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl"></div>

<div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

</div>
{/* RIGHT PANEL */}

<div className="flex items-center justify-center bg-[#0B1120] p-10">

    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

        <div className="mb-10">

            <h2 className="text-4xl font-bold text-white">

                Welcome Back 👋

            </h2>

            <p className="mt-3 text-slate-400">

                Login to continue to your dashboard.

            </p>

        </div>

        <form

            onSubmit={handleLogin}

            className="space-y-6"

        >

            {/* Email */}

            <div>

                <label className="mb-2 block text-sm text-slate-300">

                    Email Address

                </label>

                <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900 px-4 transition-all duration-300 hover:border-violet-500 focus-within:border-cyan-400">

                    <FiMail className="text-xl text-slate-400"/>

                    <input

                        type="email"

                        value={email}

                        onChange={(e)=>setEmail(e.target.value)}

                        placeholder="Enter your email"

                        className="w-full bg-transparent px-4 py-4 text-white outline-none"

                    />

                </div>

            </div>

            {/* Password */}

            <div>

                <label className="mb-2 block text-sm text-slate-300">

                    Password

                </label>

               <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900 px-4 transition-all duration-300 hover:border-violet-500 focus-within:border-cyan-400">

                    <FiLock className="text-xl text-slate-400"/>

                    <input

                        type={

                            showPassword

                            ?

                            "text"

                            :

                            "password"

                        }

                        value={password}

                        onChange={(e)=>setPassword(e.target.value)}

                        placeholder="Enter password"

                        className="w-full bg-transparent px-4 py-4 text-white outline-none"

                    />

                    <button

                        type="button"

                        onClick={()=>

                            setShowPassword(

                                !showPassword

                            )

                        }

                        className="text-slate-400 hover:text-white"

                    >

                        {

                            showPassword

                            ?

                            <FiEyeOff/>

                            :

                            <FiEye/>

                        }

                    </button>

                </div>

            </div>

            <div className="flex items-center justify-between">

                <label className="flex items-center gap-2 text-sm text-slate-400">

                    <input

                        type="checkbox"

                        className="accent-violet-600"

                    />

                    Remember Me

                </label>

                <button

                    type="button"

                    className="text-sm text-cyan-400 hover:text-cyan-300"

                >

                    Forgot Password?

                </button>

            </div>

            <button

                disabled={loading}

                className="w-full rounded-2xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(59,130,246,.45)] active:scale-95 disabled:opacity-60"

            >

                {

                    loading

                    ?

                    "Logging in..."

                    :

                    "Login"

                }

            </button>

            <p className="text-center text-slate-400">

                Don't have an account?

                <span

                    onClick={()=>navigate("/register")}

                    className="ml-2 cursor-pointer font-semibold text-cyan-400 hover:text-cyan-300"

                >

                    Register

                </span>

            </p>

        </form>

    </div>

</div></div>

</div>

</Tilt>

</div>

);


}