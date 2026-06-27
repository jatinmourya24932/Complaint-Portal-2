const steps = [
  {
    number: "01",
    title: "Submit Complaint",
    description:
      "Student submits a complaint with optional anonymous reporting and attachments.",
    icon: "📝",
  },
  {
    number: "02",
    title: "AI Analysis",
    description:
      "AI summarizes the complaint and categorizes it for faster processing.",
    icon: "🤖",
  },
  {
    number: "03",
    title: "Authority Review",
    description:
      "Complaint is routed to the correct Faculty, HOD or Admin automatically.",
    icon: "👨‍💼",
  },
  {
    number: "04",
    title: "Resolution",
    description:
      "User receives email updates and can track the complaint until it is resolved.",
    icon: "✅",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="bg-slate-900 py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-center text-5xl font-bold text-white">
          How It Works
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-center text-gray-400">
          Complaint resolution in four simple intelligent steps.
        </p>

        <div className="mt-20 grid gap-8 lg:grid-cols-4">

          {steps.map((step) => (

            <div
              key={step.number}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500"
            >

              <span className="absolute right-6 top-6 text-5xl font-black text-white/10">
                {step.number}
              </span>

              <div className="text-5xl">
                {step.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}