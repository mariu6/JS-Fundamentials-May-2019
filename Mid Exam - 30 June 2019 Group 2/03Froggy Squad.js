function frogs(array) {
    let squad = array.shift().split(" ");
    let command = array.shift().split(" ");
    let count = 0;
    while (command[0] !== 'Print') {
        switch (command[0]) {
            case 'Join':
                squad.push(command[1]);
                break;
            case 'Jump':
                if (command[2] < squad.length && command[2] >= 0) {
                    squad.splice(command[2], 0, command[1]);
                }
                break;
            case 'Dive':
                if (command[1] < squad.length && command[1] >= 0) {
                    squad.splice(command[1], 1);
                }
                break;
            case 'First':
                count = squad.slice(0,Math.min(Number(command[1]),squad.length));
                console.log(count.join(' '));
                break;
            case 'Last':
                count = squad.slice((squad.length-Number(command[1])), squad.length);
                console.log(count.join(' '));
                break;
            default:
                break;
        }
        command = array.shift().split(' ');
    }
    if (command[1] === 'Normal') {
        console.log(`Frogs: ${squad.join(' ')}`);
    } else {
        console.log(`Frogs: ${squad.reverse().join(' ')}`);
    }
}

// frogs(['Blake Muggy Kishko', 'Join Kvachko', 'Dive 0', 'First 10', 'Print Reversed']);

frogs(['A B C D E F', 'Join G', 'Jump Q 3', 'Last 3', 'Dive 2', 'Print Normal']);