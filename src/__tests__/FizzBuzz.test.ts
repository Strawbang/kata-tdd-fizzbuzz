import { FizzBuzz } from '../FizzBuzz';

describe('FizzBuzz', ()=> {
    test('should return Fizz when the input is divisible by 3', () => {
        const input : number = 147;
        const actual : number | String = FizzBuzz(input);
        expect(actual).toBe('Fizz');
    })
})