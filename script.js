function printNumber(number) {
    let value = '';

    if (number % 3 === 0) {
        value += "Fizz";
    }

    if (number % 5 === 0) {
        value += "Buzz";
    }

    return `${number} = ${value || number}`;
}

for (let index = 1; index <= 100; index++){
    console.log(printNumber(index));
}


//varian with real array
// const numebrArray = [];
// function createArray (length) {
//     for (let index = 1; index <= length; index++){
//         numebrArray.push(index);
//     }
// }

// createArray(100);

// numebrArray.map( number => {
//     console.log(printNumber(number));
// });


