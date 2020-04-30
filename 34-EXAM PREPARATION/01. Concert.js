function manageConcert(arr) {
    let addMembers = {};
    let playTime = {};
    let totalTime = 0;
    let bandNameToPRint = arr.pop();   // взимаме последния елемент
 
    for (let i = 0; i < arr.length; i++) {          // взимаме елементите(редовете) на масива
        let currentLine = arr[i];                   // създаваме променива за реда

        if (currentLine === 'start of concert') {                       // АКО Е СТАРТ НА КОНЦЕРТА
            console.log(`Total time: ${totalTime}`);                    // принтираме времето
 
            let sortedByTime = Object.entries(playTime)                  // Създаваме масив и сортираме по низходящ ред по време или по азбучен ред
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
 
            for (let band of sortedByTime) {                    // обхождаме сортирания масив от тюпъли [групи, време]
                let [bandName, time] = band;                    // създаваме променливи за име на група и време
 
                console.log(`${bandName} -> ${time}`);
            }
 
            console.log(bandNameToPRint);               // Принтираме групата от последния елемент на входния масив
 
            let allMembers = addMembers[bandNameToPRint];  // Създаваме масив и го пълним с стойностите на ключа bandNameToPRint
 
            for (let mem of allMembers) {       // обхождаме масива 
                console.log(`=> ${mem}`);       // и принтираме елементите - членовете на групата
            }
            // console.log();
            // console.log(addMembers);
            // console.log();
            // console.log(playTime);
 
        } else {                                    // АКО НЕ Е СТАРТ НА КОНЦЕРТА
            let [command, group, values] = currentLine.split('; ');  // разделяне на реда на три променливи
 
            if (command === 'Play') {                      // ако командата е PLAY
                let time = Number(values);                 // взимаме стойността на третата променлива за време
 
                if (!playTime.hasOwnProperty(group)) {     // създаване на ЕЛЕМЕНТ В ОБЕКТА, АКО НЕ Е СЪЗДАДЕН
                    playTime[group] = 0;                   // инициализираме го,
                }
                playTime[group] += time;                    // и го пълним
                totalTime += time;                          // пълним и общото време

            } else if (command === 'Add') {                 // ако командата е ADD
                let members = values.split(', ');           // разделяме последната променлива по ", " за да вземем членовете
 
                if (!addMembers.hasOwnProperty(group)) {    // създаване на МАСИВ В ОБЕКТА, АКО НЕ Е СЪЗДАДЕН
                    addMembers[group] = [];                 // инициализираме Масива
                }
 
 
                for (let member of members) {                    // обхождаме новите данни 
 
                    if (!addMembers[group].includes(member)) {  // сравняваме дали не са записани вече, ако не са
                        addMembers[group].push(member);         // ги добвяме в addMembers
                    }
 
                }
            }           // така докато стигнем до командата за старт
        }
    }
}
manageConcert([ 'Play; The Beatles; 2584',
'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
'Play; Eagles; 1869',
'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
'Play; The Rolling Stones; 4239',
'start of concert',
'The Rolling Stones' ]);

// manageConcert([ 'Add; The Beatles; John Lennon, Paul McCartney',
// 'Add; The Beatles; Paul McCartney, George Harrison',
// 'Add; The Beatles; George Harrison, Ringo Starr',
// 'Play; The Beatles; 3698',
// 'Play; The Beatles; 3828',
// 'start of concert',
// 'The Beatles' ]); 
 