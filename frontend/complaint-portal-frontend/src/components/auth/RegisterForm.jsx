import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { verifyRollNumber } from "../../services/StudentService";
import { registerUser } from "../../services/Authservice";
import Tilt from "react-parallax-tilt";

import {
    FiShield,
    FiCheckCircle,
    FiActivity
} from "react-icons/fi";

// Card Component
function Card({ title, value }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <p className="text-sm text-slate-400">{title}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">
                {value ?? "N/A"}
            </h3>
        </div>
    );
}

export default function RegisterForm() {
    const navigate = useNavigate();

    const [rollNumber, setRollNumber] = useState("");
    const [student, setStudent] = useState(null);
    const [verified, setVerified] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleVerify = async () => {
        if (rollNumber.trim() === "") {
            toast.error("Enter Roll Number");
            return;
        }

        try {
            setLoading(true);
            const response = await verifyRollNumber(rollNumber);

            setStudent(response.data);
            setVerified(true);
            toast.success("Roll Number Verified");
        } catch (error) {
            setVerified(false);
            setStudent(null);
            toast.error(
                error.response?.data?.message || "Invalid Roll Number"
            );
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!verified || !student) {
            toast.error("Verify Roll Number First");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        if (!email || !password) {
            toast.error("Please fill all required fields");
            return;
        }

        try {
            setLoading(true);
            await registerUser({
                rollNumber,
                name: student.name,
                email,
                password
            });

            toast.success("Registration Successful");
            navigate("/login");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Registration Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#060816] px-4 py-6 md:py-8">
            <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                perspective={1200}
                transitionSpeed={2000}
                glareEnable={true}
                glareMaxOpacity={0.15}
                className="w-full max-w-7xl"
            >
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,.45)] backdrop-blur-3xl">
                    <div className="grid lg:grid-cols-2 min-h-[85vh] lg:min-h-[620px]">
                        {/* LEFT PANEL - Compact */}
                        <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#1b1040] via-[#101c52] to-[#071529] p-8 lg:flex lg:flex-col lg:justify-between">
                            <div>
                                <div className="mb-8 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400">
                                        <FiShield className="text-2xl text-white" />
                                    </div>
                                    <div>
                                        <h1 className="text-3xl font-bold text-white">Complaint Portal</h1>
                                        <p className="text-slate-400">Student Registration</p>
                                    </div>
                                </div>

                                <h2 className="text-5xl font-black leading-tight text-white">
                                    Join the portal
                                    <span className="block bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                                        today.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
                                    Verify your college roll number and create your secure account.
                                </p>
                            </div>

                            <div className="space-y-6 text-sm">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-green-500/10 p-3">
                                        <FiCheckCircle className="text-2xl text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Roll Number Verification</h3>
                                        <p className="text-slate-400">Only valid students can register</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-blue-500/10 p-3">
                                        <FiActivity className="text-2xl text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Secure Registration</h3>
                                        <p className="text-slate-400">Protected Account Creation</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-violet-500/10 p-3">
                                        <FiShield className="text-2xl text-violet-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">Complaint Tracking</h3>
                                        <p className="text-slate-400">Track complaints anytime</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"></div>
                            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                        </div>

                        {/* RIGHT PANEL */}
                        <div className="bg-[#0B1120] p-6 md:p-10 flex flex-col">
                            <div className="mx-auto w-full max-w-2xl flex-1 flex flex-col">
                                <div className="mb-6">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white">Student Registration</h2>
                                    <p className="mt-2 text-slate-400">Verify your Roll Number before creating an account.</p>
                                </div>

                                {/* Roll Number Input */}
                                <div className="mb-8">
                                    <label className="mb-2 block text-sm text-slate-300">College Roll Number</label>
                                    <div className="flex gap-3">
                                        <input
                                            value={rollNumber}
                                            onChange={(e) => setRollNumber(e.target.value)}
                                            placeholder="Enter College Roll Number"
                                            className="flex-1 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition-all duration-300 hover:border-violet-500 focus:border-cyan-400"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleVerify}
                                            disabled={loading}
                                            className="rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-8 font-semibold text-white transition-all duration-300 hover:scale-105 disabled:opacity-70 whitespace-nowrap"
                                        >
                                            {loading ? "Verifying..." : "Verify"}
                                        </button>
                                    </div>
                                </div>

                                {/* Student Details & Form */}
                                {verified && student && (
                                    <div className="flex-1 flex flex-col">
                                        <div className="mb-8 grid gap-5 md:grid-cols-2">
                                            <Card title="Student Name" value={student.name} />
                                            <Card title="Roll Number" value={student.rollNumber} />
                                            <Card title="Course" value={student.course} />
                                            <Card title="Department" value={student.department} />
                                            <Card title="Semester" value={student.semester} />
                                            <Card title="Section" value={student.section} />
                                        </div>

                                        <form onSubmit={handleRegister} className="flex-1 flex flex-col space-y-5">
                                            <div>
                                                <label className="mb-2 block text-sm text-slate-300">Email Address</label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition-all duration-300 hover:border-violet-500 focus:border-cyan-400"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-sm text-slate-300">Password</label>
                                                <input
                                                    type="password"
                                                    placeholder="Create Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition-all duration-300 hover:border-violet-500 focus:border-cyan-400"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-sm text-slate-300">Confirm Password</label>
                                                <input
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition-all duration-300 hover:border-violet-500 focus:border-cyan-400"
                                                    required
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="mt-auto w-full rounded-2xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(59,130,246,.45)] active:scale-95 disabled:opacity-60"
                                            >
                                                {loading ? "Creating Account..." : "Create Account"}
                                            </button>

                                            <p className="text-center text-slate-400 pt-2">
                                                Already have an account?{" "}
                                                <span
                                                    onClick={() => navigate("/login")}
                                                    className="cursor-pointer font-semibold text-cyan-400 hover:text-cyan-300"
                                                >
                                                    Login
                                                </span>
                                            </p>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Tilt>
        </div>
    );
}