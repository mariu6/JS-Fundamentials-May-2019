function reverse(limit,input) {
    let result = [];
    for (let i = limit - 1; i >= 0; i--) {
       result.push(input[i]);
    }
    let toPrint = '';
    for (let i = 0; i < result.length; i++) {
        toPrint += (result[i] + ' ');
    }
console.log(toPrint);
}
reverse(3,[10,20,30,40,50]);