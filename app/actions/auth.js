'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  // Hardcoded Admin Credentials
  if (email === 'admin@example.com' && password === 'password123') {
    const cookieStore = await cookies()
    cookieStore.set('auth_token', 'admin_secret_token', { secure: true, httpOnly: true, maxAge: 86400 })
  } else {
    // For demo purposes, we just return
    return;
  }
  redirect('/items')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('auth_token')
  redirect('/')
}