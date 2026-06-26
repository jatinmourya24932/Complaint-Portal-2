
import { useNavigate } from "react-router-dom";



export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#020617] pt-20">

      {/* Background Glow */}

      <div className="absolute left-20 top-40 h-80 w-80 rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">

            🚀 AI Powered Complaint Management

          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white">

            ShadowSpeak

            <span className="block text-violet-500">

              2.0

            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

            AI Powered Anonymous Complaint &
            Grievance Management System for
            Colleges and Organizations.

          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-3 text-gray-300">

              ✅ Anonymous Complaint Submission

            </div>

            <div className="flex items-center gap-3 text-gray-300">

              🤖 AI Complaint Analysis

            </div>

            <div className="flex items-center gap-3 text-gray-300">

              📧 Smart Email Notifications

            </div>

            <div className="flex items-center gap-3 text-gray-300">

              📊 Real Time Complaint Tracking

            </div>

          </div>

          {/* Stats */}

          <div className="mt-12 flex flex-wrap gap-5">

            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl">

              <h2 className="text-3xl font-bold text-white">

                500+

              </h2>

              <p className="text-gray-400">

                Institutions

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl">

              <h2 className="text-3xl font-bold text-white">

                25K+

              </h2>

              <p className="text-gray-400">

                Complaints

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl">

              <h2 className="text-3xl font-bold text-white">

                99%

              </h2>

              <p className="text-gray-400">

                Resolution Rate

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex flex-col gap-5">

    <button onClick={() => navigate("/login")}
        className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105">

        🚀 File Complaint

    </button>

    <button onClick={() => navigate("/track")}
        className="rounded-xl border border-violet-500 px-8 py-4 text-lg font-semibold text-violet-300 transition hover:bg-violet-600 hover:text-white">

        🔍 Track Complaint

    </button>

</div>

      </div>

    </section>
  );
}