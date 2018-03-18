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
      <div className="container">
        <div className="row">
          <div className="column column-title">
            <h1>Bowling Score Board</h1>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="row">
              <BowlingScoreBoard {...this.state.game} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <button onClick={() => this.handlePlay()}>Auto Play</button>
          </div>
        </div>
      </div>
    );
  }

  handlePlay() {
    this.state.game.play();
  }

  handleScore(game) {
    this.setState({ game });
  }
}

export default App;
