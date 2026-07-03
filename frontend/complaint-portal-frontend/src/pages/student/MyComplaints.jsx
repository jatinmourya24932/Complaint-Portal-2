import { useEffect, useState } from "react";

import DashboardContent from "../../components/dashboard/DashboardContent";
import { getComplaintsByStudent } from "../../services/ComplaintService";

export default function MyComplaints() {

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {

        loadComplaints();

    }, []);

    async function loadComplaints() {

        try {

            const userId = sessionStorage.getItem("id");

            const data = await getComplaintsByStudent(userId);

            setComplaints(data);

        }

        catch (error) {

            console.error(error);

        }

    }

    return (

        <DashboardContent

            complaints={complaints}

            showActions={false}

        />

    );

}