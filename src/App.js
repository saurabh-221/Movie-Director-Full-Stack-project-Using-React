import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import {Router, Route, browserHistory} from 'react-router'
import { BrowserRouter, Route, Link } from 'react-router-dom'

//import Root from './components/Root';
import Movies from './components/movies';
import Directors from './components/directors';
import ShowMovieCard from './components/showMovieCard'
import ShowDirectorCard from './components/showDirectorCard'



function App() {
  return (
    <BrowserRouter>
    <div>
    <div className="App">
            <header className="App-header">
            <h3>Movie-Director
              </h3>
              <div className="movie">
                <h3 align="left" >
                  <Link to="/movies">Movies</Link>
                    </h3>
              </div>
              <div className="director">
                <h3 align="right" >
                  <Link to="/directors">Directors</Link>
                </h3>
              </div>
            </header>
    </div>
    <div>
      {/* <Route path={"/"} component = {Root}> */}
        <Route path={"/movies"} component = {Movies} />
        <Route path={"/directors"} component = {Directors} />
        <Route path={"/movies/:id"} component = {ShowMovieCard} />
        <Route path={"/directors/:id"} component = {ShowDirectorCard} />

      {/* </Route> */}
    
    </div>
     </div>
    </BrowserRouter>

  );
}

export default App;