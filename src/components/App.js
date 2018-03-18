import React, { Component } from "react";
import BowlingScoreBoard from "./BowlingScoreBoard";
import BowlingGame from "../services/BowlingGame";

class App extends Component {
  constructor() {
    super();

    this.state = {
      game: new BowlingGame(this.handleScore.bind(this))
    };
  }
  render() {
    return (
      <div className="wrap container-fluid">
        <div className="row center-xs">
          <div className="col-xs">
            <h1>Bowling Score Board</h1>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs">
            <div className="row">
              <BowlingScoreBoard {...this.state.game} />
            </div>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs">
            <button
              className="button button--round-s"
              onClick={() => this.handlePlay()}
            >
              Auto Play
            </button>
            <button
              className="button button--round-s"
              onClick={() => this.handleRoll()}
            >
              {this.state.game.isRunning ? "Roll" : "Reset"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  handlePlay() {
    this.state.game.play();
  }

  handleRoll() {
    this.state.game.roll();
  }

  handleScore(game) {
    this.setState({ game });
  }
}

export default App;
