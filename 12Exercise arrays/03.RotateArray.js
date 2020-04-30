// 3.	Rotate Array
// Write a function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
// The input comes as array of strings. The last element of the array is the amount of rotation you need to perform.
// The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.

function rotateArray(array) {
    let rotations = array.pop();                // getting the last element as counter of rotations
    for (let i = 0; i < rotations; i++) {       // loop for count number   
        array.unshift(array.pop());             // pushing in the beggining (unshift) a new element with the 
    }                                           // value of the last element, and removing it in the same time (pop)
    console.log(array.join(' '));               // print the new array values, separated with space
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

