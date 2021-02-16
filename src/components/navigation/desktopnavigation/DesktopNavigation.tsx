import React from 'react'
import './DesktopNavigation.css'
import logotype from '../../../shared/images/logotype.svg'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'

export const DesktopNavigation = () => {
  const history = useHistory();
  const [authUser, setAuthUser] = useContext(UserContext)

  const showUserOrSignInButton = () => {
    return authUser
      ? <div className='profile'><Profile /></div>
      : <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Sign In</span>
  }

  return (
    <div className='desktopNavigationWrapper'>
      <img className='navigationLogotype' src={logotype} alt={''} />
      <div className='desktopNavigationTabs'>
        <ul className='ulTabsWrapper'>
        <li className='liTabs' onClick={() => history.push(RoutingPath.homeView)}>Home</li>
        <li className='liTabs' onClick={() => history.push(RoutingPath.planningView)}>Plan</li>
        <li className='liTabs' onClick={() => history.push(RoutingPath.itemsView)}>Items</li>
        </ul>
    </div>
      { showUserOrSignInButton() }
    </div >
  )
}
