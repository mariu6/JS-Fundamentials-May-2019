function tracker(array) {
    let newArray = array[0].split(' ');
    let map = new Map();
    if (newArray != '') {
        for (let i = 0; i < newArray.length; i++) {
            let word = newArray[i];
            let counter = 0;
            while (array.includes(word)) {
                counter++;
                array.splice((array.indexOf(word)), 1)
            }
            if (!map.has(word)) {
                map.set(word, counter);
            }
        }
        let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
        for (let element of sorted) {
            console.log(`${element[0]} - ${element[1]}`);
        }
    } 
}
tracker([
    'sentence this', 'In', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
tracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'sentence', 'sentence', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
