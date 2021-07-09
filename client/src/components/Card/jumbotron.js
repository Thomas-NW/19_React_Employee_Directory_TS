import React from "react";
import "./jumbotron.css"

function Jumbotron() {
  return (
  <div>
    <div className="jumbotron jumbotron-fluid" id="jumboTron">
      <div className="container">
        <h1 className="display-4"><i className="fas fa-user-friends"></i> <b>Employee Directory</b> <i className="fas fa-user-friends"></i> </h1>
        <p className="lead">You can search by first or last name or select the column headings to sort.</p>
      </div>
    </div>
  </div>
  );
}

export default Jumbotron;