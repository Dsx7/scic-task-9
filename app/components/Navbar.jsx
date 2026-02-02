import Link from 'next/link'
import { cookies } from 'next/headers'
import { logout } from '../actions/auth'

export default async function Navbar() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')
  const isLoggedIn = !!token

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center border-b">
      <Link href="/" className="font-bold text-xl text-blue-600">MarketApp</Link>
      <div className="flex gap-6 items-center">
        <Link href="/items" className="hover:text-blue-600">Items</Link>
        {isLoggedIn ? (
          <>
            <Link href="/add-item" className="hover:text-blue-600">Add Item</Link>
            <form action={logout}>
              <button className="text-red-500 hover:text-red-700">Logout</button>
            </form>
          </>
        ) : (
          <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</Link>
        )}
      </div>
    </nav>
  )
}