import BowlingEngine from "./BowlingEngine";

describe("Bowling Engine", () => {
  let engine;

  beforeEach(() => {
    engine = new BowlingEngine([]);
  });

  it("Gutter game", () => {
    expect(scoreGame(20, 0)).toBe(0);
  });

  it("Perfect game", () => {
    expect(scoreGame(12, 10)).toBe(300);
  });

  it("All ones", () => {
    expect(scoreGame(20, 1)).toBe(20);
  });

  it("A spare", () => {
    expect(scoreRolls(rollASpare(), 10)).toBe(16);
  });

  it("A strike", () => {
    expect(scoreRolls(rollAStrike(), 10)).toBe(24);
  });

  it("A partial game (complete frames)", () => {
    expect(score(4, 1, 2)).toBe(4);
  });

  function playRolls(shots, pins) {
    const rolls = [];

    for (let i = 0; i < shots; i++) {
      rolls.push(pins);
    }

    return rolls;
  }

  function rollASpare() {
    return [5, 5, 3].concat(playRolls(17, 0));
  }

  function rollAStrike() {
    return [10, 3, 4].concat(playRolls(16, 0));
  }

  function score(shots, pins, numberOfFrames) {
    const rolls = playRolls(shots, pins);

    return scoreRolls(rolls, numberOfFrames);
  }

  function scoreGame(shots, pins) {
    return score(shots, pins, 10);
  }

  function scoreRolls(rolls, numberOfFrames) {
    const frames = engine.score(rolls, numberOfFrames);

    return frames[frames.length - 1];
  }
});
