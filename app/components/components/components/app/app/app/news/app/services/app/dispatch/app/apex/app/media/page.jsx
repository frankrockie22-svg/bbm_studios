import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MediaPage() {
  return (
    <main className="bg-bbmBlack min-h-screen text-white font-body">
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-3">
          Portfolio
        </p>
        <h1 className="font-heading text-6xl tracking-widest mb-6">
          OUR WORK
        </h1>
        <p className="text-gray-400 text-lg">
          A look at what we've built — and what we're building.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="font-heading text-4xl tracking-widest text-bbmGold mb-8">
          VIDEOGRAPHY
        </h2>
        <div className="bg-bbmGray border border-gray-800 rounded-lg h-80 flex items-center justify-center mb-4">
          <p className="text-gray-500 text-center">
            🎥 Your video reel goes here
            <br />
            <span className="text-xs">Paste YouTube or Vimeo embed link</span>
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="font-heading text-4xl tracking-widest text-bbmGold mb-8">
          PHOTOGRAPHY
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-bbmGray border border-gray-800 rounded-lg h-56 flex items-center justify-center hover:border-bbmGold transition"
            >
              <p className="text-gray-600 text-xs text-center">
                📸 Photo {i + 1}
                <br />
                Upload your image
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="font-heading text-4xl tracking-widest text-bbmGold mb-8">
          PODCAST
        </h2>
        <div className="bg-bbmGray border border-gray-800 rounded-lg p-10 flex items-center justify-center">
          <p className="text-gray-500 text-center">
            🎙️ Paste your Spotify embed code here
            <br />
            <span className="text-xs">Spotify → Share → Embed Episode</span>
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="font-heading text-4xl tracking-widest text-bbmGold mb-8">
          CONTENT CREATION
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-bbmGray border border-gray-800 rounded-lg h-56 flex items-center justify-center hover:border-bbmGold transition"
            >
              <p className="text-gray-600 text-xs text-center">
                ✍️ Post {i + 1}
                <br />
                Upload graphic
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="font-heading text-4xl tracking-widest text-bbmGold mb-8">
          BRAND CAMPAIGNS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="bg-bbmGray border border-gray-800 hover:border-bbmGold transition rounded-lg p-8"
            >
              <p className="text-gray-600 text-xs mb-3">📣 Campaign {i + 1}</p>
              <p className="font-heading text-2xl tracking-widest text-white mb-2">
                Client Name
              </p>
              <p className="text-gray-400 text-sm">
                Add your campaign description and results here.
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
