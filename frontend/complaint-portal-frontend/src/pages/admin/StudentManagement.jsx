import { useEffect, useState } from "react";

import { getAllStudents } from "../../services/StudentService";
import StudentModal from "../../components/student/StudentModal";

export default function StudentManagement() {

    const [students, setStudents] = useState([]);

    const [open, setOpen] = useState(false);

    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {

        loadStudents();

    }, []);

    async function loadStudents() {

        try {

            const data = await getAllStudents();

            setStudents(data);

        }

        catch (error) {

            console.log(error);

        }

    }

    return (

        <div>

            <div className="mb-8 flex items-center justify-between">

                <h2 className="text-3xl font-bold text-white">

                    Student Management

                </h2>

                <button

                    onClick={() => {

                        setSelectedStudent(null);

                        setOpen(true);

                    }}

                    className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white"

                >

                    + Add Student

                </button>

            </div>

            <div className="overflow-hidden rounded-2xl bg-slate-800">

                <table className="w-full">

                    <thead className="bg-slate-700">

                        <tr>

                            <th className="p-4 text-left">

                                Student Name

                            </th>

                            <th className="p-4 text-left">

                                Roll Number

                            </th>

                            <th className="p-4 text-left">

                                Department

                            </th>

                            <th className="p-4 text-left">

                                Semester

                            </th>

                            <th className="p-4 text-center">

                                Registered

                            </th>

                            <th className="p-4 text-center">

                                Action

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            students.map((student) => (

                                <tr

                                    key={student.id}

                                    className="border-t border-slate-700"

                                >

                                    <td className="p-4 text-white">

                                        {student.name}

                                    </td>

                                    <td className="p-4 text-white">

                                        {student.rollNumber}

                                    </td>

                                    <td className="p-4 text-white">

                                        {student.department}

                                    </td>

                                    <td className="p-4 text-white">

                                        Semester {student.semester}

                                    </td>

                                    <td className="p-4 text-center">

                                        {

                                           student.registered ?

                                                <span className="rounded-full bg-green-600 px-3 py-1 text-white">

                                                    Registered

                                                </span>

                                                :

                                                <span className="rounded-full bg-red-600 px-3 py-1 text-white">

                                                    Pending

                                                </span>

                                        }

                                    </td>

                                    <td className="p-4 text-center">

                                        <button

                                            onClick={() => {

                                                setSelectedStudent(student);

                                                setOpen(true);

                                            }}

                                            className="rounded-lg bg-blue-600 px-4 py-2 text-white"

                                        >

                                            Edit

                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

            {

                open &&

                <StudentModal

                    student={selectedStudent}

                    onClose={() => {

                        setOpen(false);

                        setSelectedStudent(null);

                    }}

                    onSuccess={loadStudents}

                />

            }

        </div>

    );

}