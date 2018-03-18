class BowlingEngine {
  score(rolls, numberOfFrames) {
    let totalScore = 0;
    let frameStart = 0;
    const frames = [];

    for (let frameIndex = 0; frameIndex < numberOfFrames; frameIndex++) {
      if (this._isStrike(frameStart, rolls)) {
        if (rolls.length >= frameStart + 3) {
          totalScore += this._getStrikeScore(frameStart, rolls);
          frames[frameIndex] = totalScore;

          frameStart++;
        }
      } else if (this._isSpare(frameStart, rolls)) {
        if (rolls.length > frameStart + 2) {
          totalScore += this._getSpareScore(frameStart, rolls);
          frames[frameIndex] = totalScore;

          frameStart += 2;
        }
      } else {
        totalScore += this._getFrameScore(frameStart, rolls);
        frames[frameIndex] = totalScore;

        frameStart += 2;
      }
    }
    return frames;
  }

  _getStrikeScore(i, rolls) {
    return 10 + rolls[i + 1] + rolls[i + 2];
  }

  _getSpareScore(i, rolls) {
    return 10 + rolls[i + 2];
  }

  _isStrike(i, rolls) {
    return rolls[i] === 10;
  }

  _isSpare(i, rolls) {
    return rolls[i] + rolls[i + 1] === 10;
  }

  _getFrameScore(i, rolls) {
    return rolls[i] + rolls[i + 1];
  }
}

export default BowlingEngine;
