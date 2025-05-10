import React from 'react'

export default function Pause({ color = 'currentColor', width = 24, height = 24 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <path d="M7.65759 4.56616V16.2647M14.3425 4.56616V16.2647" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
