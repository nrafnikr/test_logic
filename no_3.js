function printDigitValue(str) {
    const numStr = str.replace(/[^0-9]/g, '');
    console.log(+numStr)
    const numDigits = numStr.length;

    for (let i = 0; i < numDigits; i++) {
        const posValue = Math.pow(10, numDigits - i - 1);
        const digit = parseInt(numStr.charAt(i));
        console.log(digit * posValue);
    }
}

printDigitValue('9.86-A5.321');