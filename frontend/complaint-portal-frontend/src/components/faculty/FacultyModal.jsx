import { useState } from "react";
import { createFaculty } from "../../services/FacultyService.js";

export default function FacultyModal({

    onClose,

    onSuccess

}) {

    const [form, setForm] = useState({

        name: "",

        email: "",

        password: "",

        employeeCode: "",

        designation: "",

        phone: "",

        departmentId: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createFaculty({

                ...form,

                departmentId: Number(form.departmentId)

            });

            onSuccess();

            onClose();

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

            <div className="w-full max-w-lg rounded-2xl bg-slate-900 p-8">

                <h2 className="mb-6 text-2xl font-bold text-white">

                    Add Faculty

                </h2>

                <form

                    onSubmit={handleSubmit}

                    className="space-y-4"

                >

                    {[
                        "name",
                        "email",
                        "password",
                        "employeeCode",
                        "designation",
                        "phone",
                        "departmentId"
                    ].map(field => (

                        <input

                            key={field}

                            name={field}

                            placeholder={field}

                            value={form[field]}

                            onChange={handleChange}

                            className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"

                        />

                    ))}

                    <div className="flex justify-end gap-3">

                        <button

                            type="button"

                            onClick={onClose}

                            className="rounded-xl bg-slate-700 px-5 py-2 text-white"

                        >

                            Cancel

                        </button>

                        <button

                            className="rounded-xl bg-violet-600 px-5 py-2 text-white"

                        >

                            Save

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}