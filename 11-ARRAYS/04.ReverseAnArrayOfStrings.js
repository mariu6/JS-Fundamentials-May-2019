function reverse  (inputString) {
    for (let i = 0; i < inputString.length / 2; i++) {
       let buffer = inputString[i];

       inputString[i] = inputString[inputString.length - 1 - i];
       inputString[inputString.length - 1 - i] = buffer;
    }
    console.log(inputString.join(' '));
}
reverse(['a', 'b', 'c', 'd', 'e']);