function solve(x,y,z) {
    let big = Number.MIN_SAFE_INTEGER;
    if (x > big) {
        big = x;
    }
    if (y > big) {
        big = y;
    }
    if (z > big) {
        big = z;
    }
    console.log(big);
}
solve(-2,7,3);