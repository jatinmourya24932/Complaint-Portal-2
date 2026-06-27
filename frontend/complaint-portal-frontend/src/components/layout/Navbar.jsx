import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <Link to="/" className="flex items-center gap-2">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-xl font-bold text-white">
            S
          </div>

          <div>

            <h1 className="text-xl font-bold text-white">
              ShadowSpeak
              <span className="ml-1 text-violet-400">
                2.0
              </span>
            </h1>

            <p className="text-xs text-gray-400">
              AI Complaint Portal
            </p>

          </div>

        </Link>

        <div className="hidden items-center gap-10 text-sm text-gray-300 lg:flex">

          <a href="#features" className="hover:text-violet-400">
            Features
          </a>

          <a href="#workflow" className="hover:text-violet-400">
            Workflow
          </a>

          <a href="#contact" className="hover:text-violet-400">
            Contact
          </a>

        </div>

        <Link
          to="/login"
          className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}