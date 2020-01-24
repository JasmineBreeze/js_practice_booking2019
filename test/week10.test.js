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

describe.only("createRange", () => {
    test("creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range", () => {
        expect(createRange(3,11,2)).toEqual([3, 5, 7, 9, 11]);
    });
    test("it throws an error if not passed numbers for the start, end and step arguments", () => {
        expect(() => {
            createRange(undefined, 12, 102);
        }).toThrow("start is required");

        expect(() => {
            createRange(2, undefined, 30);
        }).toThrow("end is required");

        expect(() => {
            createRange(5, 10, undefined);
        }).toThrow("step is required");

        expect(() => {
            createRange([2], [12], [3]);
        }).toThrow("must be a number");

        expect(() => {
            createRange("2", "50", "10");
        }).toThrow("must be a number");
    });
});



