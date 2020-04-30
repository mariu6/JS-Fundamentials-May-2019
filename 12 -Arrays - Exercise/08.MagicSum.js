function magic(array, num) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (i !== j) {
                if ((array[i] + array[j]) == num) {
                    console.log(`${array[i]} ${array[j]}`);
                    // break;
                }
            }
        }
    }
}
magic([1, 7, 7, 7, 7, 7], 8);
console.log();
magic([1, 7, 6, 2, 19, 23], 8);
console.log();
magic([14, 20, 60, 13, 7, 19, 8], 27);
console.log();
magic([1, 2, 3, 4, 5, 6], 6);