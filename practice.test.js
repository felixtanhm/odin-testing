const { sum, capitalise, reverseString } = require("./practice.js");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1.1 + 2.2 to equal 3.3", () => {
  expect(sum(1.1, 2.2)).toBeCloseTo(3.3);
});

test("non integer returns error message", () => {
  expect(sum("hello", 2)).toBe("Inputs need to be integers.");
});

test("provided string is capitalised", () => {
  expect(capitalise("testing")).toBe("Testing");
});

test("string is reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});
