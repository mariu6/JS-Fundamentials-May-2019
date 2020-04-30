function sort(array) {
    let map = new Map();
    map.set("one", 1);
    map.set("eight", 8);
    map.set("two", 2);
    // Сортиране по стойност
    let sortedValues = Array.from(map.entries())  // правим масив от тюпъли и сортираме
        .sort((a, b) => a[1] - b[1]);             // по [1] - втория елемент (стойност)
    // Сортиране по ключ
    let sortedKeys = Array.from(map.entries())
        .sort((a, b) => a[0].localeCompare(b[0]));
    // Принтиране в конзолата
    for (let kvp of sortedValues) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
    for (let kvp of sortedKeys) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
sort([['one', 1], ['eight', 8], ['two', 2]]);

function anotherSort() {
    const data = [['one', 1], ['three', 3], ['minusFive', -5]];
    const map = new Map(data);
    // взимаме само стойностите, като превръщаме map в масив([...map]) и
    // от всеки тюпъл(.map()) взимаме само вторият елемент - стойността 
    const valuesOnly = [...map].map(tuple =>/*no tuple[0]*/ tuple[1]);
    valuesOnly.sort((a, b) => a - b);  // [ -5, 1, 3 ] сортиране по възходящ ред
    valuesOnly.sort((a, b) => b - a);  // [ 3, 1, -5 ] сортиране по низходящ ред
    console.log(valuesOnly);
}
anotherSort()

function anotherSortShort() {
    const data = [['one', 1], ['three', 3], ['minusFive', -5]];
    const map = new Map(data);
    let sortedValues = [...map]        // Сортиране по стойност
        .map(tuple => tuple[1])
        .sort((a, b) => b - a);
    console.log(sortedValues);         // Сортиране по ключ
    let sortedKeys = [...map]
        .map(tuple => tuple[0])
        .sort((a, b) => b.localeCompare(a));
    console.log(sortedKeys);
}
anotherSortShort()

// СОРТИРАНЕ НА ОБЕКТИ (по стойност) с еднакви ключове
function sortObject() {
    const data = [['over 18', { age: 24 }], ['under 18', { age: 12 }]];

    let sorted = [...new Map(data)]   // [...спредва се] до масив от тюпъли
            .map(tuple => tuple[1])   // взимаме вторите им елементи[1] - {обектите}
            .sort((a,b) => b.age - a.age); // сортираме по ключ .age
    console.log(sorted);      // принтираме масив от сортирани обекти
}
sortObject()

// Сортиране на два обекта (по стойност) с различни ключове
function sortObj() {
    const data = [['over 18', { john: 24 }], ['under 18', { simon: 12 }]];

    let sorted = [...new Map(data)]  // [...спредва се] до масив от тюпъли
            .map(tuple => tuple[1])  // взимаме вторите им елементи[1] - {обектите}
            .sort((a,b) => b.john - a.simon);  // сортираме по ключове .age
    console.log(sorted);      // принтира масив от сортирани обекти
}
sortObj() 





function doubleSortObj(array) {
    class Names {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    let arrayObj = [];
    array.map(x => x.split(' '))
        .forEach(i => {
            let person = new Names();
            person.name = i[0];
            person.age = i[1];
            arrayObj.push(person);
        });
    // console.log(array);
    console.log(arrayObj);

   
    // СОРТИРАНЕ НА МАСИВ ОТ ОБЕКТИ ПО ДВА КРИТЕРИЯ    ARRAY OBJECTS 2 CRITERIA
    function sortObject(mine) {           //1. mine е масивът, направен с class constructor
        let sorted = mine.sort(sort2D);   //2. извиквам функцията за сортиране, не става само с една
        // console.log(sorted);           //3. може направо да се принтира сортирания масив от обекти
        return sorted;                    //4. или да се върне, за допълнителна обработка

        function sort2D(a,b) {                       //1. функцията винаги е с (a,b), нали сортира
            let firstCriteria = b.age - a.age;       //2. сорт по първи критерий(.age, .length и т.н.)
            if (firstCriteria === 0) {               //3. ако първият връща, че са равни
                return a.name.localeCompare(b.name); //4. връща сортиран по втори критерий и излиза от функцията
            }                                        //   (не стана с[name]), а с .name
            return firstCriteria;                     //5. връща сортиран по първи критерий и излиза
        }
    }
    sortObject(arrayObj);
    console.log(arrayObj);
}

// doubleSortObj(['Isacc 24', 'Theodor 23', 'Jack 27', 'Harrison 48', 'George 113']);
doubleSortObj(['Isacc 20', 'Theodor 24', 'Jack 48', 'Harrison 24', 'George 113']);