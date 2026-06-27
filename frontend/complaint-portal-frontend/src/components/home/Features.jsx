export default function Features() {

    const features = [

        {
            title: "Anonymous Complaints",
            desc: "Submit complaints anonymously without revealing your identity.",
            icon: "🕵️"
        },

        {
            title: "AI Analysis",
            desc: "Automatically summarize complaints using Artificial Intelligence.",
            icon: "🤖"
        },

        {
            title: "Email Notifications",
            desc: "Instant updates through email notifications.",
            icon: "📧"
        },

        {
            title: "Real Time Tracking",
            desc: "Track complaint progress anytime.",
            icon: "📊"
        }

    ];

    return (

        <section
            id="features"
            className="bg-slate-950 py-28">

            <div className="mx-auto max-w-7xl px-8">

                <h2 className="text-center text-5xl font-bold text-white">

                    Why ShadowSpeak?

                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-center text-gray-400">

                    Everything required for secure,
                    transparent and intelligent complaint
                    management.

                </p>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {

                        features.map((feature,index)=>(

                            <div
                                key={index}
                                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-500">

                                <div className="text-5xl">

                                    {feature.icon}

                                </div>

                                <h3 className="mt-6 text-2xl font-semibold text-white">

                                    {feature.title}

                                </h3>

                                <p className="mt-4 leading-7 text-gray-400">

                                    {feature.desc}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}