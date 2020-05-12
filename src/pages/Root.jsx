import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private';
import Home from './Home/Home';
import Login from './Login/Login';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
  }
`

const PagesRoot = () => (
  <Router>
    <GlobalStyle/>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <RoutesPrivate path="/" component={Home} />
      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
