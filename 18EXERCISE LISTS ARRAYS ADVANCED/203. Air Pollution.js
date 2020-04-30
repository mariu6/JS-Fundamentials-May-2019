function pollution(map, forces) {
    let array = [...map].map(x => x.split(' ').map(Number));
    for (let force of forces) {
        force = force.split(' ');
        switch (force[0]) {
            case 'breeze':
                breeze(Number(force[1]));
                break;
            case 'gale':
                gale(Number(force[1]));
                break;
            case 'smog':
                smog(Number(force[1]));
                break;
            default:
                break;
        }
    }
    let toPrint = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (array[i][j] >= 50) {
                toPrint.push(`[${i}-${j}]`);
            }
        }
    }
    if (toPrint.length) {
        console.log(`Polluted areas: ${toPrint.join(', ')}`);
    } else {
        console.log(`No polluted areas`);
    }
    

    function breeze(index) {
        array[index] = array[index].map(x => Math.max((x - 15), 0));
    }

    function gale(index) {
        for (let i = 0; i < array.length; i++) {
            array[i][index] = Math.max((array[i][index] - 20), 0);
        }
    }

    function smog(value) {
       for (let i = 0; i < array.length; i++) {
           for (let j = 0; j < array[0].length; j++) {
               array[i][j] += value;
           }
       }
    }
}
pollution(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'], ['breeze 1', 'gale 2', 'smog 25']);

pollution([ '5 7 3 28 32',
'41 12 49 30 33',
'3 16 20 42 12',
'2 20 10 39 14',
'7 34 4 27 24' ], [ 'smog 11', 'gale 3', 'breeze 1', 'smog 2' ]);

pollution([ '5 7 2 14 4',
'21 14 2 5 3',
'3 16 7 42 12',
'2 20 8 39 14',
'7 34 1 10 24' ], [ 'breeze 1', 'gale 2', 'smog 35' ]);