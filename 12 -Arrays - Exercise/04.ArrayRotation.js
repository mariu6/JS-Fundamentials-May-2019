function arrayRotation(input, rotations) {
    rotations %= input.length;
    for (let i = 0; i < rotations; i++) {
        let last = input[0];
        for (let j = 0; j < input.length - 1; j++) {
            input [j] = input[j + 1];
        }
        input[input.length - 1] = last;
    }
    console.log(input.join(` `));
}
arrayRotation([2,4,15,31], 4);