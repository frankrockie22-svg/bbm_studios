import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ApexPage() {
  return (
    <main className="bg-bbmBlack min-h-screen text-white font-body">
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-b from-bbmBlack via-bbmGray to-bbmBlack">
        <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-4">
          Original IP — BBM Studios
        </p>
        <h1 className="font-heading text-8xl md:text-[12rem] tracking-widest mb-4 leading-none">
          APEX
        </h1>
        <p className="text-gray-300 text-xl max-w-2xl mb-10 leading-relaxed">
          A Kenyan crime thriller set in the world of online sports betting and
          fintech. Original screenplay. Streaming-ready.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/contact"
            className="bg-bbmGold text-black px-8 py-3 font-heading text-lg tracking-widest hover:opacity-90 transition"
          >
            REQUEST SCRIPT
          </Link>
          <a
            href="#story"
            className="border border-bbmGold text-bbmGold px-8 py-3 font-heading text-lg tracking-widest hover:bg-bbmGold hover:text-black transition"
          >
            READ THE STORY
          </a>
        </div>
      </section>

      <section id="story" className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-4">
          The Story
        </p>
        <h2 className="font-heading text-5xl tracking-widest mb-8">LOGLINE</h2>
        <p className="text-gray-300 text-xl leading-relaxed mb-16 border-l-4 border-bbmGold pl-6">
          When Victor Omondi is framed by his business partner Conrad Nzioka,
          he loses everything — his company, his freedom, his name. What follows
          is a calculated rebuild through a network of allies, a nightclub called
          ONYX, and a crash-betting platform that puts him back in the game. But
          in Nairobi's world of fintech and online sports betting, the line
          between justice and revenge disappears fast.
        </p>

        <h2 className="font-heading text-5xl tracking-widest mb-8">THE WORLD</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: 'Setting', value: 'Nairobi, Kenya' },
            { label: 'Genre', value: 'Crime Thriller' },
            { label: 'Format', value: 'Feature Film / Series' },
          ].map((item) => (
            <div key={item.label} className="bg-bbmGray border border-gray-800 p-6 rounded-lg">
              <p className="text-bbmGold text-xs tracking-widest uppercase mb-2">{item.label}</p>
              <p className="text-white font-heading text-2xl">{item.value}</p>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-5xl tracking-widest mb-8">THE CHARACTERS</h2>
        <div className="space-y-6 mb-16">
          {[
            {
              name: 'VICTOR OMONDI',
              role: 'Protagonist',
              desc: 'Framed fintech entrepreneur rebuilding from nothing. Strategic. Controlled. Dangerous when cornered.',
            },
            {
              name: 'CONRAD NZIOKA',
              role: 'Antagonist',
              desc: 'Victor\'s former business partner. The architect of the frame. More afraid than he looks.',
            },
            {
              name: 'LEON',
              role: 'Hacker / Ally',
              desc: 'The crew\'s digital weapon. Quiet. Precise. Loyal.',
            },
            {
              name: 'MAINA',
              role: 'Muscle / Ally',
              desc: 'Fighter. Protector. The one you want on your side when things go wrong.',
            },
          ].map((c) => (
            <div key={c.name} className="bg-bbmGray border border-gray-800 hover:border-bbmGold transition p-6 rounded-lg flex gap-6">
              <div className="min-w-[120px]">
                <p className="text-bbmGold font-heading text-lg tracking-widest">{c.name}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{c.role}</p>
