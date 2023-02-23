let dataArray = [1, 4, 7, 9, 12]
let low = 2
let high = 15

const data = array => {
    let result = [];

    array.forEach(element => {
        if (element >= low && element <= high ) {
            result.push (element);
        }
    });
    return result.length;
}

console.log(data(dataArray));