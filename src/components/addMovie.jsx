import React, { Component } from "react";
import "../App.css";

class AddMovies extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="backLayer">
          <div className="layer">
            <div className="popup-header">
              <h1>Adding Element</h1>
            </div>
            <div className="popup-content">
              {/* <div className="element">
                    <label>Id</label>
                    <input />
                    </div> */}
              <div className="element">
                <label>Rank</label>
                <input />
              </div>
              <div className="element">
                <label>Title</label>
                <input />
              </div>
              <div className="element">
                <label>Description</label>
                <input />
              </div>
              <div className="element">
                <label>Runtime</label>
                <input />
              </div>
              <div className="element">
                <label>Genre</label>
                <input />
              </div>
              <div className="element">
                <label>Rating</label>
                <input />
              </div>
              <div className="element">
                <label>Metascore</label>
                <input />
              </div>
              <div className="element">
                <label>Votes</label>
                <input />
              </div>
              <div className="element">
                <label>GrossEarning</label>
                <input />
              </div>
              <div className="element">
                <label>Director_Id</label>
                <input />
              </div>
              <div className="element">
                <label>Actor</label>
                <input />
              </div>
              <div className="element">
                <label>Year</label>
                <input />
              </div>
            </div>
            <div className="buttons">
              <button onClick={this.props.add}>Submit</button>
              <button onClick={this.props.popupClass}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMovies;
