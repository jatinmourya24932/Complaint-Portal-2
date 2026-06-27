const stats = [
  {
    value: "25K+",
    title: "Complaints Submitted",
  },
  {
    value: "18K+",
    title: "Complaints Resolved",
  },
  {
    value: "500+",
    title: "Institutions",
  },
  {
    value: "99%",
    title: "Resolution Rate",
  },
];

export default function Statistics() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-700/20 to-blue-700/20 p-12 backdrop-blur-xl">

          <h2 className="text-center text-5xl font-bold text-white">

            Trusted By Thousands

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-gray-400">

            ShadowSpeak helps institutions resolve complaints faster,
            securely and transparently.

          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {stats.map((item) => (

              <div
                key={item.title}
                className="text-center"
              >

                <h2 className="text-5xl font-black text-violet-400">

                  {item.value}

                </h2>

                <p className="mt-3 text-gray-300">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}