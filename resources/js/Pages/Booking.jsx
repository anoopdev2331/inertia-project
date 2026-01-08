import React from 'react'
import Layout from '../Shared/Layout'

export default function Booking() {
  return (
    <Layout>
      <div style={{ maxWidth: 720 }}>
        <h1>Booking</h1>
        <p>Select a service and preferred date/time to book an appointment.</p>
        <form method="POST" action="/booking-create">
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block' }}>Name</label>
            <input name="name" />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block' }}>Service</label>
            <select name="service">
              <option value="hair-cutting">Hair Cutting</option>
              <option value="hair-smoothing">Hair Smoothing</option>
              <option value="manicure">Manicure</option>
            </select>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block' }}>Preferred Date</label>
            <input name="date" type="date" />
          </div>
          <button type="submit">Request Booking</button>
        </form>
      </div>
    </Layout>
  )
}
