import { useNavigate } from "react-router-dom";

export default function Hero() {

    const navigate = useNavigate();

    return (

        <section className="relative overflow-hidden bg-slate-950 pt-36 pb-24">

            <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />

            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[180px]" />

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">

                <div>

                    <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">

                        AI Powered Complaint Management

                    </span>

                    <h1 className="mt-8 text-6xl font-black leading-tight text-white">

                        Where Every

                        <span className="block text-violet-500">

                            Voice Matters.

                        </span>

                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

                        ShadowSpeak 2.0 is an AI Powered Anonymous Complaint &
                        Grievance Management Platform built for educational
                        institutions and organizations.

                    </p>

                    <div className="mt-10 flex gap-5">

                        <button
                            onClick={() => navigate("/login")}
                            className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105">

                            🚀 File Complaint

                        </button>

                        <button
                            onClick={() => navigate("/track")}
                            className="rounded-xl border border-violet-500 px-8 py-4 font-semibold text-violet-300 transition hover:bg-violet-600 hover:text-white">

                            🔍 Track Complaint

                        </button>

                    </div>

                    <div className="mt-12 flex flex-wrap gap-4">

    <div className="rounded-xl border border-violet-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl">

        <p className="text-sm text-gray-400">
            AI Powered
        </p>

        <h3 className="text-lg font-semibold text-white">
            Complaint Analysis
        </h3>

    </div>

    <div className="rounded-xl border border-violet-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl">

        <p className="text-sm text-gray-400">
            Anonymous
        </p>

        <h3 className="text-lg font-semibold text-white">
            Reporting
        </h3>

    </div>

    <div className="rounded-xl border border-violet-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl">

        <p className="text-sm text-gray-400">
            Secure
        </p>

        <h3 className="text-lg font-semibold text-white">
            JWT Authentication
        </h3>

    </div>

</div>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

    <div className="flex h-[450px] items-center justify-center">

        <div className="text-center">

            <div className="mb-6 text-8xl">

                🛡️

            </div>

            <h2 className="text-3xl font-bold text-white">

                Secure Complaint Portal

            </h2>

            <p className="mt-4 text-gray-400">

                AI Powered Complaint Resolution
                with Anonymous Reporting

            </p>

        </div>

    </div>

</div>

                </div>

            

        </section>

    );

}