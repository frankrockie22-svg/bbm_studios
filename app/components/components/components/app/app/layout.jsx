import './globals.css'

export const metadata = {
  title: 'BBM Studios — Big Black Mister Studios',
  description: 'Kenyan creative production company. Film, photography, videography, podcast, content creation and brand advertising.',
  keywords: 'BBM Studios, Kenyan film, African media, BBM Dispatch, APEX screenplay, Nairobi production',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
