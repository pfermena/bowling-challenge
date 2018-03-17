import React from "react";
import BowlingScoreRoll from "./BowlingScoreRoll";

class BowlingScoreFrame extends React.Component {
  renderRoll() {
    return <BowlingScoreRoll />;
  }

  render() {
    const rolls = [];

    for (let i = 0; i < 2; i++) {
      rolls.push(this.renderRoll(i));
    }

    return <div className="row">{rolls}</div>;
  }
}

export default BowlingScoreFrame;
