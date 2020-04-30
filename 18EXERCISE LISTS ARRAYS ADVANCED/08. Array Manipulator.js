function manipulator(array, commands) {
    commands = commands.map((x) => x.split(' '));      // разделям на лейъри
    let command = commands.shift();                    // започвам да си режа лейъри 
    while (command[0] !== 'print') {
        switch (command.shift()) {
            case 'add':
                command = command.map(Number);
                add(command[0], command[1]);
                break;
            case 'addMany':
                command = command.map(Number);
                let newPatch = command.slice(1);
                addMany(command[0], newPatch);
                break;
            case 'contains':
                command = command.map(Number);
                console.log(contains(command[0]));
                break;
            case 'remove':
                command = command.map(Number);
                remove(command[0]);
                break;
            case 'shift':
                command = command.map(Number);
                shift(command[0]);
                break;
            case 'sumPairs':
                command = command.map(Number);
                sumPairs();
                break;

            default:
                break;
        }
        command = commands.shift();
    }
    console.log(array);


    function add(index, element) {
        return array.splice(index, 0, element);
    }

    function addMany(index, elements) {
        return array.splice(index, 0, ...elements);
    }

    function contains(element) {
        return array.indexOf(element);
    }

    function remove(index) {
        return array.splice(index, 1);
    }

    function shift(positions) {
        if (positions >= 0) {
            for (let i = 0; i < positions; i++) {
                array.push(array[0]);
                array.shift();
            }
        } else {
            for (let i = 0; i < Math.abs(positions); i++) {
                array.unshift(array[array.length - 1]);
                array.pop();
            }
        }

    }

    function sumPairs() {
        let newArray = [];
        for (let i = 0; i < array.length; i += 2) {
            if (isNaN(array[i+1])) {
                array[i+1] = 0;
            }
            newArray.push(array[i] + array[i + 1]);
        }
        array = [...newArray];
    }
}
// manipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains -3', 'print']);
// manipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift -1', 'print']);
manipulator([2, 2, 4, 2, 4], ['add 1 4', 'add 1 4', 'sumPairs', 'print']);
// manipulator([ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ], [ 'sumPairs', 'sumPairs', 'addMany 0 -1 -2 -3', 'print' ]);