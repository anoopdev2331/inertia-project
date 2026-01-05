import React from 'react'

export default function Dashboard() {
  function logout() {
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = '/logout'
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = '_token'
    input.value = token || ''
    form.appendChild(input)
    document.body.appendChild(form)
    form.submit()
  }

  return (
    <div style={{ maxWidth: 720, margin: '3rem auto' }}>
      <h1>Dashboard</h1>
      <p>Welcome — you are logged in.</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
