import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsCard from '@/components/NewsCard'

async function getFootballNews() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=football+soccer&sortBy=publishedAt&pageSize=12&apiKey=${process.env.NEWS_API_KEY}`,
      { next: { revalidate: 21600 } }
    )
    const data = await res.json()
    return data.articles || []
  } catch (error) {
    return []
  }
}

function timeAgo(dateString) {
  const now = new Date()
  const then = new Date(dateString)
  const diff = Math.floor((now - then) / 60000)
  if (diff < 60) return `${diff}m ago`
  if (diff < 1440) return `${Math.floor(diff / 60)}h ago`
  return `${Math.floor(diff / 1440)}d ago`
}

export default async function NewsPage() {
  const articles = await getFootballNews()

  return (
    <main className="bg-bbmBlack min-h-screen text-white font-body">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-bbmGold text-xs tracking-[0.3em] uppercase mb-3">
            Live Feed
          </p>
          <h1 className="font-heading text-6xl tracking-widest mb-4">
            LATEST IN FOOTBALL
          </h1>
          <p className="text-gray-400 text-lg">
            Breaking news. BBM style. Updated every 6 hours.
          </p>
        </div>
        {articles.length === 0 ? (
          <p className="text-center text-gray-500">
            Loading the latest stories... Check back shortly.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <NewsCard
                key={i}
                title={article.title}
                summary={article.description}
                image={article.urlToImage}
                source={article.source?.name}
                url={article.url}
                time={timeAgo(article.publishedAt)}
              />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  )
    }
