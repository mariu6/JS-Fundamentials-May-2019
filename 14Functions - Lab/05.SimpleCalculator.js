function calculator(firstNum, secondNum, operator) {
    let multy = (a,b) => a * b;
    let divide = (a,b) => a / b;
    let add = (a,b) => a + b;
    let sub = (a,b) => a - b;
    switch (operator) {
        case 'multiply':
        return multy(firstNum,secondNum);
        case 'divide':
        return divide(firstNum,secondNum);
        case 'add':
        return add(firstNum,secondNum);
        case 'subtract':
        return sub(firstNum,secondNum);
    }
}
calculator(5,5,'multiply');
