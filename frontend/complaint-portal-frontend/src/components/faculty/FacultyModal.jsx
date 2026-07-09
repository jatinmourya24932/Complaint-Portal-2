import { useEffect, useState } from "react";
import { createFaculty } from "../../services/FacultyService.js";
import { getAllDepartments } from "../../services/DepartmentService.js";
import { updateFaculty } from "../../services/FacultyService";

export default function FacultyModal({

    faculty,

    onClose,

    onSuccess

}) {

    const [departments, setDepartments] = useState([]);
    const isEdit = faculty != null;

    const [form, setForm] = useState({

        name: "",

        email: "",

        password: "",

        employeeCode: "",

        designation: "",

        phone: "",

        departmentId: ""

    });

    useEffect(() => {

        loadDepartments();

    }, []);

    useEffect(() => {

    if (faculty) {

        setForm({

            name: faculty.name,

            email: faculty.email,

            password: "",

            employeeCode: faculty.employeeCode,

            designation: faculty.designation,

            phone: faculty.phone,

            departmentId: faculty.departmentId

        });

    }

}, [faculty]);

    async function loadDepartments() {

        try {

            const data = await getAllDepartments();

            setDepartments(data);

        }

        catch (error) {

            console.log(error);

        }

    }

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

   const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        if (isEdit) {

            await updateFaculty(

                faculty.id,

                {

                    name: form.name,

                    email: form.email,

                    designation: form.designation,

                    phone: form.phone,

                    departmentId: Number(form.departmentId)

                }

            );

        } else {

            await createFaculty({

                ...form,

                departmentId: Number(form.departmentId)

            });

        }

        onSuccess();

        onClose();

    } catch (error) {

        console.log(error);

    }

};

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

            <div className="w-full max-w-lg rounded-2xl bg-slate-900 p-8">

                <h2 className="mb-6 text-2xl font-bold text-white">

    {isEdit ? "Edit Faculty" : "Add Faculty"}

</h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Faculty Name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"
                    />

                   {

    !isEdit && (

        <input

            type="password"

            name="password"

            placeholder="Password"

            value={form.password}

            onChange={handleChange}

            className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"

        />

    )

}

                    <input
                        type="text"
                        name="employeeCode"
                        placeholder="Employee Code"
                        value={form.employeeCode}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"
                    />

                    <select
                        name="designation"
                        value={form.designation}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"
                    >

                        <option value="">Select Designation</option>

                        <option value="Professor">Professor</option>

                        <option value="Associate Professor">
                            Associate Professor
                        </option>

                        <option value="Assistant Professor">
                            Assistant Professor
                        </option>

                        <option value="Lab Assistant">
                            Lab Assistant
                        </option>

                    </select>

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"
                    />

                    <select
                        name="departmentId"
                        value={form.departmentId}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"
                    >

                        <option value="">

                            Select Department

                        </option>

                        {

                            departments.map((department) => (

                                <option
                                    key={department.id}
                                    value={department.id}
                                >

                                    {department.name}

                                </option>

                            ))

                        }

                    </select>

                    <div className="flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl bg-slate-700 px-5 py-2 text-white"
                        >

                            Cancel

                        </button>

                        <button
                            type="submit"
                            className="rounded-xl bg-violet-600 px-5 py-2 text-white"
                        >

                           {isEdit ? "Update Faculty" : "Save Faculty"}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}