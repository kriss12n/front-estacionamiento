import React from 'react'
import { Route, Switch, BrowserRouter as Router,Redirect } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen';
import { PanelAdminRouter } from "./PanelAdminRouter";


export const AppRouter = () => {

  return(

    <Router>
        <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route  path="/" component={PanelAdminRouter} />
            <Redirect to="/login" />
        </Switch>
    </Router>


  );

}