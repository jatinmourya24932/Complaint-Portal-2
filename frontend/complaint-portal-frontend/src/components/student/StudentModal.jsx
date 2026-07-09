import { useEffect, useState } from "react";

import {
    createStudent,
    updateStudent
} from "../../services/StudentService";

import {
    getCourses,
    getDepartments,
    getSemesters
} from "../../services/MasterService";

import { getAcademicYears } from "../../services/AcademicYearService";

export default function StudentModal({

    student,

    onClose,

    onSuccess

}) {

    const isEdit = student != null;

    const [courses, setCourses] = useState([]);

    const [departments, setDepartments] = useState([]);

    const [semesters, setSemesters] = useState([]);

    const [academicYears, setAcademicYears] = useState([]);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        name: "",

        rollNumber: "",

        courseId: "",

        departmentId: "",

        semesterId: "",

        academicYearId: "",

        section: ""

    });

    useEffect(() => {

        loadCourses();

        loadAcademicYears();

    }, []);

    useEffect(() => {

        if (student) {

            setForm({

                name: student.name,

                rollNumber: student.rollNumber,

                courseId: student.courseId,

                departmentId: student.departmentId,

                semesterId: student.semesterId,

                academicYearId: student.academicYearId,

                section: student.section

            });

            loadDepartments(student.courseId);

            loadSemesters(student.departmentId);

        }

    }, [student]);

    async function loadCourses() {

        try {

            const data = await getCourses();

            setCourses(data);

        }

        catch (e) {

            console.log(e);

        }

    }

    async function loadAcademicYears() {

        try {

            const data = await getAcademicYears();

            setAcademicYears(data);

        }

        catch (e) {

            console.log(e);

        }

    }

    async function loadDepartments(courseId) {

        if (!courseId) return;

        try {

            const data = await getDepartments(courseId);

            setDepartments(data);

        }

        catch (e) {

            console.log(e);

        }

    }

    async function loadSemesters(departmentId) {

        if (!departmentId) return;

        try {

            const data = await getSemesters(departmentId);

            setSemesters(data);

        }

        catch (e) {

            console.log(e);

        }

    }

    const handleChange = async (e) => {

        const { name, value } = e.target;

        setForm((prev) => ({

            ...prev,

            [name]: value

        }));

        if (name === "courseId") {

            setDepartments([]);

            setSemesters([]);

            setForm((prev) => ({

                ...prev,

                departmentId: "",

                semesterId: ""

            }));

            await loadDepartments(value);

        }

        if (name === "departmentId") {

            setSemesters([]);

            setForm((prev) => ({

                ...prev,

                semesterId: ""

            }));

            await loadSemesters(value);

        }

    };
    const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

        const payload = {

            studentName: form.name,

            rollNumber: form.rollNumber,

            courseId: Number(form.courseId),

            departmentId: Number(form.departmentId),

            semesterId: Number(form.semesterId),

            academicYearId: Number(form.academicYearId),

            section: form.section

        };

        if (isEdit) {

            await updateStudent(student.id, payload);

        }

        else {

            await createStudent(payload);

        }

        onSuccess();

        onClose();

    }

    catch (error) {

        console.log(error);

    }

    finally {

        setLoading(false);

    }

};
    return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

        <div className="w-full max-w-xl rounded-2xl bg-slate-900 p-8">

            <h2 className="mb-6 text-2xl font-bold text-white">

                {isEdit ? "Edit Student" : "Add Student"}

            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input

                    type="text"

                    name="name"

                    placeholder="Student Name"

                    value={form.name}

                    onChange={handleChange}

                    className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"

                />

                <input

                    type="text"

                    name="rollNumber"

                    placeholder="Roll Number"

                    value={form.rollNumber}

                    onChange={handleChange}

                    disabled={isEdit}

                    className="w-full rounded-xl bg-slate-800 p-3 text-white outline-none"

                />

                <select

                    name="courseId"

                    value={form.courseId}

                    onChange={handleChange}

                    className="w-full rounded-xl bg-slate-800 p-3 text-white"

                >

                    <option value="">Select Course</option>

                    {

                        courses.map(course => (

                            <option

                                key={course.id}

                                value={course.id}

                            >

                                {course.name}

                            </option>

                        ))

                    }

                </select>

                <select

                    name="departmentId"

                    value={form.departmentId}

                    onChange={handleChange}

                    className="w-full rounded-xl bg-slate-800 p-3 text-white"

                >

                    <option value="">Select Department</option>

                    {

                        departments.map(department => (

                            <option

                                key={department.id}

                                value={department.id}

                            >

                                {department.name}

                            </option>

                        ))

                    }

                </select>

                <select

                    name="semesterId"

                    value={form.semesterId}

                    onChange={handleChange}

                    className="w-full rounded-xl bg-slate-800 p-3 text-white"

                >

                    <option value="">Select Semester</option>

                    {

                        semesters.map(semester => (

                            <option

                                key={semester.id}

                                value={semester.id}

                            >

                                Semester {semester.semesterNo}

                            </option>

                        ))

                    }

                </select>

                <select

                    name="academicYearId"

                    value={form.academicYearId}

                    onChange={handleChange}

                    className="w-full rounded-xl bg-slate-800 p-3 text-white"

                >

                    <option value="">Academic Year</option>

                    {

                        academicYears.map(year => (

                            <option

                                key={year.id}

                                value={year.id}

                            >

                                {year.yearName}

                            </option>

                        ))

                    }

                </select>

                <select

                    name="section"

                    value={form.section}

                    onChange={handleChange}

                    className="w-full rounded-xl bg-slate-800 p-3 text-white"

                >

                    <option value="">Section</option>

                    <option value="A">A</option>

                    <option value="B">B</option>

                    <option value="C">C</option>

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

    disabled={loading}

    className="flex items-center justify-center rounded-xl bg-violet-600 px-5 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"

>

    {

        loading ? (

            <>

                <svg

                    className="mr-2 h-5 w-5 animate-spin"

                    xmlns="http://www.w3.org/2000/svg"

                    fill="none"

                    viewBox="0 0 24 24"

                >

                    <circle

                        className="opacity-25"

                        cx="12"

                        cy="12"

                        r="10"

                        stroke="currentColor"

                        strokeWidth="4"

                    />

                    <path

                        className="opacity-75"

                        fill="currentColor"

                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"

                    />

                </svg>

                Saving...

            </>

        ) : (

            isEdit

                ? "Update Student"

                : "Save Student"

        )

    }

</button>

                </div>

            </form>

        </div>

    </div>

);
};