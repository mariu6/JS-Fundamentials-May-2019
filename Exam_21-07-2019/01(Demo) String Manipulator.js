function strings(input) {
    let string = '';
    let command = input.shift().split(' ');
    while (command[0] !== 'End') {
        switch (command[0]) {
            case 'Print':
                console.log(string);
                break;
            case 'Upgrade':
                upgrd(command[1], string);
                break;
            case 'Index':
                indx(string, command[1]);
                break;
            case 'Remove':
                rmv(command[1], string);
                break;
            case 'Add':
                string += command[1];
                break;
            default:
                break;
        }
        command = input.shift().split(' ');
    }

    function upgrd(letter, text) {
        let old;
        let newLetter = letter.charCodeAt(0) + 1;
        newLetter = String.fromCharCode(newLetter);
        while (old !== text) {
            old = text;
            text = text.replace(letter, newLetter);
        }
        string = text;
    }

    function rmv(letter, text) {
        let old;
        while (old !== text) {
            old = text;
            text = text.replace(letter, '');
        }
        string = text;
    }

    function indx(text, search) {
        let words = text.split('');
        let indeces = '';
        for (let w of words) {
            if (w === search) {
                indeces += words.indexOf(search) + ' ';
                words.splice(words.indexOf(search),1,'*');
            }
        }
        console.log(indeces);
    }

}

strings(['Add abracadabra',
    'Print',
    'Upgrade a',
    'Print',
    'Index b',
    'Remove bbrb',
    'Print',
    'End'])