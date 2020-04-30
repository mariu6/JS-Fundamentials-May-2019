function solve (year) {
    let leapYear = 'no';
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        leapYear = 'yes';
    }
    console.log(leapYear);
}
solve(1984);
solve(2003);
solve(4);
