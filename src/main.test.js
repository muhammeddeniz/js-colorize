const hexWithAlpha = require("./main");

test("convert hex to rgba", () => {
  expect(hexWithAlpha("#fac300", 0.7)).toBe("rgba(255, 255, 255, 0.3)");
});
