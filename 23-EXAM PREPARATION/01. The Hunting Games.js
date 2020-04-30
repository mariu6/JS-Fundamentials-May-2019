function huntGames(input) {
    input = input.map(Number);
    let days = input.shift();
    let players = input.shift();
    let groupEnergy = input.shift();
    let waterPerDay = input.shift();
    let foodPerDay = input.shift();
    let totalWaterAmount = days * players * waterPerDay;
    let totalFoodAmount = days * players * foodPerDay;
    let bufferWater = totalWaterAmount;
    let bufferFood = totalFoodAmount;
    for (let i = 0; i < input.length; i++) {
        groupEnergy -= input[i];
        bufferWater = totalWaterAmount;
        bufferFood = totalFoodAmount;
        if ((i + 1) % 2 === 0) {
            groupEnergy *= 1.05;
            totalWaterAmount *= 0.7;
        }
        if ((i + 1) % 3 === 0) {
            groupEnergy *= 1.1;
            totalFoodAmount -= totalFoodAmount / players;
        }
        if (groupEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${bufferFood.toFixed(2)} food and ${bufferWater.toFixed(2)} water.`);
            break;
        }
    }
    if (groupEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    }
}
huntGames(['10',
    '7',
    '5035.5',
    '11.3',
    '7.2',
    '942.3',
    '500.57',
    '520.68',
    '540.87',
    '505.99',
    '630.3',
    '784.20',
    '321.21',
    '456.8',
    '330',
    '']);

huntGames(['12',
    '6',
    '4430',
    '9.8',
    '5.5',
    '620.3',
    '840.2',
    '960.1',
    '220',
    '340',
    '674',
    '365',
    '345.5',
    '212',
    '412.12',
    '258',
    '496',
    '']
);