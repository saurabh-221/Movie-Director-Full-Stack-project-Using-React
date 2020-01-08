import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class addMovies extends Component {
  state = {
    director: ""
  };

  componentDidMount() {
    fetch(
      "http://localhost:8080/api/directors/" +
        this.props.location.state["Director_Id"],
      {
        method: "GET"
      },
      { mode: "no-cors" }
    )
      .then(boardData => {
        return boardData.json();
      })
      .then(boardData => {
        // console.log(boardData[0]["Director"]);
        console.log(boardData);
        this.setState({ director: boardData["Name"] });
      });
  }

  // this.componentDidMount()

  render() {
    //
    // console.log(this.props.location.state);
    return (
      <div className="container">
        <div className="backLayer">
          <div className="layer">
            <div className="popup-header">
              <h1>Details</h1>
            </div>
            <div className="popup-content">
              <div className="title">
                <h3>
                  {this.props.location.state["Title"]} 
                   ({this.props.location.state["Year"]})
                </h3>
              </div>
              <div className="director">
                <h4>Director:   {this.state.director}</h4>
              </div>
              <div className="actor">
                <h4>Actor:   {this.props.location.state["Actor"]}</h4>
              </div>
              <div className="description">
                <h4>Description:   {this.props.location.state["Description"]}</h4>
              </div>
              <div className="runtime">
                <h4>Runtime:   {this.props.location.state["Runtime"]}</h4>
              </div>
              <div className="rating">
                <h4>Rating:   {this.props.location.state["Rating"]}</h4>
              </div>
              <div className="votes">
                <h4>Votes:   {this.props.location.state["Votes"]}</h4>
              </div>
              <div className="genre">
                <h4>Genre:   {this.props.location.state["Genre"]}</h4>
              </div>
              <div className="gross-earning">
                <h4>
                  Gross_Earning_in_Mil:   {this.props.location.state["Earning"]}
                </h4>
              </div>
            </div>
            <div className="buttons">
              <Link to="/movies">
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
