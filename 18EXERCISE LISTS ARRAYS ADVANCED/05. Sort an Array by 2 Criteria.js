function doubleCheck(array) {
    let sorted = array.sort(sortNames);           // Извикване на функцията за сравнение
    console.log(sorted.join('\n'));               // принтиране на сортирания масив

    function sortNames(a, b) {                    // функция за сравняване (като arrow функция с (a,b)=>{})
        let firstCriteria = a.length - b.length;  // Първо ги сравнява по пропърти дължина
        if (firstCriteria === 0) {                // Ако дължината е еднаква
            return a.localeCompare(b);            // прави сравненние по азбучен ред
        }
        return firstCriteria;                    // връща резултата
    }
}
doubleCheck(['alpha', 'beta', 'gamma']);
// doubleCheck(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// doubleCheck(['test', 'Deny', 'omen', 'Default']);


// 5.	 Sort an Array by 2 Criteria
// Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as array of strings.
// The output is the ordered array of strings.

// Hints
// ·	An array can be sorted by passing a comparing function to the Array.sort() function
// ·	Creating a comparing function by 2 criteria can be achieved by first comparing by the main criteria, if the 2 items are different (the result of the compare is not 0) - return the result as the result of the comparing function. If the two items are the same by the main criteria (the result of the compare is 0), we need to compare by the second criteria and the result of that comparison is the result of the comparing function






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