import React from "react";

function BowlingScoreRoll(props) {
  return <div className="roll">{renderScore(props)}</div>;
}

function renderScore(props) {
  if (props.index in props) {
    return props[props.index];
  }
}

export default BowlingScoreRoll;
