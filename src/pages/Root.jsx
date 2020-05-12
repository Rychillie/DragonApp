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
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

  body, html {
    font-family: 'Nunito', sans-serif;
    padding: 0;
    margin: 0;
  }

  body {
    background: #EFEFEF;
  }

  label {
    color: #1e1e1e;
    margin-bottom: 5px;

    &.login {
      color: #ffffff;

      @media only screen and (min-width: 920px) {
        color: #1e1e1e;
      }
    }
  }

  input {
    background: white;
    border: 0;
    height: 36px;
    padding: 5px 10px;
    border-radius: 8px;
    box-shadow: 0px 1px 1px #0000000D;
  }

  textarea {
    border: 0;
    background: white;
    position: relative;
    max-width: 100%;
    padding: 5px 10px;
    border-radius: 8px;
    resize: vertical;
    min-height: 75px;
    box-shadow: 0px 1px 1px #0000000D;
  }

  button.ui-button {
    margin: 10px auto;
    height: 36px;
    width: 100%;
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
