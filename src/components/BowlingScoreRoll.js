import React from "react";

function BowlingScoreRoll(props) {
  return <div className="box">{renderScore(props)}</div>;
}

function renderScore(props) {
  const i = props.index;
  const rolls = props.rolls;

  if (i in rolls) {
    if (i === 0) {
      if (rolls[i] === 10) {
        return <div className="animated shake">X</div>;
      }
    }
    if (i === 1) {
      if (rolls[i] > 0 && rolls[i] + rolls[i - 1] === 10) {
        return <div className="animated tada">/</div>;
      }
    }
    if (i === 1 || i === 2) {
      if (rolls[i - 1] === 10 && rolls[i] === 10) {
        return <div className="animated shake">X</div>;
      }
    }
    if (rolls[i] === 0) {
      return <div className="animated flash">-</div>;
    }
    return rolls[i];
  }
}

export default BowlingScoreRoll;
