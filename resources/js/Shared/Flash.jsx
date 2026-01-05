import React from 'react'
import { usePage } from '@inertiajs/react'

export default function Flash() {
  const { props } = usePage()
  const flash = (props && props.flash) || {}

  if (!flash.success && !flash.error) return null

  return (
    <div style={{ marginBottom: 16 }}>
      {flash.success && (
        <div style={{ background: '#d4edda', color: '#155724', padding: 10, borderRadius: 4 }}>{flash.success}</div>
      )}
      {flash.error && (
        <div style={{ background: '#f8d7da', color: '#721c24', padding: 10, borderRadius: 4 }}>{flash.error}</div>
      )}
    </div>
  )
}
