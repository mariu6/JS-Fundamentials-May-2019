function positiveOrNegative(num1, num2, num3) {
    let result = '';
    if (num1 < 0 && num2 < 0 && num3 < 0) {
        result = 'Negative';
    } else if (num1 < 0 && num2 < 0 && num3 >= 0) {
        result = 'Positive';
    } else if (num1 < 0 && num2 >= 0 && num3 < 0) {
        result = 'Positive';
    } else if (num1 < 0 && num2 >= 0 && num3 >= 0) {
        result = 'Negative';
    } else if (num1 >= 0 && num2 < 0 && num3 < 0) {
        result = 'Positive';
    } else if (num1 >= 0 && num2 < 0 && num3 >= 0) {
        result = 'Negative';
    }else if (num1 >= 0 && num2 >= 0 && num3 < 0) {
        result = 'Negative';
    } else if (num1 < 0 && num2 >= 0 && num3 >= 0) {
        result = 'Negative';
    } else if (num1 < 0 && num2 < 0 && num3 >= 0) {
        result = 'Positive';
    } else {
        result = 'Positive';
    }
    if(num1 == 0 || num2 == 0 || num3 == 0) {
        result = 'Positive';
    }
    console.log(result);
}
positiveOrNegative(-6, -12, 14);

function posOrNeg(n1,n2,n3) {
    if(n1*n2*n3 >= 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}
positiveOrNegative(-6, -12, 14);