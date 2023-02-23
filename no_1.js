const factorial = number => {
    let output = number;
    let process = number;
    for (let i = number - 1; i > 0; i--) {
        output *= i;
        process += `*${i}`
    }
    return (`(maka outputnya : ${output}) & (prosesnya : ${process})`)
}

console.log(factorial(4));
console.log(factorial(8));