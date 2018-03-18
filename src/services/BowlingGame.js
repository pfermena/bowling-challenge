import BowlingEngine from "./BowlingEngine";
import Frame from "./Frame";
import LastFrame from "./LastFrame";

class BowlingGame {
  constructor(onShot) {
    this.engine = new BowlingEngine();
    this.onShot = onShot;
    this.numberOfFrames = MAX_FRAMES;

    this.reset();
  }

  reset() {
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
    const frames = this.engine.score(
      this.rolls,
      this.frames.filter(f => f.isFinished()).length
    );

    this.updateTotals(frames);
    this.onShot(this);

    if (frame.isFinished() && this.frameIndex === MAX_FRAMES - 1) {
      this.isRunning = false;
    }
  }

  updateTotals(frames) {
    frames.forEach((score, i) => {
      this.frames[i].setTotalScore(score);
    });
  }

  roll() {
    if (this.isRunning) {
      this.shot();
    } else {
      this.reset();
      this.onShot(this);
    }
  }

  play() {
    this.reset();

    const intervalId = setInterval(() => {
      if (this.isRunning) {
        return this.shot();
      }
      clearInterval(intervalId);
      this.onShot(this);
    }, 200);
  }
}

const MAX_FRAMES = 10;

export default BowlingGame;
