import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('auth_token')
  const protectedRoutes = ['/add-item']

  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
}

export const config = { matcher: ['/add-item'] }