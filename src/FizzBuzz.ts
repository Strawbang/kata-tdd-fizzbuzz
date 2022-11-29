export const FizzBuzz = (number: number) : number | String => {

    if (number% 3 === 0) {
        return ('Fizz');
    }

    return number;
}