'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

const services = [
  'Film Production & Screenplays',
  'Photography',
  'Videography',
  'Podcast Production',
  'Content Creation',
  'Brand Advertising',
  'APEX — Rights & Co-Production',
  'BBM Dispatch — Partnership',
  'Other',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-bbmBlack min-h-screen text-white font-body">
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-3">
          Get In Touch
        </p>
        <h1 className="font-heading text-6xl tracking-widest mb-6">
          LET'S BUILD SOMETHING
        </h1>
        <p className="text-gray-400 text-lg">
          Whether you're a brand, broadcaster, or creator — BBM Studios is ready.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          {submitted ? (
            <div className="bg-bbmGray border border-bbmGold rounded-lg p-10 text-center">
              <p className="text-bbmGold font-heading text-4xl tracking-widest mb-4">
                RECEIVED.
              </p>
              <p className="text-gray-300">
                We'll be in touch shortly. Asante.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                required
                type="text"
                placeholder="Your Name"
                className="bg-bbmGray border border-gray-700 text-white px-5 py-4 focus:outline-none focus:border-bbmGold transition"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                className="bg-bbmGray border border-gray-700 text-white px-5 py-4 focus:outline-none focus:border-bbmGold transition"
              />
              <input
                type="text"
                placeholder="Company / Organization (optional)"
                className="bg-bbmGray border border-gray-700 text-white px-5 py-4 focus:outline-none focus:border-bbmGold transition"
              />
              <select
                required
                className="bg-bbmGray border border-gray-700 text-white px-5 py-4 focus:outline-none focus:border-bbmGold transition"
              >
                <option value="">Service Interested In</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="bg-bbmGray border border-gray-700 text-white px-5 py-4 focus:outline-none focus:border-bbmGold transition resize-none"
              />
              <button
                type="submit"
                className="bg-bbmGold text-black px-8 py-4 font-heading text-lg tracking-widest hover:opacity-90 transition"
              >
                SEND MESSAGE →
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col gap-8 justify-start pt-2">
          <div>
            <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-3">
              Direct Contact
            </p>
            <p className="text-gray-300 text-lg mb-1">📧 frankrockie22@gmail.com</p>
            <p className="text-gray-300 text-lg mb-1">📱 +254 705 221 349</p>
            <p className="text-gray-300 text-lg">📍 Nairobi, Kenya</p>
          </div>

          <div>
            <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-3">
              Follow BBM Studios
            </p>
            <div className="flex flex-col gap-2">
              {['Facebook', 'Instagram', 'YouTube', 'Spotify'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-gray-300 hover:text-bbmGold transition text-lg"
                >
                  → {s}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-bbmGray border border-gray-800 p-6 rounded-lg">
            <p className="text-bbmGold font-heading text-2xl tracking-widest mb-2">
              APEX INQUIRIES
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              For script requests, co-production, or rights inquiries regarding
              APEX — use the form and select APEX from the dropdown.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
                }
