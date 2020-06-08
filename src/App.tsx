import React from 'react';
import {Switch, Route} from "react-router-dom"

import './App.css';
import MenuBar from './components/menuBar/MenuBar';
import Routes from './components/routes/Routes';

function App() {
  return(
    <div>
      <MenuBar/>
      <Switch>
        {Routes.map((route: any) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </div>
  );
}

export default App;
