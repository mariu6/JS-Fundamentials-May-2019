function neighbors(input) {
    let output = 0;
    for (let i = 1; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if ((input[i][j] === input[i - 1][j])) {
                output++;
            }
        }
    }
    for (let i = 0; i < input.length; i++) {
        for (let j = 1; j < input[i].length; j++) {
            if ((input[i][j - 1] === input[i][j])) {
                output++;
            }
        }
    }
    console.log(output);
}
neighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);
neighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);
neighbors([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]);