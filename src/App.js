import React from 'react';
import Signup from './Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutRoute from './LayoutRoute';
import MainScreen from './MainScreen';
import About from './About';
import TestAbout from './About';


const App = () => {
  return (
      <BrowserRouter>
          <Switch>
              <LayoutRoute path="/" exact={true} component={MainScreen}  />
              <LayoutRoute path="/signup" exact={true} component={Signup} />
              <LayoutRoute path="/about" exact={true} component={About} />
          </Switch>
      </BrowserRouter>
  )    
};


export default App;
