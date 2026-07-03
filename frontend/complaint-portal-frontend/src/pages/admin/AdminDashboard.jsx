import { useEffect, useState } from "react";

import { getAllComplaints } from "../../services/ComplaintService";

import DashboardContent from "../../components/dashboard/DashboardContent";

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

        <DashboardContent

            complaints={complaints}

            showActions={true}

        />

    );

}