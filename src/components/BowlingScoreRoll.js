import React from "react";

function BowlingScoreRoll(props) {
  return <div className="roll">{renderScore(props)}</div>;
}

function renderScore(props) {
  const i = props.index;

  if (i in props) {
    if (i === 0 && props[i] === 10) {
      return "X";
    } else if (i === 1 && props[i] + props[i - 1] === 10) {
      return "/";
    }
    return props[i] || "-";
  }
}

export default BowlingScoreRoll;
