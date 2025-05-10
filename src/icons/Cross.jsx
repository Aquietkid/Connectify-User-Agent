import React from 'react'

export default function Cross({ color = 'currentColor', height = 24, width = 24 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 38 38" fill="none">
      <path d="M9.5 9.5L28.5 28.5" stroke={color} strokeLinecap="round" />
      <path d="M28.5 9.5L9.5 28.5" stroke={color} strokeLinecap="round" />
    </svg>

  )
}
