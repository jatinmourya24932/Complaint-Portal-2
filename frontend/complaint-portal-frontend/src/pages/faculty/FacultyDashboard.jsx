import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import { getComplaintsByFaculty } from "../../services/ComplaintService";

export default function FacultyDashboard() {

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {

        loadComplaints();

    }, []);

    const loadComplaints = async () => {

        try {

            const userId = sessionStorage.getItem("id");

            const data = await getComplaintsByFaculty(userId);

            setComplaints(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <DashboardLayout

            title="Faculty Dashboard"

            complaints={complaints}

            showActions={true}

        />

    );

}