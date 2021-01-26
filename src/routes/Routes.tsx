import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AboutView } from '../view/AboutView'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'
import RoutingPath from './RoutingPath'

export const Routes = (props: { children: React.ReactChild }) => {

  const { children } = props

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.aboutView} component={AboutView} />
        <Route exact path={RoutingPath.signInView} component={SignInView} />
        <Route component={HomeView} />
      </Switch>
    </BrowserRouter>
  )
}