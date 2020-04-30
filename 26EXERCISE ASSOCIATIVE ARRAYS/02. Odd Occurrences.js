function odd(input) {
    let array = input.toLowerCase().split(' ');
    let map = new Map();
    while (array.length) {
        let word = array.shift();
        let counter = 1;  // защото с array.shift() взимаме първия елемент с това име и трябва да го преброим.
        while (array.includes(word)) {
            counter++;
            array.splice((array.indexOf(word)), 1)
        }
        if (!map.has(word)) {
            map.set(word, counter);
        }
    }
    let output = '';
    for (const key of map) {
        if (key[1] % 2 != 0) {
            output += key[0] + ' ';
        }
    }
    console.log(output);
}
odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');