import React from 'react'

export default function Play({ color = 'currentColor', width = 24, height = 24 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 25" fill='none'>
      <path d="M8 19.2463V5.16968L19 12.208L8 19.2463Z" fill={color} />
    </svg>

  )
}
