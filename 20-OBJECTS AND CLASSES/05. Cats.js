function cats(array) {
    let cats = [];                           // Създавам масив за класовете на котките

    class Cat {                             // Създавам клас - конструктор за котките
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    for (let i = 0; i < array.length; i++) {      // Цикъл за пълнене на класовете и добавяне в масива cats
        let catData = array[i].split(' ');
        let name, age;
        [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));            // добавянето в масива
    }
    meow(cats);

    function meow(arrayOfObjects) {
        arrayOfObjects.forEach(x => console.log(`${x.name}, age ${x.age} says Meow`));
    }  //за всеки обект в масива => принтирай (масив.name, масив.age)
}
cats(['Mellow 2', 'Tom 5']);