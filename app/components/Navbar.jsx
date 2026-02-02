import Link from 'next/link'
import { logout } from '../actions/auth'

export default function Navbar({ isAdmin }) {
  if (isAdmin) {
    // --- ADMIN NAVBAR ---
    return (
      <nav className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="font-mono font-bold tracking-widest text-emerald-500 text-xs md:text-sm">ADMIN_PANEL</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm font-mono text-zinc-400">
            <Link href="/items" className="hover:text-white transition-colors">DB</Link>
            <Link href="/add-item" className="hover:text-white transition-colors">NEW</Link>
            <form action={logout}>
              <button className="text-rose-500 hover:text-rose-400 uppercase">EXIT</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }

  // --- PUBLIC NAVBAR ---
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-slate-900">
          Luxe<span className="text-indigo-600">Market</span>.
        </Link>
        <div className="flex items-center gap-4 md:gap-8 font-medium text-slate-600">
          <Link href="/items" className="hover:text-indigo-600 transition-colors text-sm md:text-base">Shop</Link>
          <Link href="/login" className="px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all text-xs md:text-sm font-bold">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  )
}