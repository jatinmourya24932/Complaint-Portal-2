import { Link } from "react-router-dom";

export default function Navbar() {

    return (

        <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

                {/* Logo */}

                <div>

                    <h1 className="text-2xl font-bold text-white">

                        Shadow<span className="text-violet-500">Speak</span>

                        <span className="ml-2 text-sm text-gray-400">
                            2.0
                        </span>

                    </h1>

                </div>

                {/* Menu */}

                <div className="hidden gap-10 text-gray-300 lg:flex">

                    <Link
                        className="transition hover:text-violet-400"
                        to="/">

                        Home

                    </Link>

                    <a
                        className="transition hover:text-violet-400"
                        href="#features">

                        Features

                    </a>

                    <a
                        className="transition hover:text-violet-400"
                        href="#workflow">

                        Workflow

                    </a>

                    <a
                        className="transition hover:text-violet-400"
                        href="#contact">

                        Contact

                    </a>

                </div>

                {/* Login */}

                <button
                    className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105">

                    Login

                </button>

            </div>

        </nav>

    );

}