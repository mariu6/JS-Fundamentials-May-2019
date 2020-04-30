function pointsValidation(array) {
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];

    console.log(`{${x1}, ${y1}} to {0, 0} is ${validator(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${validator(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validator(x1, y1, x2, y2)}`);

    function validator(input1, input2, input3, input4) {
        let result = 0;
        if (input3 !== 0 || input4 !== 0) {
            result = Math.sqrt((input1 - input3) ** 2 + (input2 - input4) ** 2);
        } else {
            result = Math.sqrt((input1 + input3) ** 2 + (input2 + input4) ** 2);
        }

        if (result === Math.floor(result)) {
            return 'valid';
        } else {
            return 'invalid';
        }
    }
}
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);