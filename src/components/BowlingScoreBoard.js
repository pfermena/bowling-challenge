import React from "react";
import BowlingScoreFrame from "./BowlingScoreFrame";

function BowlingScoreBoard (props) {
    return renderRames(props.numberOfFrames);
}

function renderRames(numberOfFrames){
  const frames = [];

  for (let i = 0; i < 10; i++) {
    frames.push(renderFrame(i));
  }

  return frames;
}

function renderFrame(i) {
  return (
    <div className="column">
      <BowlingScoreFrame key={i} />
    </div>
  );
}

export default BowlingScoreBoard;
