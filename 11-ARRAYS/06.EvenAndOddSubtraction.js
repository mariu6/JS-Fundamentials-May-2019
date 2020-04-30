function substract(input) {
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
        if (input[i] % 2 === 0) {
            sumEven += input[i]; 
        } else {
            sumOdd += input[i];
        }
    }
    console.log(sumEven - sumOdd);
}
substract([3,5,7,9]);