import React from 'react'
import Layout from '../Shared/Layout'

export default function Contact() {
  return (
    <Layout>
      <div style={{ maxWidth: 720 }}>
        <h1>Contact Us</h1>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Salon Street, City</p>
        <h2>Send us a message</h2>
        <form method="POST" action="/contact-send">
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block' }}>Your name</label>
            <input name="name" placeholder="Your name" />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block' }}>Email</label>
            <input name="email" type="email" placeholder="you@example.com" />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block' }}>Message</label>
            <textarea name="message" rows="4" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  )
}
