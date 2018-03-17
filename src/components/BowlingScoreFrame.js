import React from "react";
import BowlingScoreRoll from "./BowlingScoreRoll";

function BowlingScoreFrame(props) {
  return (
    <React.Fragment>
      <div className="row">{renderRolls(props)}</div>
      <div className="row">
        <div className="column">{props.total}</div>
      </div>
    </React.Fragment>
  );
}

function renderRolls(props){
  const rolls = [];

  for (let i = 0; i < props.numberOfRolls; i++) {
    rolls.push(renderRoll(i, props));
  }

  return rolls;
}

function renderRoll(i, props) {
  return (
    <div className="column">
      <BowlingScoreRoll index={i} {...props.rolls} key={i} />
    </div>
  );
}

export default BowlingScoreFrame;
