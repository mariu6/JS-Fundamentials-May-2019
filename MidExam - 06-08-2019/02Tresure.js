function tresure(input) {
    let goods = input.shift().split('|');
    // console.log(goods);
    let i = 0;
    while (input[i] !== 'Yohoho!') {
        let line = input[i].split(' ');
        // console.log(line)
        let command = line.shift();
        // console.log(line)
        switch (command) {
            case 'Loot':
                for (let j = 0; j < line.length; j++) {
                    if (!goods.includes(line[j])) {
                        goods.unshift(line[j]);
                    }
                }
                break;

            case 'Drop':
                let index = Number(line[0]);
                if (index >= 0 && index < goods.length) {
                    let dropped = goods.splice(index, 1);
                    goods.push(dropped[0]);
                }
                break;

            case 'Steal':
                let count = Number(line[0]);
                let position = Math.min((goods.length - count), (goods.length -1));
                position = Math.max(0, (goods.length - count));
                let stealed = goods.splice(position);
                console.log(stealed.join(', '));
                break;
        }

        i++;
    }
    if (goods.length <= 0) {
        console.log("Failed treasure hunt.");
    } else {
        let sum = 0;
        let average = 0;
        for (let i = 0; i < goods.length; i++) {
            sum += goods[i].length;
        }
        average = sum / goods.length;
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }
}

// tresure(['Gold|Silver|Bronze|Medallion|Cup',
//     'Loot Wood Gold Coins',
//     'Loot Silver Pistol',
//     'Drop 3',
//     'Steal 3',
//     'Yohoho!']);

tresure(['Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 8',
    'Yohoho!']);