function concert(input) {
    let onStage = input.pop();          // взимам последния елемент, за да го принтирам после с членовете
    let totalTime = 0;                  // инициализирам си тотал време
    let addMembers = {};                // инициализирам си обект с ключове - групи и сойности - масиви от членове 
    let addTime = {};                   // обикновен обект с ключове - групи и стойности - време
    for (let i = 0; i < input.length; i++) {            // въртя през елементите на масива
        let [command, group, data] = input[i].split('; ');  //разделям всеки ред на команда, група и данни

        if (command === 'Add') {                    // ако командата е да добавя
            let newMembers = data.split(', ');      // правя масив от членовете на групата

            if (!addMembers.hasOwnProperty(group)) {    // АКО НЯМА ГРУПА / ако обектът НЯМА такъв КЛЮЧ
                addMembers[group] = [];                 // я създавам
            }
            for (const member of newMembers) {                  // обхождам новите данни    
                if (!addMembers[group].includes(member)) {      // сравнявам дали има такъв член вече
                    addMembers[group].push(member);             // ако няма - добавям
                }
            }

        } else if (command === 'Play') {            // Ако командата е да свирят
            let time = Number(data);                // форматирам данните като число
            if (!addTime.hasOwnProperty(group)) {   // ако ОБЕКТЪТ НЯМА такъв КЛЮЧ
                addTime[group] = time;              // го създавам и направо му давам стойност
            } else {                                // ако вече има такъв ключ
                addTime[group] += time;             // добавям към стойността му
            }
            totalTime += time;                      // и в двата случая добавям към тотал времето

        } else if (input[i] === 'start of concert') {       // Ако командата е Начало на концерта
            console.log(`Total time: ${totalTime}`);        // принтирам тотал времето
            let sortedObject = Object.entries(addTime).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
              // правя нов сортиран обект - взимам ключовете и стойностите и сортирам по стойност[1] или азбучен ред[0]
            for (const line of sortedObject) {            // обхождам сортирания обект
                console.log(`${line[0]} -> ${line[1]}`);  // и принтирам групите с времената
            }
            console.log(onStage);                   // принтирм първата група на сцената
            let members = addMembers[onStage];      // инициализирам нов масив, сотйностите взимам от обекта с ключ групата 
            for (const member of members) {         // обхождам новия обект с членовете на групата
                console.log(`=> ${member}`);        // и ги принтирам по един на ред
            }
        }
    }
}

concert(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones']
);

// concert(['Add; The Beatles; John Lennon, Paul McCartney',
//     'Add; The Beatles; Paul McCartney, George Harrison',
//     'Add; The Beatles; George Harrison, Ringo Starr',
//     'Play; The Beatles; 3698',
//     'Play; The Beatles; 3828',
//     'start of concert',
//     'The Beatles']
// );