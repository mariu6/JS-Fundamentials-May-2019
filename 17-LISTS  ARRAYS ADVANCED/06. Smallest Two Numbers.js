function smallestTwo(array) {
    let sortedInAscending = array.sort((a,b) => a-b);
    console.log(sortedInAscending.slice(0,2).join(' '));
}
smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);