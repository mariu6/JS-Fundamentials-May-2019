function solve(n) {
    for (let i = 1; i <=n; i++) {
        let num = '';
        for (let j = 1; j <= i; j++) {
            num += i + ' ';
        }
        console.log(num);
    }
}
solve(5)