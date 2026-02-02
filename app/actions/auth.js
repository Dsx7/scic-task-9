'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  // Hardcoded Check
  if (email === 'admin@example.com' && password === 'password123') {
    const cookieStore = await cookies()
    // Set cookie valid for 1 day
    cookieStore.set('auth_token', 'mock_token_123', { secure: true, httpOnly: true, maxAge: 86400 })
  } else {
    throw new Error('Invalid credentials')
  }
  redirect('/items')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('auth_token')
  redirect('/')
}