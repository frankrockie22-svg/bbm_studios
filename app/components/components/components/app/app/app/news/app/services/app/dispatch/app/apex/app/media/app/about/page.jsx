import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const pillars = [
  { icon: '🎬', label: 'Film & Original IP' },
  { icon: '📸', label: 'Photography' },
  { icon: '🎥', label: 'Videography' },
  { icon: '🎙️', label: 'Podcast Production' },
  { icon: '✍️', label: 'Content Creation' },
  { icon: '📣', label: 'Brand Advertising' },
  { icon: '📰', label: 'BBM Dispatch' },
  { icon: '🤖', label: 'AI Media Tools' },
]

export default function AboutPage() {
  return (
    <main className="bg-bbmBlack min-h-screen text-white font-body">
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-3">
          Who We Are
        </p>
        <h1 className="font-heading text-6xl tracking-widest mb-6">
          ABOUT BBM STUDIOS
        </h1>
      </section>

      <section className="bg-bbmGray py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl tracking-widest text-bbmGold mb-8">
            THE STUDIO
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            BBM Studios — Big Black Mister Studios — is a Kenyan creative
            production company founded on one belief: African stories deserve
            world-class execution.
          </p>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            We are filmmakers, writers, photographers, videographers, podcast
            producers, and brand strategists. We work with brands, media houses,
            broadcasters, and independent creators to produce content that moves
            people and builds businesses.
          </p>
          <p className="text-gray-300 text-xl leading-relaxed">
            From the streets of Nairobi to streaming platforms across the world,
            BBM Studios is building the next chapter of African media.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-heading text-4xl tracking-widest text-bbmGold mb-10 text-center">
          WHAT WE COVER
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="bg-bbmGray border border-gray-800 hover:border-bbmGold transition rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-3">{p.icon}</div>
              <p className="font-heading text-lg tracking-widest">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bbmGray py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <img
            src="/founder.jpg"
            alt="Frank — Founder BBM Studios"
            className="w-48 h-48 rounded-full object-cover border-2 border-bbmGold shrink-0"
          />
          <div>
            <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-3">
              The Founder
            </p>
            <h2 className="font-heading text-4xl tracking-widest mb-4">
              FRANK
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Frank is a writer, producer, and media strategist based in Nairobi,
              Kenya. He founded BBM Studios to create a creative home for bold
              African narratives and high-quality production across every format —
              from original screenplays to brand campaigns to football publishing.
              His debut football magazine, BBM Dispatch, launched in June 2026.
              His original screenplay APEX is positioned for Netflix Africa,
              Showmax, and Prime Video Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-head
