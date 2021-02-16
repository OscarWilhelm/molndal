import React from 'react'
import './Backdrop.css'

export const Backdrop = (props: { drawerHandler: Function }) => {
  return (
    <div onClick={() => props.drawerHandler(false)} className='backdrop'>

    </div>
  )
}

