function star(input) {
    let n = Number(input.shift());
    let outputArrayA = [];
    let outputArrayD = [];
    let limit = Math.min(n, input.length);
    // Дериптиране и поставяне в масив
    for (let i = 0; i < limit; i++) {
        const pattern = /[s|t|a|r]/gi;                  //шаблон
        let resultMach = input[i].match(pattern);       // изваждам съвпаденията, поставям ги в масив, за да му взема дължината после
        let newString = '';                             // нов стринг за обработения стринг
        [...input[i]].forEach(char => {                 // правя масив от стринга, за да мога да го обходя буква по буква
            char = String.fromCharCode(char.charCodeAt(0) - resultMach.length);   // изваждам резултата от търсенето от аски кода на буквите
            newString += char;                          // редя си нов стринг от вяка буква със сменен аски код
        });

        //  верифициране на новополучените стрингове
        let dataPattern = /\@(?<planetName>[A-Za-z]+)(\w*[^\@|\-|\!|\:\>]*)(?<population>\:\d+)(\w*[^\@|\-|\!|\:\>]*)!(?<AD>[A|D])!(\w*[^\@|\-|\!|\:\>]*)->(?<soldiers>\d+)/gi;
        let validPlanet = dataPattern.exec(newString);   // сравняване на всеки декриптиран стринг дали е истинен

        // console.log(validPlanet);

        if (validPlanet) {                                           // ако имам валидна планета
            if (validPlanet.groups.AD === 'A') {                     // проверявам дали атакувам
                outputArrayA.push(validPlanet.groups.planetName);    // и добавям в масив за Атака 
            } else {                                                 //  или
                outputArrayD.push(validPlanet.groups.planetName);    // добавям към масива за Разрушаване
            }
        }
    }
    // input.forEach(string => {
    //     const pattern = /[s|t|a|r]/gi;
    //     let resultMach = string.match(pattern);
    //     let newString = '';
    //     [...string].forEach(char => {
    //         char = String.fromCharCode(char.charCodeAt(0) - resultMach.length);
    //         newString += char;
    //     });
    //     let dataPattern = /\@(?<planetName>[A-Za-z]+)(\w*[^\@|\-|\!|\:\>]*)(?<population>\:\d+)(\w*[^\@|\-|\!|\:\>]*)!(?<AD>[A|D])!(\w*[^\@|\-|\!|\:\>]*)->(?<soldiers>\d+)/gi;
    //     let validPlanet = dataPattern.exec(newString);
    //     // console.log(validPlanet);
    //     if (validPlanet) {
    //         if (validPlanet.groups.AD === 'A') {
    //             outputArrayA.push(validPlanet.groups.planetName);
    //         } else {
    //             outputArrayD.push(validPlanet.groups.planetName);
    //         }
    //     }
    // });

    // След като имам два масива с резултатите, елиминирам повтарящите се със SET()
    let setA = new Set(outputArrayA);
    let setD = new Set(outputArrayD);

    // проверявам дали не са празни
    if (outputArrayA.length === 0 && outputArrayD.length === 0) {
        console.log(`Attacked planets: 0`);
        console.log(`Destroyed planets: 0`);
    } else {                                                         // ако поне един има нещо в него, подреждам ги и ги принтирам
        console.log(`Attacked planets: ${[...setA].length}`);
        [...setA].sort((a, b) => a.localeCompare(b)).forEach(planet => console.log(`-> ${planet}`));
        console.log(`Destroyed planets: ${[...setD].length}`);
        [...setD].sort((a, b) => a.localeCompare(b)).forEach(planet => console.log(`-> ${planet}`));
    }
}

// star(['2',
//     'STCDoghudd4=63333$D$0A53333',
//     'EHfsytsnhf?8555&I&2C9555SR']);

star(['7',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR',
    'tt(\'\'DGsvywgerx>6444444444%H%1B9444',
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);


// Attacked planets: 1
// -> Alderaa
// Destroyed planets: 1
// -> Cantonica
