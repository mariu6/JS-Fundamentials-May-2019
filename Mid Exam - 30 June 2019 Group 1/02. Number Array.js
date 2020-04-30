function numbArr(input) {
    let positive = [];
    let array = input.shift().split(' ').map(Number);
    for (let i = 0; i < input.length; i++) {
        if (input === 'End') {
            break;
        }
        let line = input[i].split(' ');
        switch (line[0]) {
            case 'Switch':
                switching(line[1]);
                break;
            case 'Change':
                changing(line[1], line[2]);
                break;
            case 'Sum':
                if (line[1] === 'Negative') {
                    sum('negative');
                } else if (line[1] === 'Positive') {
                    sum('positive');
                } else {
                    sum('all');
                }
                break;

            default:
                break;
        }
    }
    output();
    console.log(positive.join(' '));

    function switching(position) {
        if (position >= 0 && position < array.length) {
            let element = Number(array[position]);
            element *= (-1);
            array[position] = element;
        }
    }

    function changing(position, value) {
        if (position >= 0 && position < array.length) {
            array[position] = Number(value);
        }
    }

    function sum(mark) {
        let sumPos = 0;
        let sumNeg = 0;
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 0) {
                sumPos += Number(array[i]);
            } else {
                sumNeg += Number(array[i]);
            }
            sum += Number(array[i]);
        }
        if (mark === 'positive') {
            console.log(sumPos);
        } else if (mark === 'negative') {
            console.log(sumNeg);
        } else {
            console.log(sum);
        }
    }

    function output() {
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 0) {
                positive.push(array[i]);
            }
        }
    }
}

// numbArr(['1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End']);

numbArr(['1 2 3 4 5 4 3 2 1 0',
    'Switch -4',
    'Change 13 0',
    'Switch 0',
    'Sum Positive',
    'Sum Negative',
    'Sum All',
    'End']);
