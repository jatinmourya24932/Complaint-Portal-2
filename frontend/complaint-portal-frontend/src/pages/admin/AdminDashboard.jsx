import { useEffect, useState } from "react";

import { getAllComplaints } from "../../services/ComplaintService";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function AdminDashboard() {

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {

        loadComplaints();

    }, []);

    const loadComplaints = async () => {

        try {

            const data = await getAllComplaints();

            setComplaints(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <DashboardLayout

            title="Admin Dashboard"

            complaints={complaints}

            showActions={true}

        />

    );

}