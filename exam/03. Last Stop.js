function lastStop(input) {
    let paintingNumber = input.shift().split(" ").map(Number);
    let i = 0;
    while (input[i] !== 'END') {
        let commands = input[i].split(" ");
        commands[1] = Number(commands[1]);
        commands[2] = Number(commands[2]);
        switch (commands[0]) {
            case 'Change':
                if (paintingNumber.includes(commands[1])) {
                    let positionFound = paintingNumber.indexOf(commands[1]);
                    paintingNumber[positionFound] = commands[2];
                }
                break;
            case 'Hide':
                if (paintingNumber.includes(commands[1])) {
                    let positionFound = paintingNumber.indexOf(commands[1]);
                    paintingNumber.splice(positionFound, 1);
                }
                break;
            case 'Switch':
                if (paintingNumber.includes(commands[1]) && paintingNumber.includes(commands[2])) {
                    let positionFound1 = paintingNumber.indexOf(commands[1]);
                    let positionFound2 = paintingNumber.indexOf(commands[2]);
                    let buffer = paintingNumber[positionFound1];
                    paintingNumber[positionFound1] = commands[2];
                    paintingNumber[positionFound2] = buffer;
                }
                break;
            case 'Insert':
                if (commands[1] >= 0 && commands[1] < paintingNumber.length) {
                    paintingNumber.splice((commands[1] + 1), 0, commands[2]);
                }
                break;
            case 'Reverse':
                paintingNumber.reverse();
                break;
        }
        i++;
    }
    console.log(paintingNumber.join(' '));
}
lastStop(['115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse',
    'Change 73 70',
    'Insert 10 85',
    'END']);

lastStop(['77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END']);