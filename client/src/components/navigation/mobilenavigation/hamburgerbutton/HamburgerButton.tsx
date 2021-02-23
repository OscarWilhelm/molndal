import React from 'react'
import './HamburgerButton.css'

export const HamburgerButton = (props: { drawerHandler: Function }) => {
  return (
    <button onClick={() => props.drawerHandler(true)} className='toggleButton'>
      <div className='toggleButton_line'></div>
      <div className='toggleButton_line'></div>
      <div className='toggleButton_line'></div>
    </button>
  )
}
