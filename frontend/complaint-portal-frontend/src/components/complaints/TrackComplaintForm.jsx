import { useState } from "react";

import toast from "react-hot-toast";

import { trackComplaint } from "../../services/ComplaintService";

export default function TrackComplaintForm(){

    const [trackingId,setTrackingId]=useState("");

    const [complaint,setComplaint]=useState(null);

    const [loading,setLoading]=useState(false);

    const handleSearch=async()=>{

        if(!trackingId){

            toast.error(

                "Enter Tracking ID"

            );

            return;

        }

        try{

            setLoading(true);

            const data=

            await trackComplaint(

                trackingId

            );

            setComplaint(data);

        }

        catch(error){

            toast.error(

                error.response?.data?.message ||

                "Complaint Not Found"

            );

        }

        finally{

            setLoading(false);

        }

    }

    return(

        <div className="rounded-3xl border border-white/10 bg-slate-950 p-8">

            <div className="flex gap-4">

                <input

                    value={trackingId}

                    onChange={(e)=>setTrackingId(e.target.value)}

                    placeholder="Enter Tracking ID"

                    className="flex-1 rounded-xl border border-white/10 bg-slate-900 p-4 text-white"

                />

                <button

                    onClick={handleSearch}

                    className="rounded-xl bg-violet-600 px-8 text-white"

                >

                    {

                        loading

                        ?

                        "Searching..."

                        :

                        "Search"

                    }

                </button>

            </div>

            {

                complaint && (

                    <div className="mt-8 space-y-4">

                        <div>

                            <span className="text-gray-400">

                                Tracking ID

                            </span>

                            <h2 className="text-white text-xl">

                                {complaint.trackingId}

                            </h2>

                        </div>

                        <div>

                            <span className="text-gray-400">

                                Title

                            </span>

                            <h2 className="text-white">

                                {complaint.title}

                            </h2>

                        </div>

                        <div>

                            <span className="text-gray-400">

                                Category

                            </span>

                            <h2 className="text-white">

                                {complaint.category}

                            </h2>

                        </div>

                        <div>

                            <span className="text-gray-400">

                                Priority

                            </span>

                            <h2 className="text-white">

                                {complaint.priority}

                            </h2>

                        </div>

                        <div>

                            <span className="text-gray-400">

                                Status

                            </span>

                            <h2 className="text-green-400">

                                {complaint.status}

                            </h2>

                        </div>

                        <div>

                            <span className="text-gray-400">

                                Description

                            </span>

                            <p className="text-white">

                                {complaint.description}

                            </p>

                        </div>

                    </div>

                )

            }

        </div>

    );

}