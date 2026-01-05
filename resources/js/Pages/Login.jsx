import React from 'react'
import { Link } from '@inertiajs/react'
import Flash from '../Shared/Flash'

export default function Login() {
  // Simple HTML form for beginners - posts to server directly
  const token = typeof document !== 'undefined' ? document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') : ''

  return (
    <div style={{ maxWidth: 480, margin: '3rem auto' }}>
      <h1>Login</h1>
      <Flash />
      <form method="POST" action="/login">
        <input type="hidden" name="_token" value={token || ''} />

        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block' }}>Email</label>
          <input name="email" type="email" autoComplete="email" required style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block' }}>Password</label>
          <input name="password" type="password" autoComplete="current-password" required style={{ width: '100%' }} />
        </div>

        <div style={{ marginTop: 10 }}>
          <button type="submit">Login</button>
        </div>
      </form>

      <p style={{ marginTop: 12 }}>
        Need an account? <Link href="/register">Register</Link>
      </p>
    </div>
  )
}

