import './globals.css'
import Navbar from './components/Navbar'
import { cookies } from 'next/headers'

export const metadata = {
  title: 'Next.js Marketplace',
  description: 'Full stack demo app',
}

export default async function RootLayout({ children }) {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')
  const isAdmin = !!token

  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col antialiased ${isAdmin ? 'admin-mode' : ''}`}>
        <Navbar isAdmin={isAdmin} />
        <main className="flex-grow">
          {children}
        </main>
        
        {!isAdmin && (
          <footer className="bg-slate-50 border-t border-slate-200 py-12 text-center text-slate-500 text-sm">
            <p>© 2026 LuxeMarket Inc. Built with Next.js 16.</p>
          </footer>
        )}
      </body>
    </html>
  )
}