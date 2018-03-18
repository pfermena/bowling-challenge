import React from "react";
import BowlingScoreRoll from "./BowlingScoreRoll";

function BowlingScoreFrame(props) {
  return (
    <React.Fragment>
      <div className="row">{renderRolls(props)}</div>
      <div className="row">
        <div className="col-xs">
          <div className="box">{getTotalScore(props)}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

function renderRolls(props) {
  const rolls = [];

  for (let i = 0; i < props.numberOfRolls; i++) {
    rolls.push(renderRoll(i, props));
  }

  return rolls;
}

function renderRoll(i, props) {
  return (
    <div className="col-xs">
      <BowlingScoreRoll index={i} {...props} key={i} />
    </div>
  );
}

function getTotalScore(props) {
  return props.isTotalScorePending ? "" : props.totalScore;
}

export default BowlingScoreFrame;
