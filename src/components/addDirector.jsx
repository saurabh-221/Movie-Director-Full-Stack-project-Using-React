import React from "react";
import "../App.css";

function AddDirector(props) {
  return (
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
            <label>Director</label>
            <input />
          </div>
          <div className="buttons">
            <button onClick={props.add}>Submit</button>
            <button onClick={props.popupClass}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDirector;
