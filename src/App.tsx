import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch} from 'react-router';
import Header from './Components/Header';
import Home from './Components/Home/index';
import LoginPage from './Components/LoginPage';
import { State } from './Store/Reducer';
import './Styles/styles.scss'

const App = () => {
  const user = useSelector((state: State) => state.user)


  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={user.isLoggedIn ? Home : LoginPage} />
      </Switch>
    </>
  );
};

export default App;
