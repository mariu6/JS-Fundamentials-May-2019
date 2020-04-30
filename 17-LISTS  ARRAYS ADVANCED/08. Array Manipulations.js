function manipulations(input) {
    let array = input.shift().split(' ').map(Number);
    for (let i = 0; i < input.length; i++) {
        let [command, firstNum, secondNum] = input[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':
                add(firstNum)
                break;
            case 'Remove':
                remove(firstNum);
                break;
            case 'RemoveAt':
                removeAt(firstNum);
                break;
            case 'Insert':
                insert(firstNum, secondNum);
                break;

            default:
                break;
        }
    }
    console.log(array.join(' '));

    function add(el) {
        array.push(el);
    }

    function remove(num) {
        array = array.filter(el => el !== num);
    }

    function removeAt(index) {
        array.splice(index, 1);
    }

    function insert(num, index) {
        array.splice(index, 0, num);
    }
}
manipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);