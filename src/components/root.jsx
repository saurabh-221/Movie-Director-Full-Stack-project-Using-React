import React, { Component } from 'react';
import '../App.css';

class Root extends Component {
    render() { 
        return ( 
            <div className="App">
            <header className="App-header">
              <h1>
                  <a href="http://localhost:8000">IMDB</a>
              </h1>
              <div className="movie">
                <h2 align="left" >
                    <a href="http://localhost:8000/api/movies">Movies</a></h2>
              </div>
              <div className="director">
                <h2 align="right" >
                  <a href="http://localhost:8000/api/directors">Directors</a>
                </h2>
              </div>
            </header>
            <div>
                this is root
            
            </div>
          </div>
         );
    }
}
 
export default Root;