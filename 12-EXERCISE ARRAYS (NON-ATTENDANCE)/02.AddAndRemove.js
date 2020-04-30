function addRemove(array) {
    let newArray = [];                              // declare new Array for the result 
    for (let i = 0; i < array.length; i++) {        // loop for the elements of the array with index i
        if (array[i] === 'add') {                   // check if the command is 'add' 
            newArray.push(i + 1);                   // in case of 'add' - add element at the end with value starting from 1 instead of 0 
        } else {                                    // else if 'remove', there is no other type of command
            newArray.pop();                         // delete the last element of the new Array
        }
    }
    if (newArray.length === 0) {                    // In case of more 'remove' than 'add', newArray will be empty
        console.log('Empty')                        // print 'Empty'
    } else {                                        // otherwise there will be new Array
        console.log(newArray.join(' '));            // print the new Array with spaces between the elements
    }
}
addRemove(['add', 'add', 'remove', 'add', 'add']);
