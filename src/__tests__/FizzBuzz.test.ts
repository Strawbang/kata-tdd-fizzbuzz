import { FizzBuzz, FizzBuzzF } from '../FizzBuzz';

describe('FizzBuzz', ()=> {
    test('should return Fizz when the input is divisible by 3', () => {
        const input : number = 147;
        const actual : number | String = FizzBuzz(input);
        expect(actual).toBe('Fizz');
    })
    test('should return Buzz when the input is divisible by 5', () => {
        const input : number = 50;
        const actual : number | String = FizzBuzz(input);
        expect(actual).toBe('Buzz');
    })
    test('should return FizzBuzz when the input is divisible by 3 and 5', () => {
        const input : number = 30;
        const actual : number | String = FizzBuzz(input);
        expect(actual).toBe('FizzBuzz');
    })
    test('should return same number when the input is not divisible by 3 / 5 / 3 and 5', () => {
        const input : number = 1;
        const actual : number | String = FizzBuzz(input);
        expect(actual).toBe(input);
    })
})

describe('FizzBuzzF', ()=> {
    test.each([
        ["Fizz", 147],
        ["Buzz", 50],
        ["FizzBuzz", 30],
        ["1", 1]
    ])("Should return '%s' when the input is '%d'", (text, number) => {
        const input : number = number;
        const actual : String = FizzBuzzF(input);
        expect(actual).toBe(text);
    })
})