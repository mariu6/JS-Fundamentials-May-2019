function sumEven(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
        if (input[i] % 2 === 0) {
            sum += input[i]; 
        }
    }
    console.log(sum);
}
sumEven(['2','4','6','8','10']);
