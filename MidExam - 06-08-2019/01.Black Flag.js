function black(array) {
    let days = Number(array[0]);
    let dailyPlunder = Number(array[1]);
    let expected = Number(array[2]);
    let totalPlunder = 0;
    for (let i = 1; i <= days; i++) {
        if (i % 3 === 0) {
            totalPlunder += (dailyPlunder * 1.5);
        } else if (i % 5 === 0) {
            totalPlunder += dailyPlunder;
            totalPlunder = totalPlunder * 0.7;
        } else {
            totalPlunder += dailyPlunder;
        }
    }

    if (totalPlunder >= expected) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = totalPlunder * 100 / expected;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

black(['5', '40', '100']);

black(['10', '20', '380']);