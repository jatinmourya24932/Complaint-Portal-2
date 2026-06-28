import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { createComplaint } from "../../services/ComplaintService";
import { getSubjects } from "../../services/MasterService";
import { getFacultyBySubject } from "../../services/FacultySubjectService";

export default function ComplaintForm() {

    const [subjects, setSubjects] = useState([]);

    const [facultySubjects, setFacultySubjects] = useState([]);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        title: "",

        description: "",

        category: "",

        priority: "MEDIUM",

        anonymous: false,

        subjectId: "",

        facultySubjectId: "",

        attachment: null

    });

    useEffect(() => {

        loadSubjects();

    }, []);

    const loadSubjects = async () => {

        try {

            // Backend me baad me semesterId dynamic kar dena

            const semesterId = 5;

            const data = await getSubjects(

                semesterId

            );

            setSubjects(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const loadFaculty = async (subjectId) => {

        try {

            const data = await getFacultyBySubject(

                subjectId

            );

            setFacultySubjects(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        if (name === "subjectId") {

            loadFaculty(value);

        }

        setFormData(prev => ({

            ...prev,

            [name]:

                type === "checkbox"

                    ?

                    checked

                    :

                    value

        }));

    };

    const handleFile = (e) => {

        setFormData(prev => ({

            ...prev,

            attachment: e.target.files[0]

        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            await createComplaint({

                title: formData.title,

                description: formData.description,

                priority: formData.priority,

                category: formData.category,

                anonymous: formData.anonymous,

                studentProfileId: 1,

                facultySubjectId:

                    formData.category === "FACULTY"

                        ?

                        Number(formData.facultySubjectId)

                        :

                        null,

                departmentId: null

            });

            toast.success(

                "Complaint Submitted"

            );

            setFormData({

                title: "",

                description: "",

                category: "",

                priority: "MEDIUM",

                anonymous: false,

                subjectId: "",

                facultySubjectId: "",

                attachment: null

            });

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Submission Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <form

            onSubmit={handleSubmit}

            className="space-y-6 rounded-3xl border border-white/10 bg-slate-950 p-8"
        >            <div>

                <label className="mb-2 block text-white">

                    Complaint Title

                </label>

                <input

                    name="title"

                    value={formData.title}

                    onChange={handleChange}

                    placeholder="Enter Complaint Title"

                    className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white"

                />

            </div>

            <div>

                <label className="mb-2 block text-white">

                    Description

                </label>

                <textarea

                    rows={6}

                    name="description"

                    value={formData.description}

                    onChange={handleChange}

                    placeholder="Describe your complaint..."

                    className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white"

                />

            </div>

            <div className="grid gap-6 md:grid-cols-2">

                <div>

                    <label className="mb-2 block text-white">

                        Category

                    </label>

                    <select

                        name="category"

                        value={formData.category}

                        onChange={handleChange}

                        className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white"

                    >

                        <option value="">Select Category</option>

                        <option value="FACULTY">Faculty</option>

                        <option value="ACADEMIC">Academic</option>

                        <option value="INFRASTRUCTURE">Infrastructure</option>

                        <option value="OTHER">Other</option>

                    </select>

                </div>

                <div>

                    <label className="mb-2 block text-white">

                        Priority

                    </label>

                    <select

                        name="priority"

                        value={formData.priority}

                        onChange={handleChange}

                        className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white"

                    >

                        <option value="LOW">LOW</option>

                        <option value="MEDIUM">MEDIUM</option>

                        <option value="HIGH">HIGH</option>

                    </select>

                </div>

            </div>

            {

                formData.category === "FACULTY" && (

                    <>

                        <div>

                            <label className="mb-2 block text-white">

                                Subject

                            </label>

                            <select

                                name="subjectId"

                                value={formData.subjectId}

                                onChange={handleChange}

                                className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white"

                            >

                                <option value="">

                                    Select Subject

                                </option>

                                {

                                    subjects.map(subject => (

                                        <option

                                            key={subject.id}

                                            value={subject.id}

                                        >

                                            {subject.name}

                                        </option>

                                    ))

                                }

                            </select>

                        </div>

                        <div>

                            <label className="mb-2 mt-5 block text-white">

                                Faculty

                            </label>

                            <select

                                name="facultySubjectId"

                                value={formData.facultySubjectId}

                                onChange={handleChange}

                                className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white"

                            >

                                <option value="">

                                    Select Faculty

                                </option>

                                {

                                    facultySubjects.map(item => (

                                        <option

                                            key={item.id}

                                            value={item.id}

                                        >

                                            {item.facultyName}

                                            {" - "}

                                            {item.subjectName}

                                        </option>

                                    ))

                                }

                            </select>

                        </div>

                    </>

                )

            }

            <div>

                <label className="mb-2 block text-white">

                    Attachment

                </label>

                <input

                    type="file"

                    onChange={handleFile}

                    className="text-gray-300"

                />

            </div>

            <label className="flex items-center gap-3 text-white">

                <input

                    type="checkbox"

                    name="anonymous"

                    checked={formData.anonymous}

                    onChange={handleChange}

                />

                Submit Anonymously

            </label>

            <button

                disabled={loading}

                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 py-4 font-semibold text-white"

            >

                {

                    loading

                        ?

                        "Submitting..."

                        :

                        "Submit Complaint"

                }

            </button>        </form>

    );

}