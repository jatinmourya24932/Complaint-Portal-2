import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import { getComplaintsByHod } from "../../services/ComplaintService";

export default function HodDashboard() {

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {

        loadComplaints();

    }, []);

    const loadComplaints = async () => {

        try {

            const userId = sessionStorage.getItem("id");

            const data = await getComplaintsByHod(userId);

            setComplaints(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <DashboardLayout

            title="HOD Dashboard"

            complaints={complaints}

            showActions={true}

        />

    );

}