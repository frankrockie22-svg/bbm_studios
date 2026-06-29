export default function Footer() {
  return (
    <footer className="bg-bbmBlack border-t border-bbmGold mt-20 py-10 px-6 text-center">
      <p className="text-bbmGold font-heading text-2xl tracking-widest mb-2">
        BBM STUDIOS
      </p>
      <p className="text-gray-400 text-sm font-body mb-4">
        Big Black Mister Studios — Nairobi, Kenya
      </p>
      <div className="flex justify-center gap-6 text-gray-400 text-sm mb-6">
        <a href="#" className="hover:text-bbmGold">Facebook</a>
        <a href="#" className="hover:text-bbmGold">Instagram</a>
        <a href="#" className="hover:text-bbmGold">YouTube</a>
        <a href="#" className="hover:text-bbmGold">Spotify</a>
      </div>
      <p className="text-gray-600 text-xs">
        © 2026 BBM Studios. All Rights Reserved.
      </p>
    </footer>
  )
}
