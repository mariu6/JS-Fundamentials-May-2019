function stone(input) {
    let lines = input.shift();
    let template = input.splice(0, lines).map(x => x.split(' ').map(Number));
    let message = [...input].map(x => x.split(' ').map(Number));
    let overlay = [...message];
    let toPrint = [];
    decode(message);

    for (let i = 0; i < overlay.length; i++) {
        for (let j = 0; j < overlay[0].length; j++) {
            toPrint.push(overlay[i][j]);
        }
    }
    console.log(toPrint.join(''));

    function decode(area) {
        for (let i = 0; i < message.length; i += template.length) {
            for (let j = 0; j < message[0].length; j += template[0].length) {
                for (let a = 0; a < template.length; a++) {
                    for (let b = 0; b < template[0].length; b++) {
                        if ((i + a) < message.length && (j + b) < message[0].length) {
                            overlay[i + a][j + b] += template[a][b];
                            overlay[i + a][j + b] = convert(overlay[i + a][j + b]);
                        }
                    }
                }
            }
        }
    }

    function convert(symbol) {
        if ((symbol%27) == 0) {
            return ' ';
        }
        return String.fromCharCode((symbol%27) + 64);
    }
}

stone(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']);

stone([ '2',
'31 32',
'74 37',
'19 0 23 25',
'22 3 12 17',
'5 9 23 11',
'12 18 10 22' ]);

stone([ '1',
'1 3 13',
'12 22 14 13 25 0 4 24 23',
'18 24 2 25 22 0 0 11 18',
'8 25 6 26 8 23 13 4 14',
'14 3 14 10 6 1 6 16 14',
'11 12 2 10 24 2 13 24 0',
'24 24 10 14 15 25 18 24 12',
'4 24 0 8 4 22 19 22 14',
'0 11 18 26 1 19 18 13 15',
'8 15 14 26 24 14 26 24 14' ]);


