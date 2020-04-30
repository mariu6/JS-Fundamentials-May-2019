function encription(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 'end') {
            const pattern = /(?<artist>[A-Z][\s']*[a-z\s']+):(?<song>[A-Z\s]+)/g;   //шаблон
            if (array[i].match(pattern) !== null) {  // тоя null(когато още първия елемент не минава) ми изяде 1 час
                if (array[i] === array[i].match(pattern)[0]) { // ако входа и мачнатия съвпадат, значи е валиден
                    let resultMach = array[i].match(pattern); // изваждам съвпаденията, поставям ги в масив, за да му взема дължината после
                    let newString = '';                       // нов стринг за обработения стринг
                    let artist = resultMach[0].split(':')[0];
                    [...array[i]].forEach(char => {           // правя масив от стринга, за да мога да го обходя буква по буква

                        let newCharCode;
                        if (char.charCodeAt(0) === 58) {
                            newCharCode = 64;
                        } else if ((char.charCodeAt(0) !== 39) && (char.charCodeAt(0) !== 32)) {  // да не променя спейс 32 или апостроф 39
                            newCharCode = char.charCodeAt(0) + artist.length;
                        } else {
                            newCharCode = char.charCodeAt(0);
                        }

                        if ((newCharCode > 90 && char.charCodeAt(0) <= 90) || (newCharCode > 122)) {
                            newCharCode -= 26;   // ако главните са над 90 или малките са над 122, да връща с 26 символа
                        }
                        char = String.fromCharCode(newCharCode);   // изваждам резултата от търсенето от аски кода на буквите
                        newString += char;                          // редя си нов стринг от вяка буква със сменен аски код
                    });
                    console.log(`Successful encryption: ${newString}`);   // принтира при успешно криптиране
                } else {
                    console.log(`Invalid input!`);      // при неуспешно криптиране
                }
            } else {
                console.log(`Invalid input!`); 
                с// при неуспешно криптиране на първия елемент, когато не мине проверката по шаблон
            }

        } else {
            break;
        }
    }
}
// encription(['guns n\'roses:BACK IN BLACK',
//     'sLipKnot:BLEED IT OUT',
//     'ReD Hot CiLly PePers:KILLSHOT',
//     'end']);

    encription(['Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end']);

    encription([ 'Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    'Guns n\'roses:NOVEMBER RAIN',
    'Christina Aguilera: HuRt',
    'end' ]);
