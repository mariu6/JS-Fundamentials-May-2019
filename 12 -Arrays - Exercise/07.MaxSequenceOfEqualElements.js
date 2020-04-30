function sequence(array) {
    let arrLong = new Array();
    let arrLonger = new Array();
    for (let i = 0; i < array.length; i++) {
        if (array[i - 1] === array[i]) {
            arrLong.push(array[i]);
        } else {
            arrLong = new Array();
            arrLong.push(array[i]);
        }
        if (arrLong.length > arrLonger.length) {
            arrLonger = arrLong;
        }
    }
    console.log(arrLonger.join(` `));
}
sequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);