import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom'

class addMovies extends Component {
  state = {
    movie:[],
    movie1:[]
  };
componentDidMount(){
  fetch("http://localhost:8080/api/movies/" + this.props.location.state["id"], {
        method: "GET"
      }, { mode: 'no-cors' })
      .then(boardData => {
        return boardData.json();
      })
      .then(boardData => {
        // console.log(boardData);
        // console.log(boardData.Title)
          this.setState({ movie: boardData});
          this.setState({movie1:boardData["Title"]})
          
          
      });
}
  render() {
    // console.log(this.props.location.state);
    //console.log()
    return (
      <div className="container">
        <div className="backLayer">
        <div className="layer">
          <div className="popup-header">
            <h1>Details</h1>
          </div>
          <div className="popup-content">
            <div className="title">
              <h4>
                <h4> ID:{this.props.location.state["id"]}</h4>
              </h4>
            </div>
            
              
            <div className= "genre">
              <h4>Director:{this.props.location.state["Name"]}</h4>
            </div>
            {/* {console.log(5,this.state.movie1)}
            {this.state.movie1.map(e => (
              <div>
                <h6>Movie-{e}</h6>
              </div>
            ))} */}
            {/* <div className= "gross-earning">
              <h6>Gross_Earning_in_Mil:{this.props.location.state["Gross_Earning_in_Mil"]}</h6>
            </div> */}

            
          </div>
          <div className="buttons">
        <Link to = "/directors">
            <button>Done</button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default addMovies;