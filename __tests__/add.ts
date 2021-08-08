import { add } from "../src/add";

test("It should add two numbers correctly", () => {
  expect(add(1, 2)).toBe(3);
});
