function party(input) {
    let list = [];
    for (let i = 0; i < input.length; i++) {
       let guest = input[i].split(' ');
       if (guest.length === 3) {
           if (list.includes(guest[0])) {
               console.log(`${guest[0]} is already in the list!`);
           } else {
               list.push(guest[0]);
           }
       } else {
        if (list.includes(guest[0])) {
            let position = list.indexOf(guest[0]);
            list.splice(position,1);
        } else {
            console.log(`${guest[0]} is not in the list!`);
        }
       }
    }
    console.log(list.join('\n'));
}
party(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);
party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);