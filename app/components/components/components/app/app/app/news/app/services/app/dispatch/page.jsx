import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const issues = [
  {
    number: '01',
    title: 'Issue 01 — June 2026',
    description:
      'Renard takes Tunisia. Diomande\'s €100M rise. Bayern close Saibari deal. FKF Cup history. Shabana FC pay revolt. Ian Simiyu MVP. World Cup watchlist. AFCON 2027 infrastructure.',
    status: 'available',
    file: '/dispatch/bbm-dispatch-issue-01.pdf',
  },
  {
    number: '02',
    title: 'Issue 02',
    description: 'Coming soon. The next chapter of African football coverage.',
    status: 'coming',
    file: null,
  },
]

export default function DispatchPage() {
  return (
    <main className="bg-bbmBlack min-h-screen text-white font-body">
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-3">
          The Magazine
        </p>
        <h1 className="font-heading text-6xl tracking-widest mb-6">
          BBM DISPATCH
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
          The football magazine for Africa. No filter. No filler. Raw analysis,
          transfer news, Kenyan football coverage, and the stories the mainstream
          won't touch.
        </p>
      </section>
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {issues.map((issue) => (
            <div
              key={issue.number}
              className="bg-bbmGray border border-gray-800 hover:border-bbmGold transition-all rounded-lg overflow-hidden"
            >
              <div className="bg-gradient-to-br from-bbmGold to-yellow-700 h-64 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-black font-heading text-2xl tracking-widest">
                    BBM DISPATCH
                  </p>
                  <p className="text-black font-heading text-6xl">
                    {issue.number}
                  </p>
                </div>
              </div>
              <div className="p-8">
                <h2 className="font-heading text-3xl tracking-widest text-white mb-3">
                  {issue.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {issue.description}
                </p>
                {issue.status === 'available' ? (
                  <a
                    href={issue.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-bbmGold text-black px-6 py-3 font-heading text-lg tracking-widest hover:opacity-90 transition inline-block"
                  >
                    DOWNLOAD ISSUE →
                  </a>
                ) : (
                  <span className="border border-gray-600 text-gray-500 px-6 py-3 font-heading text-lg tracking-widest inline-block">
                    COMING SOON
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-bbmGray py-20 px-6 text-center">
        <h2 className="font-heading text-5xl tracking-widest mb-4">
          STAY AHEAD
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Get notified when a new issue drops.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-bbmBlack border border-gray-700 text-white px-5 py-3 flex-1 focus:outline-none focus:border-bbmGold"
          />
          <button className="bg-bbmGold text-black px-6 py-3 font-heading tracking-widest hover:opacity-90 transition">
            SUBSCRIBE
          </button>
        </div>
      </section>
      <Footer />
    </main>
  )
                    }
