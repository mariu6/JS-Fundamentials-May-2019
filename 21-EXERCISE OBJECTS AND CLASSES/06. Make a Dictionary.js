function dictionary(input) {
    let dictionary = {};                         // Създаваме обект, който ще пълним
    let parsedItems = input.map(JSON.parse);    // Парсване от JSON

    parsedItems.forEach((item) => {
        let tuple = Object.entries(item);    // Object.entries ни прави МАСИВ/ARRAY от тюпълИ! (keys, values ще върне само масив, не тюпъл)
        let term = tuple[0][0];              // console.log(tuple[0][0]);
        let definition = tuple[0][1];        // console.log(tuple[0][1]);

        // Добавяме 'term: definition'  в dictionary{}. По този начин и заменяме с последно, ако има дублиране
        dictionary[term] = definition;
    });
    let sortedItems = Object.entries(dictionary)   // Правим масив, който може да бъде сортиран.  Чист обект не се сортира!
        .sort((a, b) => a[0].localeCompare(b[0]));

        sortedItems.forEach(x => console.log(`Term: ${x[0]} => Definition: ${x[1]}`));    // Принтиране
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);