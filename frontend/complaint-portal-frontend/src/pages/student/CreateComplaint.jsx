import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import { getComplaintsByStudent } from "../../services/ComplaintService";

export default function StudentDashboard() {

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {

        loadComplaints();

    }, []);

    const loadComplaints = async () => {

        try {

            const userId = sessionStorage.getItem("id");

            const data = await getComplaintsByStudent(userId);

            setComplaints(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <DashboardLayout

            title="Student Dashboard"

            complaints={complaints}

            showActions={false}

        />

    );

}