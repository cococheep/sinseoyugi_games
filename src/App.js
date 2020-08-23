import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './routes/Home';
import MovieList from './routes/comp/MovieList';


function App() {
  return (
    <div>
      <HashRouter>
        <Navigation />
        <Route path = "/" exact = {true} component = {Home}/>
        <Route path = "/Chosung" component = {MovieList}/>
      </HashRouter>
    </div>
  );
}

export default App;
