function contList(input) {
    let list = input.shift().split(' ');
    let exported = [];

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(' ');
        let command = line.shift();
        exported = [];
        switch (command) {
            case 'Add':
                add(line[0], Number(line[1]));
                break;
            case 'Remove':
                remove(line[0]);
                break;
            case 'Export':
                exp(Number(line[0]), Number(line[1]));
                break;
            case 'Print':
                print(line[0]);
                return;
        }
    }

    
    function add(contact, index) {
        if (list.indexOf(contact) !== -1) {
            if (index >= 0 && index < list.length) {
                list.splice(index, 0, contact);
            }
        } else {
            list.push(contact);
        }
    }

    function remove(index) {
        if (index >= 0 && index < list.length) {
            list.splice(index, 1);
        }
    }

    function exp(startIndex, count) {
        // startIndex = Math.max(0, startIndex);
        exported = list.slice(startIndex, (count + startIndex));
        console.log(exported.join(' '));
    }

    function print(flag) {
        if (flag === 'Normal') {
            let toPrint = list.join(' ');
            console.log(`Contacts: ${toPrint}`);
        } else {
            let reversed = [];
            for (let i = list.length - 1; i >= 0; i--) {
                reversed.push(list[i]);
            }
            let reversedToPrint = reversed.join(' ')
            console.log(`Contacts: ${reversedToPrint}`);
        }
    }
}


contList(['Alisson Bellamy Candace Tristan',
    'Remove 3',
    'Add Bellamy 2',
    'Print Normal']);

contList(['Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 3',
    'Add Jacob 0',
    'Export -5 3',
    'Export 3 2',
    'Print Reversed', 'Export 3 8', 'Print Normal']);
