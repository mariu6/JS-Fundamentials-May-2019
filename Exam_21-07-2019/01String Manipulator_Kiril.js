function solve(input) {    
    let text = '';       // Прави обект с всеки ключ: командата и стойност - функцията

    const add = (string) => {   // добавяне на стринг
        text += string;   // или text = text.concat(string);
    };

    const upgrade = (char) => {  // ъпгрейд на на всеки char +1 
        let incrementedChar = String.fromCharCode(char.charCodeAt(0) + 1);
        // сменяме буквата със следващата в аски таблицата (напр 98(b) става 99(c) )
        let regex = new RegExp(char, 'g');  // new RegExp(променлива, флагове) 
        // ако се използва направо = /char/g, ще търси стринга 'char'. Не става и с /${char}/g.

        text = text.replace(regex, incrementedChar)   // ще реплейсне всички мачнати regex изрази с incrementedChar
        // ако вместо regex беше char, щеше да замени само първият срещнат елемент
    };

    const print = () => {     // принтиране на текста в конзолата
        console.log(text);
    };

    const findIndex = (char) => {   // намиране на позициите на определен char и принтирането им
        let indexes = [];   // създаваме масив за да запазим в него мачнатите позиции
        // не ползваме .forEach, защото не работи на стринга, а на масиви
        for (let i = 0; i < text.length; i++) {  // въртим цикъл през всички елементи на стринга
            let currentChar = text[i];    // променлива за проверявания елемент

            if (currentChar === char) {   // ако проверявания елемент отговаря на търсения
                indexes.push(i);     // добави позицията му към масива за индексите
            }

        }
        // if (indexes.length === 0) {  // ако няма намерени съвпадения,
        //     console.log('None');     // принтирай Ноне
        // } else {                    // а ако има,
        //     let output = indexes.join(' ');  // правим променлива, в която са всички намерени индекси
        //     console.log(output);             // и разпечатваме
        // }

        // Алтернативно, с терарен оператор
        let output = indexes.length === 0 // ако е = 0,
        ? 'None'                          // слагам None,
        : indexes.join(' ');              // иначе обедини резултатите 
        console.log(output);              // принтирай
    };

    const remove = (string) => {     // за премахване на стринг от нашия стринг
        let regex = new RegExp(string, 'g');  // си правим регекс с въпросния стринг и глобалвн флаг
        text = text.replace(regex, '');       // и заменяме намерените съвпадения с празен стринг('') 
    };

    let commandParser = {       // правим абстрактен обект за извикване на командите
        'Add': add,             // на ключ Add стойността е референцията на функцията add
        'Upgrade': upgrade,     // на ключ Upgrade слагаме стойност референцията на upgrade
        'Print': print,         // и т.н. 
        'Index': findIndex,
        'Remove': remove
    };

    for (const line of input) {
        if (line === 'End') {    // ако командата е end,
            break;              // да прекъсне
        }

        let tokens = line.split(' ');   // за да използваме обекта, разделяме всеки ред
        let command = tokens.shift();   // изваждаме  командата от реда, 

// Вземи ми функцията, която е за дадената команда и й подай всичките параметри, които имаш вътре!
        commandParser[command](...tokens); // Абстрактен обект
        // за да извикаме правилната функция, извикваме от обекта елемента [command],
        // чиято стойност е функция. Параметрите могат да бъдат 1 или повече, затова 
        // подаваме със ...спред оператора    
    }
}
solve(['Add abracadabra',
    'Print',
    'Upgrade a',
    'Print',
    'Index b',
    'Remove bbrb',
    'Print',
    'End']); 