function flag(input) {
    let [days, perDay, target] = [...input].map(Number);
    let total = 0;

    for (let i = 1; i <= days; i++) {
        total += perDay;
        if (i % 3 == 0) {
            total += perDay * 0.5;
        }
        if (i % 5 == 0) {
            total = total * .7;
        }
    }
    if (total >= target) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`)
    } else {
        let pers = total * 100 / target;
        console.log(`Collected only ${pers.toFixed(2)}% of the plunder.`)
    }

}

flag(['5', '40', '100']);

flag(['10', '20', '380']);