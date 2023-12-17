import capitalise from "./capitalise";

test("'testing' is returned as 'Testing'", () => {
  expect(capitalise("testing")).toBe("Testing");
});
