import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { PlanningView } from '../view/PlanningView'
import { ItemsView } from '../view/ItemsView'
import { SignInView } from '../view/SignInView'
import RoutingPath from './RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import { useEffect, useContext } from 'react'

export const Routes = (props: { children: React.ReactChild }) => {

  const [authUser, setAuthUser] = useContext(UserContext)
  const { children } = props

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
        <Route exact path={RoutingPath.signInView} component={SignInView} />
        <Route component={HomeView} />
      </Switch>
    </BrowserRouter>
  )
}