import React from 'react'

export default function Audio({ color = 'currentColor', width = 24, height = 24, borderColor = '#fff' }) {
  const borderWidth = 2;

  return (
    <svg width={width} height={height} viewBox="0 0 55 55" fill="none">
      <path d="M34.375 13.75C34.375 9.95304 31.297 6.875 27.5 6.875C23.703 6.875 20.625 9.95304 20.625 13.75V25.2083C20.625 29.0053 23.703 32.0833 27.5 32.0833C31.297 32.0833 34.375 29.0053 34.375 25.2083V13.75Z" stroke={color} stroke-linejoin="round" />
      <path d="M12.604 25.2083C12.604 29.1589 14.1734 32.9477 16.9669 35.7413C19.7604 38.5348 23.5492 40.1041 27.4998 40.1041C31.4504 40.1041 35.2393 38.5348 38.0328 35.7413C40.8263 32.9477 42.3957 29.1589 42.3957 25.2083" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M27.5 48.125V43.5417" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
