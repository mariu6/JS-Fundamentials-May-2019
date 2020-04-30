function solve(input) {
    let days = 0;
    let totalSpice = 0;
    while (input >= 100) {
        days++;
        totalSpice += (input - 26);
        input -= 10;
    }
    totalSpice -= 26;
    if (totalSpice < 0) {
        totalSpice = 0;
    }
    console.log(days);
    console.log(totalSpice);
}
solve(90);