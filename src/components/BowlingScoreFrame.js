import React from "react";
import BowlingScoreRoll from "./BowlingScoreRoll";

function BowlingScoreFrame(props) {
  return (
    <React.Fragment>
      <div className="row">{renderRolls(props.numberOfRolls)}</div>
      <div className="row">
        <div className="column">{props.total}</div>
      </div>
    </React.Fragment>
  );
}

function renderRolls(numberOfRolls){
  const rolls = [];

  for (let i = 0; i < 2; i++) {
    rolls.push(renderRoll(i));
  }

  return rolls;
}

function renderRoll(i) {
  return (
    <div className="column">
      <BowlingScoreRoll key={i} />
    </div>
  );
}

export default BowlingScoreFrame;
