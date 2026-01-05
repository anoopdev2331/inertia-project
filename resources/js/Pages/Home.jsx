import React from 'react'
import { Link } from '@inertiajs/react'
import Layout from '../Shared/Layout'

export default function Home() {
    return (
        <Layout>
            <div style={{ maxWidth: 720 }}>
                <h1>Laravel + Inertia + React ✅</h1>
                <p>
                    <Link href="/login">Login</Link> or <Link href="/register">Register</Link>
                </p>
            </div>
        </Layout>
    )
}
