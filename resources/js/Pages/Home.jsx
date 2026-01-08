import React from 'react'
import { Link } from '@inertiajs/react'
import Layout from '../Shared/Layout'

export default function Home() {
    return (
        <Layout>
            <div>
                <div className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1350&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="overlay" />
                    <div className="content">
                        <h1>Feel beautiful every day</h1>
                        <p>Elegant Salon offers bespoke hair, nail and beauty services — personalized for you. Premium products, expert stylists, and a relaxing atmosphere.</p>
                        <div className="cta-group">
                            <Link href="/booking"><button className="btn-primary">Book Now</button></Link>
                            <Link href="/services"><button className="btn-secondary">View Services</button></Link>
                        </div>
                    </div>
                </div>

                <section>
                    <h2 style={{ marginTop: 8 }}>Popular Services</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60" alt="Hair" />
                            <div className="body">
                                <h3>Hair</h3>
                                <p style={{ color: 'var(--muted-text)' }}>Cutting, smoothing, coloring — tailored to your style.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1542736667-069246bdbc15?auto=format&fit=crop&w=800&q=60" alt="Nails" />
                            <div className="body">
                                <h3>Nails</h3>
                                <p style={{ color: 'var(--muted-text)' }}>Manicure, pedicure and luxury nail treatments.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <img src="https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=800&q=60" alt="Beauty" />
                            <div className="body">
                                <h3>Beauty</h3>
                                <p style={{ color: 'var(--muted-text)' }}>Makeup and beauty services for special occasions.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ marginTop: 20 }}>
                    <h2>What clients say</h2>
                    <div className="testimonials">
                        <div className="testimonial-card">
                            <strong>Anna P.</strong>
                            <p style={{ marginTop: 8, color: 'var(--muted-text)' }}>
                                "Lovely atmosphere and fantastic stylist — my hair never looked better!"
                            </p>
                        </div>
                        <div className="testimonial-card">
                            <strong>Michael R.</strong>
                            <p style={{ marginTop: 8, color: 'var(--muted-text)' }}>
                                "Professional service and great attention to detail. Highly recommended."
                            </p>
                        </div>
                        <div className="testimonial-card">
                            <strong>Sarah L.</strong>
                            <p style={{ marginTop: 8, color: 'var(--muted-text)' }}>
                                "Cozy place and amazing nails — love the results every time."
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
