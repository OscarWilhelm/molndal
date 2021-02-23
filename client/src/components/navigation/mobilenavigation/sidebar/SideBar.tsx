import React from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'
import './SideBar.css'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: Function }) => {

  const history = useHistory();

  const handleNavigation = (route: string) => {
    props.drawerHandler(false)
    history.push(route)
  }

  return (
    <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
      <button onClick={() => props.drawerHandler(false)}>Close</button>
      <ul>
        <li onClick={() => handleNavigation(RoutingPath.homeView)}>Home</li>
        <li onClick={() => handleNavigation(RoutingPath.planningView)}>Plan</li>
        <li onClick={() => handleNavigation(RoutingPath.itemsView)}>Items</li>
      </ul>
    </div>
  )
}
