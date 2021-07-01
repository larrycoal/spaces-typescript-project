import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './Components/Header';
import Home from './Components/Home/index';
import LoginPage from './Components/LoginPage';
import './Styles/styles.scss'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </>
  );
};

export default App;
