function mergeArrays(input1, input2) {
    let output = [];
    for (let i = 0; i < input1.length; i++) {
        if (i % 2 === 0) {
            output[i] = Number(input1[i]) + Number(input2[i]);
        }else {
            output[i] = input1[i] + input2[i];
        }
    }
    console.log(output.join(` - `));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);