import React from "react";
import BowlingScoreFrame from "./BowlingScoreFrame";

class BowlingScoreBoard extends React.Component {
  renderFrame(i) {
    return (
      <div className="columnn">
        <BowlingScoreFrame />
      </div>
    );
  }

  render() {
    const frames = [];

    for (let i = 0; i < 10; i++) {
      frames.push(this.renderFrame(i));
    }

    return frames;
  }
}

export default BowlingScoreBoard;
