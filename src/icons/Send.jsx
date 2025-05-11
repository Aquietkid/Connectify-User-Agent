import React from 'react'

export default function Send({ color = 'currentColor', width = 24, height = 24 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill={color} />
    </svg>
  )
}
