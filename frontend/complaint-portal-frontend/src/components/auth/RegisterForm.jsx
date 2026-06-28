import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { verifyRollNumber } from "../../services/StudentService";
import { registerUser } from "../../services/Authservice";

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

            const response =
                await verifyRollNumber(
                    rollNumber
                );

            setStudent(response.data);

            setVerified(true);

            toast.success(
                "Roll Number Verified"
            );

        }

        catch (error) {

            setVerified(false);

            setStudent(null);

            toast.error(

                error.response?.data?.message ||

                "Invalid Roll Number"

            );

        }

        finally {

            setLoading(false);

        }

    };

    const handleRegister = async (e) => {

        e.preventDefault();

        if (!verified) {

            toast.error(

                "Verify Roll Number First"

            );

            return;

        }

        if (password !== confirmPassword) {

            toast.error(

                "Passwords do not match"

            );

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

            toast.success(

                "Registration Successful"

            );

            navigate("/login");

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Registration Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

            <h1 className="text-4xl font-bold text-white">

                Student Registration

            </h1>

            <p className="mt-2 text-gray-400">

                Register using your College Roll Number

            </p>

            <div className="mt-8 flex gap-3">

                <input

                    value={rollNumber}

                    onChange={(e) =>
                        setRollNumber(
                            e.target.value
                        )
                    }

                    placeholder="Enter Roll Number"

                    className="flex-1 rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none"

                />

                <button

                    type="button"

                    onClick={handleVerify}

                    disabled={loading}

                    className="rounded-xl bg-blue-600 px-6 text-white"

                >

                    {

                        loading

                            ?

                            "Verifying..."

                            :

                            "Verify"

                    }

                </button>

            </div>

            {

                verified && student && (

                    <>                        <div className="mt-8 grid grid-cols-2 gap-5">

                            <div>

                                <label className="mb-2 block text-sm text-gray-400">

                                    Name

                                </label>

                                <input

                                    value={student.name}

                                    readOnly

                                    className="w-full rounded-xl border border-white/10 bg-slate-800 px-5 py-4 text-white"

                                />

                            </div>

                            <div>

                                <label className="mb-2 block text-sm text-gray-400">

                                    Roll Number

                                </label>

                                <input

                                    value={student.rollNumber}

                                    readOnly

                                    className="w-full rounded-xl border border-white/10 bg-slate-800 px-5 py-4 text-white"

                                />

                            </div>

                            <div>

                                <label className="mb-2 block text-sm text-gray-400">

                                    Course

                                </label>

                                <input

                                    value={student.course}

                                    readOnly

                                    className="w-full rounded-xl border border-white/10 bg-slate-800 px-5 py-4 text-white"

                                />

                            </div>

                            <div>

                                <label className="mb-2 block text-sm text-gray-400">

                                    Department

                                </label>

                                <input

                                    value={student.department}

                                    readOnly

                                    className="w-full rounded-xl border border-white/10 bg-slate-800 px-5 py-4 text-white"

                                />

                            </div>

                            <div>

                                <label className="mb-2 block text-sm text-gray-400">

                                    Semester

                                </label>

                                <input

                                    value={student.semester}

                                    readOnly

                                    className="w-full rounded-xl border border-white/10 bg-slate-800 px-5 py-4 text-white"

                                />

                            </div>

                            <div>

                                <label className="mb-2 block text-sm text-gray-400">

                                    Section

                                </label>

                                <input

                                    value={student.section}

                                    readOnly

                                    className="w-full rounded-xl border border-white/10 bg-slate-800 px-5 py-4 text-white"

                                />

                            </div>

                        </div>

                        <form

                            onSubmit={handleRegister}

                            className="mt-8 space-y-5"

                        >

                            <input

                                type="email"

                                placeholder="Email"

                                value={email}

                                onChange={(e)=>

                                    setEmail(

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none"

                            />

                            <input

                                type="password"

                                placeholder="Password"

                                value={password}

                                onChange={(e)=>

                                    setPassword(

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none"

                            />

                            <input

                                type="password"

                                placeholder="Confirm Password"

                                value={confirmPassword}

                                onChange={(e)=>

                                    setConfirmPassword(

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none"

                            />

                            <button

                                disabled={loading}

                                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 py-4 font-semibold text-white transition hover:scale-[1.02]"

                            >

                                {

                                    loading

                                        ?

                                        "Registering..."

                                        :

                                        "Register"

                                }

                            </button>

                        </form>

                    </>

                )

            }        </div>

    );

}   