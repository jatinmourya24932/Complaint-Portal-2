import { useEffect, useState } from "react";

import { getComplaintsByHod } from "../../services/ComplaintService";
import DashboardContent from "../../components/dashboard/DashboardContent";

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

        <DashboardContent


            complaints={complaints}

            showActions={true}

        />

    );

}