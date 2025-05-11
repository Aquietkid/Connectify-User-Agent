import React from 'react'

export default function Reply({ color = 'currentColor', width = 24, height = 24, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 17H5L12 24L19 17H15V12C15 10.9391 14.5786 9.92172 13.8284 9.17157C13.0783 8.42143 12.0609 8 11 8H9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 17V12C9 10.9391 9.42143 9.92172 10.1716 9.17157C10.9217 8.42143 11.9391 8 13 8H15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
} 