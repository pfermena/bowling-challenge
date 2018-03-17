import Frame from "./Frame";

class LastFrame extends Frame {
  constructor() {
    super();

    this.numberOfRolls = 3;
  }

  isFinished() {
    if (this.rolls.length < this.numberOfRolls - 1) {
      return false;
    }
    return this.rolls.length === this.numberOfRolls || !(this.isStrike() || this.isSpare());
  }
}

export default LastFrame;
