class BowlingEngine {
  constructor() {
    this.rolls = [];
    this.rollIndex = 0;
  }

  roll(pins) {
    this.rolls[this.rollIndex] = pins;

    this.rollIndex++;
  }

  score(start = 0, end = 10) {
    let totalScore = 0;
    let frameStart = 0;

    for (let frame = start; frame < end; frame++) {
      if (this._isStrike(frameStart)) {
        totalScore += 10 + this._getStrikeScore(frameStart);
        frameStart++;
      } else if (this._isSpare(frameStart)) {
        totalScore += 10 + this._getSpareScore(frameStart);
        frameStart += 2;
      } else {
        totalScore += this._getFrameScore(frameStart);
        frameStart += 2;
      }
    }
    return totalScore;
  }

  frames() {
    let frames = [];
    let frameStart = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this._isStrike(frameStart)) {
        frames.push(10);
        frames.push(this.rolls[frameStart + 1]);
        frames.push(this.rolls[frameStart + 2]);

        frameStart++;
      } else if (this._isSpare(frameStart)) {
        frames.push(10);
        frames.push(this.rolls[frameStart + 2]);

        frameStart += 2;
      } else {
        frames.push(this.rolls[frameStart]);
        frames.push(this.rolls[frameStart]);
        
        frameStart += 2;
      }
    }
    return frames;
  }

  _isStrike(i) {
    return this.rolls[i] === 10;
  }

  _isSpare(i) {
    return this.rolls[i] + this.rolls[i + 1] === 10;
  }

  _getStrikeScore(i) {
    return this.rolls[i + 1] + this.rolls[i + 2];
  }

  _getSpareScore(i) {
    return this.rolls[i + 2];
  }

  _getFrameScore(i) {
    return this.rolls[i] + this.rolls[i + 1];
  }
}

export default BowlingEngine;