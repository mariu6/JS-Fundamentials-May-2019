function equal(array) {
    if (array.length == 1) {
        console.log(0);
        return;
    }
    for (let i = 1; i < array.length - 1; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let j = 0; j < i; j++) {
            sumLeft += array[j];
        }
        for (let j = i + 1; j < array.length; j++) {
            sumRight += array[j];
        }
        if (sumLeft === sumRight) {
            console.log(i);
            return;
        }
    }
    console.log(`no`);
}
equal([1]);