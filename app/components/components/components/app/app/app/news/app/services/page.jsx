import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const services = [
  {
    icon: '🎬',
    title: 'Film Production & Screenplays',
    description:
      'We develop and produce original African stories for film and streaming. From concept to final cut, BBM Studios handles creative development, scriptwriting, and production. Our original IP — including the crime thriller APEX — is built for platforms like Netflix Africa, Showmax, and Prime Video Africa.',
  },
  {
    icon: '📸',
    title: 'Photography',
    description:
      'Professional photography for brands, events, editorial, and campaigns. We shoot with intention — every frame tells the story you need told. From corporate headshots to full campaign shoots, we deliver images that work.',
  },
  {
    icon: '🎥',
    title: 'Videography',
    description:
      'From corporate videos to documentary-style brand films, our videography captures your message with cinematic quality. We handle production and post. If it moves, we shoot it right.',
  },
  {
    icon: '🎙️',
    title: 'Podcast Production',
    description:
      'We produce, record, edit, and distribute podcasts for brands, personalities, and media houses. Have a story worth hearing? We will help the world hear it — professionally packaged and platform-ready.',
  },
  {
    icon: '✍️',
    title: 'Content Creation',
    description:
      'Social media content, digital campaigns, written editorial, and creative assets — produced consistently and built to perform. We understand the African digital audience and create content that actually lands.',
  },
  {
    icon: '📣',
    title: 'Brand Advertising',
    description:
      'Strategic creative campaigns that connect brands to audiences. From concept to execution, we build advertising that does not just look good — it works. Local market knowledge. Global creative standards.',
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-bbmBlack min-h-screen text-white font-body">
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-3">
          What We Do
        </p>
        <h1 className="font-heading text-6xl tracking-widest mb-6">
          OUR SERVICES
        </h1>
        <p className="text-gray-400 text-lg">
          Full-spectrum creative production. One studio. Endless possibilities.
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-bbmGray border border-gray-800 hover:border-bbmGold transition-all rounded-lg p-10"
            >
              <div className="text-5xl mb-5">{s.icon}</div>
              <h2 className="font-heading text-3xl tracking-widest text-bbmGold mb-4">
                {s.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-bbmGray py-20 px-6 text-center">
        <h2 className="font-heading text-5xl tracking-widest mb-6">
          LET'S TALK ABOUT YOUR PROJECT
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Ready to work with a studio that delivers? Get in touch today.
        </p>
        <Link
          href="/contact"
          className="bg-bbmGold text-black px-8 py-3 font-heading text-lg tracking-widest hover:opacity-90 transition"
        >
          CONTACT US
        </Link>
      </section>
      <Footer />
    </main>
  )
          }
