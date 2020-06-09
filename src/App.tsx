import React from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import MenuBar from './components/menuBar/MenuBar';
import Home from './views/home/Home';
import Search from './views/search/Search';
import Favorites from './views/favorites/Favorites';
import Movie from './views/movie/Movie';

function App() {
  return(
    <div>
      <MenuBar/>
      <Switch>
        <Route path="/" exact component={Home} ></Route>
        <Route path="/search" component={Search} ></Route>
        <Route path="/favorites" component={Favorites} ></Route>
        <Route path="/movie/:id" component={Movie} ></Route>
      </Switch>
    </div>
  );
}

export default App;
