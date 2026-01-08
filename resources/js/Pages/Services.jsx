import React from 'react'
import Layout from '../Shared/Layout'

const SERVICES = [
  {
    id: 'hair',
    name: 'Hair',
    sub: [
      { id: 'hair-cutting', name: 'Hair Cutting' },
      { id: 'hair-smoothing', name: 'Hair Smoothing' },
      { id: 'hair-color', name: 'Hair Coloring' },
    ],
  },
  {
    id: 'nail',
    name: 'Nail',
    sub: [
      { id: 'manicure', name: 'Manicure' },
      { id: 'pedicure', name: 'Pedicure' },
    ],
  },
]

export default function Services() {
  return (
    <Layout>
      <div style={{ maxWidth: 960 }}>
        <h1>Our Services</h1>
        <p>Choose a category to explore the services we offer.</p>

        <div className="services-grid" style={{ marginTop: 16 }}>
          {SERVICES.map(category => (
            <div className="service-card" key={category.id}>
              <img src={category.image || `https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=60`} alt={category.name} />
              <div className="body">
                <h3 style={{ margin: '0 0 6px' }}>{category.name}</h3>
                <p style={{ margin: '0 0 10px', color: 'var(--muted-text)' }}>{category.description || ''}</p>
                <strong style={{ display: 'block', marginBottom: 8 }}>Includes:</strong>
                <ul className="sub-list" style={{ margin: 0, paddingLeft: 16 }}>
                  {category.sub.map(s => (
                    <li key={s.id} style={{ marginBottom: 6 }}>{s.name}</li>
                  ))}
                </ul>
                <div style={{ marginTop: 10 }}>
                  <a href={`/services?category=${category.id}`} className="btn-outline">Explore</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
