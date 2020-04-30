function hunt(input) {
    let array = input.shift().split('|');
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'Yohoho!') {
            break;
        }

        let line = input[i].split(' ');
        let command = line.shift();
        switch (command) {
            case 'Loot':
                for (let j = 0; j < line.length; j++) {
                    if (array.indexOf(line[j]) === -1) {
                        array.unshift(line[j]);
                    }
                }
                break;
            case 'Drop':
                drop(line[0]);
                break;
            case 'Steal':
                steal(line[0]);
                break;

            default:
                break;
        }
    }

    let weigth = 0;
    for (let k = 0; k < array.length; k++) {
        weigth += array[k].length;
    }
    let averageGain = weigth / array.length;
    if (array.length > 0) {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }



    function drop(index) {
        index = Number(index);
        if (index >= 0 && index < array.length) {
            let dropped = array.splice(index, 1);
            array.push(dropped[0]);
        }
    }

    function steal(count) {
        count = Number(count);
        let stealed = array.splice((array.length -count), count);
        console.log(stealed.join(', '));
    }
}

hunt(['Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!','Steal 3']);

// hunt(['Diamonds|Silver|Shotgun|Gold',
//     'Loot Silver Medals Coal',
//     'Drop -1',
//     'Drop 1',
//     'Steal 6',
//     'Yohoho!']);