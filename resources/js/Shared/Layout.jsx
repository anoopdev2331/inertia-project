import React from 'react'
import { Link, usePage } from '@inertiajs/react'
import Flash from './Flash'

export default function Layout({ children }) {
  const { props } = usePage()
  const auth = (props && props.auth) || {}
  const user = auth.user

  return (
    <div>
      <header style={{ padding: 12, borderBottom: '1px solid var(--border-color)', background: 'var(--header-bg)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Link href="/">Home</Link>
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

      <main style={{ maxWidth: 960, margin: '1.5rem auto', padding: '0 12px' }}>
        <Flash />
        {children}
      </main>
    </div>
  )
}
