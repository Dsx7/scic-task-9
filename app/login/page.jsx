'use client'
import { login } from '../actions/auth'
export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <form action={login} className="p-8 bg-black rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <div className="mb-4">
            <label className="block text-sm mb-1">Email (admin@example.com)</label>
            <input name="email" type="email" required className="w-full border p-2 rounded" />
        </div>
        <div className="mb-6">
            <label className="block text-sm mb-1">Password (password123)</label>
            <input name="password" type="password" required className="w-full border p-2 rounded" />
        </div>
        <button className="w-full bg-blue-600 text-black p-2 rounded hover:bg-blue-700">
            Sign In
        </button>
      </form>
    </div>
  );
}