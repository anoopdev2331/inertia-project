import React from 'react'
import { Link } from '@inertiajs/react'
import Flash from '../Shared/Flash'

export default function Register() {
  // Simple HTML form: beginner-friendly, no React hooks needed.
  // The server will validate and redirect; include CSRF token via meta tag.
  const token = typeof document !== 'undefined' ? document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') : ''

  return (
    <div style={{ maxWidth: 480, margin: '3rem auto' }}>
      <h1>Register</h1>
      <Flash />
      <form method="POST" action="/register">
        <input type="hidden" name="_token" value={token || ''} />

        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block' }}>Name</label>
          <input name="name" autoComplete="name" required style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block' }}>Email</label>
          <input name="email" type="email" autoComplete="email" required style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block' }}>Password</label>
          <input name="password" type="password" autoComplete="new-password" required style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'block' }}>Confirm Password</label>
          <input name="password_confirmation" type="password" autoComplete="new-password" required style={{ width: '100%' }} />
        </div>

        <div style={{ marginTop: 10 }}>
          <button type="submit">Register</button>
        </div>
      </form>

      <p style={{ marginTop: 12 }}>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  )
}
