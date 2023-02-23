let input = 'abcde';

const reverseString = words => {
    let result = '';
    for (let i = words.length - 1; i >= 0; i--) {
        result += words.charAt(i);
    }

    return result;
}

console.log("Input  : ", input);
console.log("Output : ", reverseString(input));
