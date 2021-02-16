import React from 'react'
import './MobileNavigation.css'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { SideBar } from './sidebar/SideBar'
import { useState } from 'react'
import { Backdrop } from '../../backdrop/Backdrop'

export const MobileNavigation = () => {

  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  return (
    <div>
      <HamburgerButton drawerHandler={setOpenDrawer} />
      <SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
      {!openDrawer || <Backdrop drawerHandler={setOpenDrawer} />}
    </div>
  )
}
