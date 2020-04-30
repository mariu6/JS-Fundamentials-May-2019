function sums(num) {
    num = num.toString();
    let odd = 0;
    let even = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 != 0) {
            odd += Number(num[i]);
        } else {
            even += Number(num[i]);
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
sums(1000435);
sums(3495892137259234);
