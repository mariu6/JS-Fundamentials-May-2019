function carWash(input) {
    let value = 0;
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        switch (command) {
            case 'soap':
                value += 10;
                break;
            case 'water':
                water();
                break;
            case 'vacuum cleaner':
                vacuum();
                break;
            case 'mud':
                mud();
                break;

            default:
                break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);

    function water() {
        return (value += value * 0.2);
    }

    function vacuum() {
        return (value += value * 0.25);
    }

    function mud() {
        return (value -= value * 0.1);
    }
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);