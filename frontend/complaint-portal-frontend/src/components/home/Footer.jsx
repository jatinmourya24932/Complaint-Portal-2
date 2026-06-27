export default function Footer() {

    return (

        <footer
            id="contact"
            className="border-t border-white/10 bg-slate-950">

            <div className="mx-auto max-w-7xl px-8 py-16">

                <div className="grid gap-10 lg:grid-cols-3">

                    <div>

                        <h2 className="text-3xl font-bold text-white">

                            ShadowSpeak
                            <span className="text-violet-500">

                                2.0

                            </span>

                        </h2>

                        <p className="mt-5 leading-7 text-gray-400">

                            AI Powered Anonymous Complaint &
                            Grievance Management Platform
                            for Colleges and Organizations.

                        </p>

                    </div>

                    <div>

                        <h3 className="text-xl font-semibold text-white">

                            Quick Links

                        </h3>

                        <div className="mt-5 space-y-3 text-gray-400">

                            <p>Home</p>

                            <p>Features</p>

                            <p>Workflow</p>

                            <p>Track Complaint</p>

                        </div>

                    </div>

                    <div>

                        <h3 className="text-xl font-semibold text-white">

                            Contact

                        </h3>

                        <div className="mt-5 space-y-3 text-gray-400">

                            <p>support@shadowspeak.ai</p>

                            <p>+91 XXXXX XXXXX</p>

                            <p>India</p>

                        </div>

                    </div>

                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-500">

                    © 2026 ShadowSpeak 2.0.
                    All Rights Reserved.

                </div>

            </div>

        </footer>

    );

}