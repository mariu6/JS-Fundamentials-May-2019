function nElement(array) {
    let step = Number(array.pop());
    let newString = '';
    for (let i = 0; i < array.length; i += step) {
        newString += array[i] + ' ';
    }
    console.log(newString);
}
nElement(['5', '20', '31', '4', '20', '2']);