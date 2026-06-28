import TrackComplaintForm from "../components/complaints/TrackComplaintForm";

export default function TrackComplaint() {

    return (

        <div className="min-h-screen bg-slate-900 p-8">

            <div className="mx-auto max-w-5xl">

                <h1 className="mb-2 text-4xl font-bold text-white">

                    Track Complaint

                </h1>

                <p className="mb-8 text-gray-400">

                    Track your complaint using Tracking ID

                </p>

                <TrackComplaintForm/>

            </div>

        </div>

    );

}