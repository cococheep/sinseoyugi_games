import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './routes/Home';
import MovieList from './routes/MovieList';
import Proverb from './routes/Proverb'


function App() {
  return (
    <div>
      <HashRouter>
        <Navigation />
        <Route path = '/' exact = {true} component = {Home}/>
        <Route path = '/Chosung' component = {MovieList}/>
        <Route path = '/Proverb' component = {Proverb} />
      </HashRouter>
    </div>
  );
}

export default App;
