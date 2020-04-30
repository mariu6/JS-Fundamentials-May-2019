function printDNA(number) {
    let sequence = [['A', 'T'], ['C', 'G'], ['T', 'T'], ['A', 'G'], ['G', 'G']];
    for (let i = 0; i < number; i++) {
        console.log(`${a(i)}${b(i)}${c(i)}${d(i)}${e(i)}${f(i)}`);
    }

    function a(index) {
        let currentElement = sequence[(index % 5)];
        if ((index % 4) - 2 === 0) {
            return currentElement[0];
        } else {
            return '*';
        }
    }

    function b(index) {
        let currentElement = sequence[(index % 5)];
        if ((index % 4) === 0) {
            return '*';
        } else if ((index % 4) - 2 === 0) {
            return '-';
        } else {
            return currentElement[0];
        }
    }

    function c(index) {
        let currentElement = sequence[(index % 5)];
        if ((index % 4) === 0) {
            return currentElement[0];
        } else {
            return '-';
        }
    }

    function d(index) {
        let currentElement = sequence[(index % 5)];
        if ((index % 4) === 0) {
            return currentElement[1];
        } else {
            return '-';
        }
    }

    function e(index) {
        let currentElement = sequence[(index % 5)];
        if ((index % 4) === 0) {
            return '*';
        } else if ((index % 4) - 2 === 0) {
            return '-';
        } else {
            return currentElement[1];
        }
    }

    function f(index) {
        let currentElement = sequence[(index % 5)];
        if ((index % 4) - 2 === 0) {
            return currentElement[1];
        } else {
            return '*';
        }
    }
}
printDNA(10);
