import React from 'react'


export default function StatusTick({ status }) {

  if (status == 'sent') {
    return <SingleTick />
  } else if (status == 'received') {
    return <DoubleTick className='text-placeholder' />
  } else {
    return <DoubleTick className='text-black' />
  }
}



function DoubleTick({ color = 'currentColor', width = 22, height = 22, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" className={className}>
      <path d="M4.26456 10.5501C4.01626 10.3017 3.61367 10.3017 3.36537 10.5501C3.11706 10.7984 3.11706 11.2009 3.36537 11.4492L4.26456 10.5501ZM7.20605 14.3907L6.75645 14.8403C7.00476 15.0886 7.40735 15.0886 7.65565 14.8403L7.20605 14.3907ZM14.4378 8.05814C14.6861 7.80984 14.6861 7.40725 14.4378 7.15895C14.1895 6.91064 13.787 6.91064 13.5387 7.15895L14.4378 8.05814ZM7.65565 10.5501C7.40735 10.3017 7.00476 10.3017 6.75645 10.5501C6.50815 10.7984 6.50815 11.2009 6.75645 11.4492L7.65565 10.5501ZM10.5971 14.3907L10.1476 14.8403C10.3959 15.0886 10.7984 15.0886 11.0467 14.8403L10.5971 14.3907ZM17.8289 8.05814C18.0772 7.80984 18.0772 7.40725 17.8289 7.15895C17.5806 6.91064 17.1781 6.91064 16.9297 7.15895L17.8289 8.05814ZM3.36537 11.4492L6.75645 14.8403L7.65565 13.9411L4.26456 10.5501L3.36537 11.4492ZM7.65565 14.8403L14.4378 8.05814L13.5387 7.15895L6.75645 13.9411L7.65565 14.8403ZM6.75645 11.4492L10.1476 14.8403L11.0467 13.9411L7.65565 10.5501L6.75645 11.4492ZM11.0467 14.8403L17.8289 8.05814L16.9297 7.15895L10.1476 13.9411L11.0467 14.8403Z" fill={color} />
    </svg>
  )
}

function SingleTick({ color = 'currentColor', width = 22, height = 22, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" className={className}>
      <path d="M4.3999 10.4L8.1335 14L15.5999 6.79999" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}