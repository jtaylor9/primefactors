/*exported projEulThree*/
describe("projEulThree", function () {
  var testNum = 600851475143;

  it("should return a single number for given input", function () {
    expect(projEulThree(testNum)).toEqual(6857);
  });

  var tester = "number";
  it("should throw an error if not a number", function () {
    expect(projEulThree(tester)).toThrowError("Non-numeric Input.");
  });

  var testNum2 = 239;

  it("should return the prime factor of 239 is 239", function () {
    expect(projEulThree(testNum2)).toEqual(239);
  });
});

