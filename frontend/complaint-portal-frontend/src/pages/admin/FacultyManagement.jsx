import { useEffect, useState } from "react";

import { getAllFaculty } from "../../services/FacultyService.js";
import FacultyModal from "../../components/faculty/FacultyModal";

export default function FacultyManagement() {

    const [faculty, setFaculty] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {

        loadFaculty();

    }, []);

    async function loadFaculty() {

        try {

            const data = await getAllFaculty();

            setFaculty(data);

        }

        catch (error) {

            console.log(error);

        }

    }

    return (

        <div>

            <div className="mb-8 flex items-center justify-between">

                <h2 className="text-3xl font-bold text-white">

                    Faculty Management

                </h2>

                <button

    onClick={() => setOpen(true)}

    className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white"

>

    + Add Faculty

</button>

            </div>

            <div className="overflow-hidden rounded-2xl bg-slate-800">

                <table className="w-full">

                    <thead className="bg-slate-700">

                        <tr>

                            <th className="p-4 text-left">Name</th>

                            <th className="p-4 text-left">Email</th>

                            <th className="p-4 text-left">Department</th>

                            <th className="p-4 text-left">Designation</th>

                            <th className="p-4 text-center">Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            faculty.map((f) => (

                                <tr

                                    key={f.id}

                                    className="border-t border-slate-700"

                                >

                                    <td className="p-4 text-white">

                                        {f.name}

                                    </td>

                                    <td className="p-4 text-white">

                                        {f.email}

                                    </td>

                                    <td className="p-4 text-white">

                                        {f.departmentName}

                                    </td>

                                    <td className="p-4 text-white">

                                        {f.designation}

                                    </td>

                                    <td className="p-4 text-center">

                                        <button

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
                {

    open && (

        <FacultyModal

            onClose={() => setOpen(false)}

            onSuccess={loadFaculty}

        />

    )

}

            </div>

        </div>

    );

    
}
