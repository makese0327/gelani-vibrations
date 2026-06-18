export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-blue-400 mb-4">
          Sound • Frequency • Expression
        </p>

        <h1 className="text-6xl md:text-8xl font-light mb-6">
          Gelani Vibrations
        </h1>

        <p className="max-w-2xl text-lg text-gray-300">
          Welcome to the digital home of KESEH. A space for music,
          creativity, philosophy, culture, and expression.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/music"
            className="bg-blue-500 text-black px-6 py-3 rounded-xl font-medium"
          >
            Listen
          </a>

          <a
            href="/thoughts"
            className="border border-gray-700 px-6 py-3 rounded-xl"
          >
            Read Thoughts
          </a>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="grid md:grid-cols-3 gap-6 px-6 pb-24 max-w-6xl mx-auto">
        <div className="border border-gray-800 p-6 rounded-2xl">
          <h2 className="text-2xl mb-3">Music</h2>
          <p className="text-gray-400">
            Albums, singles, remixes, and sonic experiments.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-2xl">
          <h2 className="text-2xl mb-3">Thoughts</h2>
          <p className="text-gray-400">
            Reflections, poetry, philosophy, and journal entries.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-2xl">
          <h2 className="text-2xl mb-3">Shop</h2>
          <p className="text-gray-400">
            Wear the frequency. Merch and exclusive drops.
          </p>
        </div>
      </section>
    </main>
  );
}
