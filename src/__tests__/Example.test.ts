import {Example} from './../Example';

describe('Example', ()=> {
    test('should return input 1 to be 1', () => {
        const input : Number = 1;
        const actuals : Number = Example(input);
        expect(actuals).toBe(input);
    })
})