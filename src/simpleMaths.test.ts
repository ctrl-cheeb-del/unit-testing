import {
  calcAreaCircle,
  calcAreaSquare,
  calcAreaTriangle,
} from "./simpleMaths";

test("Area Square", () => {
  expect(calcAreaSquare(4)).toBe(16);
});

test("Area Triangle", () => {
  expect(calcAreaTriangle(4, 5)).toBe(10);
});

test("Area Circle", () => {
  expect(calcAreaCircle(4)).toBe(50.26548245743669);
});

//can i push from vs code?
