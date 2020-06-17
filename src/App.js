import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {};

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/hats' component={HatsPage}></Route>
            {/* key points are switch and exact */}
        </Switch>
    </div>
  );
}

export default App;
