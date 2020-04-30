function sum(input) {
    let nums = input.map((n)=>Number(n));
    let firstNum = nums.shift();
    let lastNum = nums.pop();
    let sum = firstNum + lastNum;
    console.log(sum);
}
sum(['20', '30', '40']);
sum(['5', '10']);