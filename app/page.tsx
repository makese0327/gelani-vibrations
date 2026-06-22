export default function GelaniVibrationsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_45%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_40px] opacity-20 pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10 px-6 md:px-12 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl md:text-2xl tracking-[0.3em] font-light uppercase">
            Gelani Vibrations
          </h1>
        </div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
          <a href="#music" className="hover:text-blue-400 transition">Music</a>
          <a href="#thoughts" className="hover:text-blue-400 transition">Thoughts</a>
          <a href="#shop" className="hover:text-blue-400 transition">Shop</a>
          <a href="#gallery" className="hover:text-blue-400 transition">Gallery</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 md:px-12 py-32 md:py-44 flex flex-col justify-center items-start">
        <div className="absolute right-[-100px] top-20 w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full" />

        <p className="uppercase tracking-[0.5em] text-blue-400 text-xs mb-6">
          Sound • Frequency • Wellness • Expression
        </p>

        <h2 className="text-5xl md:text-8xl font-light leading-none max-w-5xl">
          A space for
          <span className="block text-blue-400 italic mt-2">music, thought,</span>
          and vibration.
        </h2>

        <p className="mt-8 max-w-2xl text-white/70 text-lg leading-relaxed">
          Welcome to the spaceship of Gelani Vibrations — a cinematic blend of music, visual art, philosophy, energy, and creative expression.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition text-black font-medium shadow-2xl shadow-blue-500/20">
            Listen Now
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/20 hover:border-blue-400 hover:text-blue-400 transition">
            Breathe With Nature
          </button>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="px-6 md:px-12 py-24 border-t border-white/10">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="uppercase tracking-[0.4em] text-blue-400 text-xs mb-3">
              KINETIC , POETIC , LETS GET IT !
            </p>
            <h3 className="text-4xl md:text-5xl font-light">
              Music Releases
            </h3>
          </div>

          <p className="text-white/60 max-w-xl">
            Stream KESEH's oriJAHnal music, remixes, covers and sonic experiments directly from the source.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-blue-500/40 transition"
            >
              <div className="h-72 bg-gradient-to-br from-blue-500/20 to-black flex items-center justify-center text-5xl text-white/30">
                ♪
              </div>

              <div className="p-6">
                <p className="text-white/40 uppercase text-xs tracking-widest mb-2">
                  Single / EP
                </p>

                <h4 className="text-2xl font-light mb-3 group-hover:text-blue-400 transition">
                  2727
                </h4>

                <p className="text-white/60 leading-relaxed text-sm">
                  Define Yourself. Set your Model. Run it!
                </p>

                <button className="mt-6 text-blue-400 text-sm tracking-widest uppercase hover:translate-x-1 transition">
                  Listen →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thoughts */}
      <section id="thoughts" className="px-6 md:px-12 py-24 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-blue-400 text-xs mb-3">
            IT IS WHAT IT IS & ITS NOT WHAT ITS NOT
          </p>

          <h3 className="text-4xl md:text-6xl font-light leading-tight mb-10">
            Thoughts beyond the noise.
          </h3>

          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition bg-black/40"
              >
                <p className="text-white/40 text-sm mb-3">
                  March 1994
                </p>

                <h4 className="text-2xl md:text-3xl font-light mb-4 hover:text-blue-400 transition cursor-pointer">
                  FOCUS • DETOX • AMAZE YORSELF
                </h4>

                <p className="text-white/60 leading-relaxed max-w-3xl">
                  Reflections on consciousness, movement, creativity, and navigating existence through vibration and awareness.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="px-6 md:px-12 py-24 border-t border-white/10">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="uppercase tracking-[0.4em] text-blue-400 text-xs mb-3">
              Merchandise
            </p>

            <h3 className="text-4xl md:text-5xl font-light">
              Every Wear Is Frequency
            </h3>
          </div>

          <button className="border border-blue-500/40 text-blue-400 px-6 py-3 rounded-2xl hover:bg-blue-500/10 transition">
            Visit Store
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] group"
            >
              <div className="h-80 bg-gradient-to-b from-blue-500/10 to-black flex items-center justify-center text-white/20 text-2xl tracking-widest uppercase">
                Shirt Mockup
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-light group-hover:text-blue-400 transition mb-2">
                  Gelani Fi Yuh Body
                </h4>

                <p className="text-white/50 mb-4">
                  Premium Wild-crafted Vibes.
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg">$25</span>

                  <button className="px-5 py-2 rounded-xl bg-blue-500 text-black hover:bg-blue-400 transition font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-6 md:px-12 py-24 border-t border-white/10 bg-white/[0.02]">
        <p className="uppercase tracking-[0.4em] text-blue-400 text-xs mb-3">
          Life is One Big Motion Picture
        </p>

        <h3 className="text-4xl md:text-5xl font-light mb-12">
          Gallery
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/10 to-black border border-white/10 hover:scale-[1.02] transition"
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-12 py-24 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-blue-400 text-xs mb-4">
            Connect
          </p>

          <h3 className="text-4xl md:text-6xl font-light leading-tight mb-6">
            Stay tapped into the vibration.
          </h3>

          <p className="text-white/60 text-lg leading-relaxed mb-10">
            For collaborations, bookings, or simply to connect — reach out and enter the frequency.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 w-full md:w-[400px] outline-none focus:border-blue-500"
            />

            <button className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition text-black font-medium">
              Join
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-10 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-white/40 text-sm">
        <p>© 2026 Gelani Vibrations</p>

        <div className="flex gap-6 uppercase tracking-widest">
          <a href="#">Instagram</a>
          <a href="#">SoundCloud</a>
          <a href="#">YouTube</a>
        </div>
      </footer>
    </div>
  );
}
