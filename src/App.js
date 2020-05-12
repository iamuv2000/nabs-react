import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Signup from './Pages/Signup/Signup';
import LoginPage from './Pages/LoginPage/LoginPage';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
        <Route path='/' component={LandingPage} exact={true}  />
        <Route path='/signup' component={Signup} exact={true}  />
        <Route path='/login' component={LoginPage} exact={true}  />
        <Route path='/dashboard' component={Dashboard} exact={true}  />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
