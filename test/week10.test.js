const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("it throws an error if not passed a number as n", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");

        expect(() => {
            sumDigits(["3", "7", "11", "17"]);
        }).toThrow("a number is required");

        expect(() => {
            sumDigits("87");
        }).toThrow("a number is required");
    });
 
    test("returns the sum of the digits", () => {
        expect(sumDigits(123)).toBe(6);
    });
    test("returns the sum of the digits", () => {
        expect(sumDigits(1)).toBe(1);
    });
});


