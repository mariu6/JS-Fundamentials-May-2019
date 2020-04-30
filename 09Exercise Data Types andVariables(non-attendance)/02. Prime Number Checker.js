function solve(prime) {
    let isPrime = true;
    for (let i = Math.floor(prime / 2); i >= 2; i--) {
        if (prime % i == 0) {
            isPrime = false;
        }
    }
    console.log(isPrime);
}
solve(77);