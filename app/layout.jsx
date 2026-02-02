import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'MarketApp',
  description: 'A Next.js 15 Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        
        <div className="flex-grow">
          {children}
        </div>

        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
          © 2026 MarketApp. All rights reserved.
        </footer>
      </body>
    </html>
  )
}