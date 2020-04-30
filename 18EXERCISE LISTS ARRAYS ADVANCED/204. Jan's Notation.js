function notation(input) {
    let numbers = [];
    for (let i = 0; i < input.length; i++) {
        if (!isNaN(input[i])) {
            numbers.push(input[i]);
        } else {
            calculate(input[i]);
        }
    }
    if (numbers.length > 1) {
        console.log('Error: too many operands!');
    } else if (isNaN(numbers)) {
        console.log('Error: not enough operands!');
    } else {
        console.log(numbers[0]);
    }

    function calculate(operator) {
        let last = numbers.pop();
        let prev = numbers.pop();
        let result = 0;
        switch (operator) {
            case '+':
                result = last + prev;
                numbers.push(result);
                break;
            case '-':
                result = prev - last;
                numbers.push(result);
                break;
            case '*':
                result = prev * last;
                numbers.push(result);
                break;
            case '/':
                result = prev / last;
                numbers.push(result);
                break;
            default:
                break;
        }
    }
}
notation([3, 4, '+']);
notation([5, 3, 4, '*', '-']);
notation([7, 33, 8, '-']);
notation([15, '/']);
notation([31, 2, '+', 11, '/']);
notation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);