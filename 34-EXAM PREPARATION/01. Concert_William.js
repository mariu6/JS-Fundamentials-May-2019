// 1. Процесираме инпута - за да си разграничим функционалностите
// 2. две функционалности - ADD(група, членове) & PLAY (група, време). 
// 2.1 Правим Мап и в него за членовете - Сет (за да не се повтарят имена) 
// 2.2 Структура:Map {'The Beatles' => { time: 2584, members: Set {'John Lennon',...} }, 'Eagles' => {...
// 3. Трябва да внимаваме да не загубим данни при овъррайтване, затова си вкарваме старите данни ...олдМап
// 4. луупване през стойности, .ентрис() - тюпъли, сортинг ( || )

function concert(array) {

    const bandMembers = new Map();    // извън двете функции
    // ДОБАВЯНЕ НА ГРУПА И ЧЛЕНОВЕ
    function saveBandAndMemebers(band, members) {
        if (!bandMembers.has(band)) {      // АКО Я НЯМА Групата
            bandMembers.set(band, {
                members: new Set(members)
            });    // new Set ще запази само уникалните членове, без да има повторения

        } else {                          // АКО Е  ВЕЧЕ РЕГИСТРИРАНА
            const currentValue = bandMembers.get(band);
            const currentMembers = [...bandMembers.get(band).members || []];
            // взимаме старите членове, слагаме ги в масив || ако няма все още сложени членове, връща празен масив
            const newMembers = currentMembers.concat(members);   // добавяме в този масив новите членове

            bandMembers.set(band, {   // овъррайд на старата стойност с нов обект,
                ...currentValue,     // затова трябва да се добави наново каквото е записано досега в обекта (time, members)
                members: new Set(newMembers) // обновяваме масива с новите членове, като махаме дубликатите
            });
        }
    }
    // ДОБАВЯНЕ НА ВРЕМЕ
    function addBandTime(band, time) {
        if (bandMembers.has(band)) {         // Ако ИМАМЕ такава група вече
            //  const {members, time: currentTime} = bandMembers.get(band);  // взимаме сегашните участници и времето (ако го няма - null) 
            const value = bandMembers.get(band);
            const members = value.members;  // тъй като value.members не съществува, members = undefind;
            const currentTime = value.time; // currentTime = undefind;

            bandMembers.set(band, {        // ТЪЙ КАТО СЕ СЕТВА, овъррайдва!!!... виж members 
                time: (currentTime || 0) + time,  // Ако тиме не е дефинирано, ще вземе 0 + time;
                members,               // ТЪЙ КАТО СЕ СЕТВА, ТРЯБВА ДА СЕ НАПИШЕ отново И MEMBERS, иначе ще ги загуби 
            });
        } else {                            // Ако НЯМАМЕ такава група все още
            bandMembers.set(band, {         // сетваме такава
                time                        // и добавяме време
            });
        }
    }

    // ИЗВАЖДАНЕ НА ОБЩОТО ВРЕМЕ от обекта 
    function getTotalTime() {
        let totalTime = 0;
        for (const [band, value] of bandMembers.entries()) {  // entries() ми дава тюпъли [band, values] със стойностите
            //  for(const[,value] of bandMembers.entries()) {         // band не го използване, може да остане празно 
            const { time } = value;   // time: 2584;
            //Map { 'The Beatles' => { time: 2584, members: Set { 'John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr' } },
            totalTime += time;
        }
        return totalTime;
    }

    //СОРТИРАНЕ НА ИЗХОДА ПО ВРЕМЕ || АЗБУЧЕН РЕД
    function sortBandsByTimePlayed() {
        const sortedBands = new Map([...bandMembers.entries()].sort((a, b) => b[1].time - a[1].time) || a[0].localeCompare(b[0]));  // в десцендинг ордер или азбучен ред?!?!
        // правим нов Мап от тюпълите на bandMembers.entries(), взимаме вторите стойности[1] - обектите, и стойностите на пропъртито му time
        // bandMembers.entries()  =  0: {"The Beatles"[0] => Object[1]}  , Object = {time: 2584, members: Set(4)}    
        return sortedBands;
    }

    // ПРИНТИРАНЕ В КОНЗОЛАТА на групите с времената им
    function logBandsAndTimePlayed(bands) {
        for (const [band, value] of bands.entries()) {
            console.log(`${band} -> ${value.time}`);
        }
    }
    // ПРИНТИРАНЕ В КОНЗОЛАТА на първата група с членовете й
    function logBandAndMembers(band) {
        console.log(band);
        const { members } = bandMembers.get(band);   // съкратена версия на втория ред (дестрактъринг)
        //  const members = bandMembers.get(band).members;    

        for (const member of members) {
            console.log(`=> ${member}`);
        }
    }

    // BODY НА ПРОГРАМАТА
    function processInput(input) {
        const bandToLog = input[input.length - 1];   // последният елемент от масива е първата гупа на сцената

        for (const line of input) {
            const [command, band, otherParams] = line.split('; ');

            if (command === 'Play') {
                const playTime = parseInt(otherParams);    // Ако е PLAY - да вземе времето

                addBandTime(band, playTime);
            } else if (command === 'Add') {
                const members = otherParams.split(', ');   // Ако е Add, взима членовете (сплитнати по ', ')

                saveBandAndMemebers(band, members);       // ползва функцията за добавяне (с не-дублиране на членове)

            } else {
                const totalTime = getTotalTime();            // връща общото време
                const sortedBands = sortBandsByTimePlayed();  // връща нов сортиран Мап()

                console.log(`Total time: ${totalTime}`);  // Принтира общото време
                logBandsAndTimePlayed(sortedBands);   //   принтира сортираните групи от по-горния ред и времената им
                logBandAndMembers(bandToLog);  // първата променлива от бодито на програмата е да вземе последния ред от инпута,
                // принтира я с членовете на групата
                // console.log(bandMembers);
                return;   // за да не взема последния елемент от масива, защото тогава пак ще мине през else
            }
        }
    }
    processInput(array);
}



concert(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones']);

    // processInput(['Add; The Beatles; John Lennon, Paul McCartney',
    // 'Add; The Beatles; Paul McCartney, George Harrison',
    // 'Add; The Beatles; George Harrison, Ringo Starr',
    // 'Play; The Beatles; 3698',
    // 'Play; The Beatles; 3828',
    // 'start of concert',
     // 'The Beatles']);






// for (var i = 0; i < 3; i++) {     // let дава 0 1 2 ,  var изчаква и дава 3 3 3 ?!?!?!
//     console.log(i);
//     setTimeout(() => {
//         console.log(i);
//     },1000);

// }