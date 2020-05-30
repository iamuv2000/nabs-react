import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Signup from './Pages/Signup/Signup';
import LoginPage from './Pages/LoginPage/LoginPage';
import Hack from './Pages/Hack/Hack';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
        <Route path='/' component={LandingPage} exact={true}  />
        <Route path='/signup' component={Signup} exact={true}  />
        <Route path='/login' component={LoginPage} exact={true}  />
        <Route path='/dashboard' component={Hack} exact={true}  />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
