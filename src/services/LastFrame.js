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
    return (
      this.rolls.length === this.numberOfRolls ||
      !(this.isStrike() || this.isSpare())
    );
  }

  getPinsDown() {
    if (this.rolls.length === 2) {
      return 0;
    }
    if (this.rolls.length === 1 && this.isStrike()) {
      return 0;
    }

    return super.getPinsDown();
  }
}

export default LastFrame;
