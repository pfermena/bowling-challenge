import React from "react";
import BowlingScoreFrame from "./BowlingScoreFrame";

function BowlingScoreBoard(props) {
  return renderFrames(props);
}

function renderFrames(props) {
  const frames = [];

  for (let i = 0; i < props.numberOfFrames; i++) {
    frames.push(renderFrame(i, props));
  }

  return frames;
}

function renderFrame(i, props) {
  return (
    <div className="column">
      <BowlingScoreFrame {...props.frames[i]} key={i} />
    </div>
  );
}

export default BowlingScoreBoard;
