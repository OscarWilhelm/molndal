import React from 'react'
import './DesktopNavigation.css'
import logotype from '../../../shared/images/logotype.svg'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const DesktopNavigation = () => {
  const history = useHistory();

  return (
    <div className='desktopNavigationWrapper'>
      <img className='navigationLogotype'
        src={logotype}
        alt={''} />
      <span onClick={() => history.push(RoutingPath.homeView)}>Home</span>
      <span onClick={() => history.push(RoutingPath.aboutView)}>About</span>
      <span onClick={() => history.push(RoutingPath.signInView)}>Sign In</span>
      <span onClick={() => history.push(RoutingPath.aboutView)}>About</span>
    </div>
  )
}
