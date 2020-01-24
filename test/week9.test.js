const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
} = require("../challenges/week9");


describe("sumMultiples", () => {
    test("returns the sum of any numbers that are multiples of 3 or 5", () => {
        expect(sumMultiples([1, 3, 5,])).toBe(8);
        expect(sumMultiples([1, 10, 30,])).toBe(40);
    });
    test("still works with decimal numbers", () => {
        expect(sumMultiples([1.5, 3.7, 5.0,])).toBe(5);
    });
    test("return 0 is there are no multiples of 3 or 5", () => {
        expect(sumMultiples([7, 13,])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("returns true if string contains characters C, G, T or A only", () => {
        expect(isValidDNA("CGTA")).toBe(true);
    });
    test("returns false if string contain characters C, G, T or A and other characters", () => {
        expect(isValidDNA("AMTAM")).toBe(false);
    });
    test("still works for lower case", () => {
        expect(isValidDNA("atta")).toBe(true);
    });
});

describe("getComplementaryDNA", () => {
    test("it returns a complementary DNA to the one it was passed", () => {
        expect(getComplementaryDNA("ATGC")).toBe("TACG");
        expect(getComplementaryDNA("GTAT")).toBe("CATA");
    });
});

describe("isItPrime", () => {
    test("returns true if number is a prime number and false if not", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(7)).toBe(true);
    });
    test("returns false if number is a prime number and true if not", () => {
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(20)).toBe(false);
        expect(isItPrime(22)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("returns a matrix of 1 * 1 when passed 1", () => {
        expect(createMatrix(1, "foo")).toEqual([["foo"]]);
    });
    test("returns a matrix of 3 * 3 when passed 3", () => {
        expect(createMatrix(3, "foo")).toEqual([
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"]
            ]);
    });
});


describe("areWeCovered", () => {
    test("returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
    });
    test("returns false if there are staff but less that 3 scheduled to work", () => {
        const staff = [
            {name: "gary", rota: ["Monday", "Tuesday"]},
            {name: "paul", rota: ["Monday", "Tuesday"]},
            {name: "sally", rota: ["Monday", "Tuesday"]},
            {name: "jess", rota: ["Monday", "Tuesday"]}
        ];
        expect(areWeCovered(staff, "Sunday")).toBe(false);
    });

    test("returns true if there are staff and > 3 are scheduled to work on the day provided", () => {
        const staff = [
            { name: "Thor", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
            { name: "Hawkeye", rota: ["Monday", "Tuesday"] },
            { name: "Ironman", rota: ["Tuesday", "Wednesday", "Saturday", "Sunday"] },
            { name: "Spiderman", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"] },
        ];
        expect(areWeCovered(staff, "Wednesday")).toBe(true);
    });
});

