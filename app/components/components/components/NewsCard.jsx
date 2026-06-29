export default function NewsCard({ title, summary, image, source, url, time }) {
  return (
    <div className="bg-bbmGray border border-gray-800 hover:border-bbmGold transition-all rounded-lg overflow-hidden">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        <p className="text-bbmGold text-xs font-body uppercase tracking-widest mb-2">
          {source} · {time}
        </p>
        <h3 className="text-white font-heading text-xl leading-tight mb-3">
          {title}
        </h3>
        <p className="text-gray-400 text-sm font-body leading-relaxed mb-4">
          {summary}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-bbmGold text-sm font-body hover:underline"
        >
          Read Full Story →
        </a>
      </div>
    </div>
  )
}
