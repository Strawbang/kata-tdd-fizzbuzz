import { FizzBuzz } from '../FizzBuzz';

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
})