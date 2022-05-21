const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const getRandomChar = (): string => {
    return possibleChars[Math.floor(Math.random() * possibleChars.length)];
};

const makeRandomString = (stringLength: number): string => {
    let result = '';
    for (let i = 0; i < stringLength; i++) {
        result += getRandomChar();
    }
    return result;
};
console.log(makeRandomString(10));

