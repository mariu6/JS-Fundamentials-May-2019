function negativePositive(array) {
    let newArr = [];
    array.forEach(element => {
        if (element >= 0) {
            newArr.push(element);
        } else {
            newArr.unshift(element);
        }
    });
    console.log(newArr.join('\n'));
}
negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);