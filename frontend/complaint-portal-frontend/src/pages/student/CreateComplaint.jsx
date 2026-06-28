import ComplaintForm from "../../components/complaints/ComplaintForm";

export default function CreateComplaint() {
  return (
    <div className="min-h-screen bg-slate-900 p-8">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-2 text-4xl font-bold text-white">
          Create Complaint
        </h1>

        <p className="mb-8 text-gray-400">
          Submit your complaint securely. Anonymous complaints are supported.
        </p>

        <ComplaintForm />

      </div>

    </div>
  );
}