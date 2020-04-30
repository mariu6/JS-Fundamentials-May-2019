function war(input) {
    let pirateStatus = input.shift().split('>').map(Number);
    let warshipStatus = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'Retire') {
            break;
        }

        let line = input[i].split(' ');
        let command = line.shift();
        line = line.map(Number);
        switch (command) {
            case 'Fire':
                if (line[0] >= 0 && line[0] < warshipStatus.length) {
                    warshipStatus[line[0]] -= line[1];
                    if (warshipStatus[line[0]] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    }
                }
                break;

            case 'Defend':
                let startIndex = line[0];
                let endIndex = line[1];
                let damage = line[2];
                if ((startIndex >= 0 && startIndex < pirateStatus.length) && (endIndex >= 0 && endIndex < pirateStatus.length)) {
                    for (let j = startIndex; j <= endIndex; j++) {
                        pirateStatus[j] -= damage;
                        if (pirateStatus[j] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }
                }
                break;

            case 'Repair':
                let index = line[0];
                let health = line[1];
                if (index >= 0 && index < pirateStatus.length) {
                    pirateStatus[index] += health;
                    pirateStatus[index] = Math.min(pirateStatus[index], maxHealth);
                }
                break;

            case 'Status':
                let count = 0;
                for (let j = 0; j < pirateStatus.length; j++) {
                    if (pirateStatus[j] < (maxHealth * .2)) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
                break;

            default:
                break;
        }

    }

    let pirateShipSum = 0;
    let warshipSum = 0;
    for (let i = 0; i < pirateStatus.length; i++) {
        pirateShipSum += pirateStatus[i];
    }
    for (let i = 0; i < warshipStatus.length; i++) {
        warshipSum += warshipStatus[i];
    }
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
}


// war(['12>13>11>20>66',
//     '12>22>33>44>55>32>18',
//     '70',
//     'Fire 2 11',
//     'Fire 8 100',
//     'Defend 3 6 11',
//     'Defend 0 3 5',
//     'Repair 1 33',
//     'Status',
//     'Retire']);

war([ '2>3>4>5>2',
'6>7>8>9>10>11',
'20',
'Status',
'Fire 2 3',
'Defend 0 4 11',
'Repair 3 18',
'Retire' ]);