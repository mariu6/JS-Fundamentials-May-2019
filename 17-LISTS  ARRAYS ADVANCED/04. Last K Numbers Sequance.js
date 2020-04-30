function numbSequence(n, k) {
    let sequence = [1];
    for (let i = 1; i < n; i++) {
        let sliced = sequence.slice(Math.max((i-k),0), i);

        // let sum = sliced.reduce((a, b) => a + b);
        let sum = 0;
        sliced.map((num) => sum += num);

        // sequence.push(sum);
        sequence.splice(i,0,sum);
    }
    console.log(sequence.join(' '));
}
numbSequence(6, 3);
numbSequence(8, 2);