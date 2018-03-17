import BowlingPlayer from "./BowlingPlayer";

describe("Bowling Player", () => {
  it("Has a name", () => {
    const player = new BowlingPlayer("Pablo");

    expect(player.name).toBe("Pablo");
  });
});
