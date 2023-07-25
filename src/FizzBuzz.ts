export const FizzBuzz = (input: number) : number | String => {
    if (input% 3 === 0 && input% 5 === 0) return ('FizzBuzz');
    if (input% 3 === 0) return ('Fizz');
    if (input% 5 === 0) return ('Buzz');
    return input;
}

export const FizzBuzzF = (input: number) : String => {
    switch (true){
        case input% 3 === 0 && input% 5 === 0: return ('FizzBuzz');
        case input% 3 === 0 : return ('Fizz');
        case input% 5 === 0 : return ('Buzz');
        default: return `${input}`
    }
}