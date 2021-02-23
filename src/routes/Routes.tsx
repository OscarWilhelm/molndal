import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { PlanningView } from '../view/PlanningView'
import { ItemsView } from '../view/ItemsView'
import { SignInView } from '../view/SignInView'
import RoutingPath from './RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import { useEffect, useContext } from 'react'
import { SettingsView } from '../view/authenticatedViews/SettingsView'

export const Routes = (props: { children: React.ReactChild }) => {

  const [authUser, setAuthUser] = useContext(UserContext)
  const { children } = props

  const blockRouteIfAuthenticated = (authView: React.FC, nonAuthView: React.FC) => {
    return !authUser ? authView : nonAuthView
  }

  const blockRouteIfNotAuthenticated = (authView: React.FC, nonAuthView: React.FC) => {
    return authUser ? authView : nonAuthView
  }

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setAuthUser({ username: localStorage.getItem('user') })
    }
  }, [])

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.planningView} component={PlanningView} />
        <Route exact path={RoutingPath.itemsView} component={ItemsView} />
        <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView, HomeView)} />
        <Route exact path={RoutingPath.settingsView} component={blockRouteIfNotAuthenticated(SettingsView, SignInView)} />
        <Route component={HomeView} />
      </Switch>
    </BrowserRouter>
  )
}