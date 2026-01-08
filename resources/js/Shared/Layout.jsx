import React from 'react'
import { Link, usePage } from '@inertiajs/react'
import Flash from './Flash'

export default function Layout({ children }) {
  const { props } = usePage()
  const auth = (props && props.auth) || {}
  const user = auth.user

  return (
    <div>
      <header className="site-header">
        <div className="container">
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Link href="/">
              <img src="/images/logo.svg" alt="Salon" className="logo" />
            </Link>
            <nav style={{ display: 'flex', gap: 12 }}>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/booking">Booking</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          <div>
            {user ? (
              <>
                <span style={{ marginRight: 12 }}>Hello, {user.name}</span>
                <form style={{ display: 'inline' }} method="post" action="/logout">
                  <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')} />
                  <button type="submit">Logout</button>
                </form>
              </>
            ) : (
              <>
                <Link href="/login">Login</Link>
                {' '}
                <Link href="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main>
        <Flash />
        {children}
      </main>
    </div>
  )
}
