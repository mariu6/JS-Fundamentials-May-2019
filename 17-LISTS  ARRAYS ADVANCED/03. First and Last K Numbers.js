function firstAndLast(array) {
    let k = array.shift();
    let firstK = array.slice(0, k);
    let lastK = array.slice(array.length - k);
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
firstAndLast([2, 7, 8, 9]);
firstAndLast([3, 6, 7, 8, 9]);