import React from 'react'
import './Navigation.css'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'
import { DesktopNavigation } from './desktopnavigation/DesktopNavigation'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

export const Navigation = () => {

  const { width, height } = useWindowDimensions()

  const displayNavigation = () => {
    return (width <= 1000)
      ? <MobileNavigation />
      : <DesktopNavigation />
  }

  return (
    <div>
      {displayNavigation()}
    </div>
  )
}
