function bomb(array, bomba) {
    let bombNumber = bomba[0];
    let power = bomba[1];
    while (array.includes(bombNumber)) {
        let indexOfOccur = array.indexOf(bombNumber);
        if ((indexOfOccur - power) < 0) {
            let subZero = 0 - (indexOfOccur - power);
            array.splice(0, ((power * 2) + 1) - subZero);
        } else {
            array.splice((indexOfOccur - power), ((power * 2) + 1));
        }
    }
    console.log((array.length) ? array.reduce((a, b) => a + b) : 0);
}
// bomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bomb([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
bomb([1, 2, 2, 1, 1, 1], [2, 3]);