function max(input) {
    let out = '';
    for (let i = 0; i < input.length; i++) {
        let isMax = true;
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] <= input[j]) {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            out += `${input[i]} `;
        }
    }
    console.log(out);
}
max([14, 24, 3, 19, 15, 17]);