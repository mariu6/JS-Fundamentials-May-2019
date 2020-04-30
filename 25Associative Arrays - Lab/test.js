// let map = new Map();
// map.set("one", 1);
// map.set("eight", 8);
// map.set("two", 2);
// let sorted = Array.from(map.entries())
//     .sort((a, b) => a[1] - b[1]);
// for (let kvp of sorted) {
//     console.log(`${kvp[0]} -> ${kvp[1]}`);
// }

function tracker(array) {
    let newArray = array[0].split(' ');
    // let list = [];
    let map = new Map();
    for (let i = 0; i < newArray.length; i++) {
        let word = newArray[i];
        let counter = 0;
        while (array.includes(word)) {
            counter++;
            array.splice((array.indexOf(word)), 1)
        }
        // list[word] = counter;
        map.set(word, counter);
    }
    let sorted = Array.from(map.entries())
        .sort((a, b) => b[1] - a[1]);
    for (let kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }

    // var arrayToSort = Object.keys(list).map(function (key) {
    //     return { word: key, count: list[key] };
    // });
    // arrayToSort.sort(function (a, b) { return b.count - a.count });

    // console.log(arrayToSort);

}
tracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
tracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'sentence', 'sentence', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);