import BowlingEngine from "./BowlingEngine";

describe("Bowling Engine", () => {
  let engine;

  beforeEach(() => {
    engine = new BowlingEngine([]);
  });

  it("Gutter game", () => {
    playRolls(20, 0);

    expect(engine.score()).toBe(0);
  });

  it("Perfect game", () => {
    playRolls(12, 10);

    expect(engine.score()).toBe(300);
  });

  it("All ones", () => {
    playRolls(20, 1);

    expect(engine.score()).toBe(20);
  });

  it("A spare", () => {
    rollASpare();
    engine.roll(3);
    playRolls(17, 0);

    expect(engine.score()).toBe(16);
  });

  it("A strike", () => {
    rollAStrike();
    engine.roll(3);
    engine.roll(4);
    playRolls(16, 0);

    expect(engine.score()).toBe(24);
  });

  function playRolls(rolls, pins) {
    for (let i = 0; i < rolls; i++) {
      engine.roll(pins);
    }
  }

  function rollASpare() {
    engine.roll(5);
    engine.roll(5);
  }

  function rollAStrike() {
    engine.roll(10);
  }
});
