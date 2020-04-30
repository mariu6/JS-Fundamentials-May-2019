function addSub(a,b,c) {
    let sum = (firstNum, secondNum) => firstNum + secondNum;
    let subtract = (result, thirdNum) => result - thirdNum;
    let result = sum (a,b);
    console.log((subtract(result,c)));
}
addSub(32, 6, 10);