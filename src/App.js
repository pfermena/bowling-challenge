import React, { Component } from "react";
import BowlingScoreBoard from "./components/BowlingScoreBoard";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column column-title">
            <h1>Bowling Score Board</h1>
          </div>
        </div>
        <div className="row">
          <div className="game-board column">
            <div className="row">
              <div className="column">
                <BowlingScoreBoard />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <button onClick={() => this.handlePlay()}>Play</button>
                <button onClick={() => this.handleRoll()}>Roll</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
