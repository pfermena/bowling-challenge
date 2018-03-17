import BowlingEngine from "./BowlingEngine";
import Frame from "./Frame";
import LastFrame from "./LastFrame";

class BowlingGame {
  constructor(onShot) {
    this.frames = [];
    this.rolls = [];
    this.isRunning = true;
    this.engine = new BowlingEngine(this.rolls);
    this.onShot = onShot;
    this.numberOfFrames = MAX_FRAMES;
    this.frameIndex = 0;

    this.initFrames();
  }

  reset(){
    this.frames = [];
    this.rolls = [];
    this.frameIndex = 0;
    this.isRunning = true;

    this.initFrames();
  }

  initFrames() {
    for (let i = 0; i < MAX_FRAMES - 1; i++) {
      this.frames.push(new Frame());
    }
    this.frames.push(new LastFrame());
  }

  shot() {
    const frame = this.frames[this.frameIndex].isFinished()
      ? this.frames[++this.frameIndex]
      : this.frames[this.frameIndex];

    this.rolls.push(frame.score());

    if (this.frameIndex === MAX_FRAMES - 1 && frame.isFinished()) {
      this.isRunning = false;
    }
    this.onShot(this, this.engine.score());
  }

  play() {
    this.reset();

    const intervalId = setInterval(() => {
      if (this.isRunning) {
        return this.shot();
      }
      clearInterval(intervalId);
    }, 100);
  }
}

const MAX_FRAMES = 10;

export default BowlingGame;
