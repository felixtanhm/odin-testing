import reverseString from "./reverseString";

test("string is reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});
