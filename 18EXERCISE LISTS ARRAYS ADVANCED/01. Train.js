function train(array) {
    let trainSize = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());
    for (let i = 0; i < array.length; i++) {
        let adding = array[i].split(' ').map(Number);
        if (adding.length == 2) {
            trainSize.push(adding[1]);
        } else {
            for (let j = 0; j < trainSize.length; j++) {
                if ((adding[0] + trainSize[j]) <= maxCapacity) {
                    trainSize[j] = (adding[0] + trainSize[j]);
                    break;
                }
            }
        }
    }
    console.log(trainSize.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);