import { divide } from "../src/calculator.js";

describe("divide function", () => {

    test("correctly divides two valid numbers", () => {
        expect(divide(10, 2)).toBe(5);
    });

    test("throws TypeError when first argument is not a number", () => {
        expect(() => divide("hello", 2)).toThrow(TypeError);
        expect(() => divide("hello", 2)).toThrow("Both arguments must be numbers");
    });

    test("throws TypeError when second argument is not a number", () => {
        expect(() => divide(2, "world")).toThrow(TypeError);
        expect(() => divide(2, "world")).toThrow("Both arguments must be numbers");
    });

    test("throws Error when arguments are NaN", () => {
        expect(() => divide(NaN, 1)).toThrow(Error);
        expect(() => divide(NaN, 1)).toThrow("Arguments can not be NaN");

        expect(() => divide(1, NaN)).toThrow(Error);
        expect(() => divide(1, NaN)).toThrow("Arguments can not be NaN");
    });

    test("throws RangeError when dividing by zero", () => {
        expect(() => divide(10, 0)).toThrow(RangeError);
        expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
    });

});
