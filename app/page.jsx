import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const services = [
  { icon: '🎬', title: 'Film & Screenplays' },
  { icon: '📸', title: 'Photography' },
  { icon: '🎥', title: 'Videography' },
  { icon: '🎙️', title: 'Podcast Production' },
  { icon: '✍️', title: 'Content Creation' },
  { icon: '📣', title: 'Brand Advertising' },
]

export default function HomePage() {
  return (
    <main className="bg-bbmBlack min-h-screen text-white font-body">
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-b from-bbmBlack via-bbmGray to-bbmBlack">
        <p className="text-bbmGold text-sm tracking-[0.3em] uppercase mb-4">
          Big Black Mister Studios
        </p>
        <h1 className="font-heading text-6xl md:text-9xl tracking-widest mb-6 leading-none">
          BBM STUDIOS
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mb-10 leading-relaxed">
          We Create. We Produce. We Tell Stories That Matter.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/media" className="bg-bbmGold text-black px-8 py-3 font-heading text-lg tracking-widest hover:opacity-90 transition">
            OUR WORK
          </Link>
          <Link href="/contact" className="border border-bbmGold text-bbmGold px-8 py-3 font-heading text-lg tracking-widest hover:bg-bbmGold hover:text-black transition">
            WORK WITH US
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-heading text-5xl text-bbmGold tracking-widest text-center mb-4">WHAT WE DO</h2>
        <p className="text-gray-400 text-center mb-12">Full-spectrum creative production. One studio. Endless possibilities.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="bg-bbmGray border border-gray-800 hover:border-bbmGold transition p-8 text-center rounded-lg">
              <div className="text-4xl mb-3">{s.icon}</div>
              <p className="font-heading text-xl tracking-widest text-white">{s.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/services" className="text-bbmGold hover:underline font-body">See All Services →</Link>
        </div>
      </section>

      <section className="bg-bbmGray py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-3">The Magazine</p>
          <h2 className="font-heading text-5xl tracking-widest mb-6">BBM DISPATCH</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            The football magazine for Africa. Raw analysis, transfer news, Kenyan football coverage, and the stories the mainstream won't touch.
          </p>
          <Link href="/dispatch" className="bg-bbmGold text-black px-8 py-3 font-heading text-lg tracking-widest hover:opacity-90 transition">
            READ ISSUE 01
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-3">Original IP</p>
        <h2 className="font-heading text-6xl tracking-widest mb-6">APEX</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          A Kenyan crime thriller set in the world of online sports betting and fintech. Original screenplay. Streaming-ready.
        </p>
        <Link href="/apex" className="border border-bbmGold text-bbmGold px-8 py-3 font-heading text-lg tracking-widest hover:bg-bbmGold hover:text-black transition">
          EXPLORE APEX
        </Link>
      </section>

      <section className="bg-bbmGray py-20 px-6 text-center">
        <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-3">Live Feed</p>
        <h2 className="font-heading text-5xl tracking-widest mb-6">LATEST IN FOOTBALL</h2>
        <p className="text-gray-300 text-lg mb-8">Breaking football news. Updated every 6 hours. BBM style.</p>
        <Link href="/news" className="bg-bbmGold text-black px-8 py-3 font-heading text-lg tracking-widest hover:opacity-90 transition">
          READ THE NEWS
        </Link>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-heading text-5xl tracking-widest mb-6">READY TO BUILD SOMETHING?</h2>
        <p className="text-gray-300 text-lg mb-8">
          Whether you're a brand, broadcaster, or storyteller — BBM Studios is your creative partner.
        </p>
        <Link href="/contact" className="bg-bbmGold text-black px-8 py-3 font-heading text-lg tracking-widest hover:opacity-90 transition">
          GET IN TOUCH
        </Link>
      </section>

      <Footer />
    </main>
  )
          }
