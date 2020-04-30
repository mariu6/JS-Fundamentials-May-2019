function final(input) {
    let array = input.shift().split(' ');
    let command = input.shift().split(' ');

    while (command[0] !== 'Stop') {
        switch (command[0]) {
            case 'Swap':
                swap(command[1], command[2]);
                break;
            case 'Replace':
                replace(command[1], command[2]);
                break;
            case 'Delete':
                del(command[1]);
                break;
            case 'Put':
                put(command[1], command[2]);
                break;
            case 'Sort':
                sort();
                break;
            default:
                break;
        }
        command = input.shift().split(' ');
    }
    console.log(array.join(' '));


    function swap(word1, word2) {
        if (array.includes(word1) !== -1 && array.includes(word2) !== -1) {
            let buff = array[array.indexOf(word1)];
            array[array.indexOf(word1)] = array[array.indexOf(word2)];
            array[array.indexOf(word2)] = buff;
        }
        return;
    }

    function replace(word1, word2) {
        if (array.includes(word2)) {
            array[array.indexOf(word2)] = word1;
        }
        return;
    }

    function del(position) {
        position = Number(position) + 1;
        if (position >= 0 && position < array.length) {
            array.splice(position, 1);
        }
        return;
    }

    function put(word, position) {
        position = Number(position) - 1;
        if (Number(position) >= 0 && Number(position) <= array.length) {
            array.splice(Number(position), 0, word);
        }
        return;
    }

    function sort() {
        array.sort((a, b) => b.localeCompare(a));
        return;
    }
}
final([ 'Congratulations! You last also through the have challenge!',
'Swap have last',
'Replace made have',
'Delete 2',
'Put it 4',
'Sort',
'Stop',
'' ]);

final([ 'This the my quest! final',
'Put is 2',
'Swap final quest!',
'Delete 2',
'Stop',
'' ]);