import React, { Component } from "react";
import "../App.css";

class addMovies extends Component {
  state = {
    director: ""
  };
  componentDidMount() {
    fetch(
      "http://localhost:8080/api/directors/" + this.props.data["Director_Id"],
      {
        method: "GET"
      }
    )
      .then(boardData => {
        return boardData.json();
      })
      .then(boardData => {
        console.log(boardData);
        this.setState({ director: boardData["id"] });
      });
  }
  render() {
    console.log(this.props.data);
    console.log(this.state.director);
    return (
      <div className="container">
        <div className="backLayer">
          <div className="layer">
            <div className="popup-header">
              <h1>Adding Element</h1>
            </div>
            <div className="popup-content">
              <div className="element">
                <label>Title</label>
                <input defaultValue={this.props.data["Title"]} />
              </div>
              <div className="element">
                <label>Description</label>
                <input defaultValue={this.props.data["Description"]} />
              </div>
              <div className="element">
                <label>Runtime</label>
                <input defaultValue={this.props.data["Runtime"]} />
              </div>
              <div className="element">
                <label>Genre</label>
                <input defaultValue={this.props.data["Genre"]} />
              </div>
              <div className="element">
                <label>Rating</label>
                <input defaultValue={this.props.data["Rating"]} />
              </div>
              <div className="element">
                <label>Metascore</label>
                <input defaultValue={this.props.data["Metascore"]} />
              </div>
              <div className="element">
                <label>Votes</label>
                <input defaultValue={this.props.data["Votes"]} />
              </div>
              <div className="element">
                <label>GrossEarning</label>
                <input defaultValue={this.props.data["Earning"]} />
              </div>

              <div className="element">
                <label>Actor</label>
                <input defaultValue={this.props.data["Actor"]} />
              </div>
              <div className="element">
                <label>Year</label>
                <input defaultValue={this.props.data["Year"]} />
              </div>
            </div>
            <div className="buttons">
              <button onClick={this.props.edit}>Submit</button>
              <button onClick={this.props.popupClass}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addMovies;
