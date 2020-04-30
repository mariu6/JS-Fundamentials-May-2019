function race(array) {
    let participants = array.shift().split(', ');
    let results = {};
    let topThree;
    array.forEach(line => {
        if (line !== 'end of race') {
            let namePattern = /[A-Za-z]/gm;
            let distancePattern = /[\d]/gm;
            let name = line.match(namePattern).join(''); // Хваща всички букви и ги конкатенира с join('')  
            if (participants.includes(name)) {
                let distance = line.match(distancePattern).map(Number).reduce((a, b) => a + b);
                // хваща всички цифри, прави ги на номера и ги събира с .reduce

                if (!results[name]) {     // Ако няма обект с [име]
                    results[name] = 0     // го създай
                }
                results[name] += distance;    // obj.name = distance (George: 40)
            }
            topThree = Object.keys(results)
                .sort((a, b) => results[b] - results[a])  // прави по подразбиране втора сортировка по азбучен ред
                .slice(0, 3);  //(0,3) взима без 3 - 0, 1 и 2
        }
    });

    
    topThree.forEach((participant, i) => {
        let p = '';
        switch (i) {
            case 0:
                p = '1st';
                break;
            case 1:
                p = '2nd';
                break;
            case 2:
                p = '3rd';
                break;

        }
        console.log(`${p} place: ${participant}`);
    });
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);

    // +a = Number(a)