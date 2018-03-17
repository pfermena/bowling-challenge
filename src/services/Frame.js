import { getRandomInt } from "./Utils";

class Frame {
  constructor() {
    this.rolls = [];
    this.numberOfRolls = 2;
  }

  isFinished() {
    return this.rolls.length === this.numberOfRolls || this.isStrike();
  }

  getScore(rollIndex) {
    return this.rolls[rollIndex];
  }

  getTotal() {
    return this.rolls.reduce((sum, value) => sum + value, 0);
  }

  isStrike() {
    return this.getScore(0) === 10;
  }

  isSpare() {
    return this.getScore(0) + this.getScore(1) === 10;
  }

  score() {
    const pins = getRandomInt(0, MAX_PINS - this.getTotal());
    this.rolls.push(pins);

    return pins;
  }
}

const MAX_PINS = 10;

export default Frame;
