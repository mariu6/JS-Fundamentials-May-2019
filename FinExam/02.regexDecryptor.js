function decrypt(input) {
    let n = input.shift();

    for (let i = 0; i < n; i++) {
        let string = input[i];
        let pattern = /([$%])([A-Z][a-z]{2,})\1:\s(\[\d*\])\|(\[\d*\])\|(\[\d*\])\|/g;
        let match = pattern.exec(string);
        let strArr = [];
        if (match !== null) {
            if (match[0] === string) {
                for (let i = 3; i < 6; i++) {
                    let num1 = (match[i]).split('');
                    num1.shift();
                    num1.pop();
                    num1 = num1.join('');
                    let buff = String.fromCharCode(num1);
                    strArr.push(buff);
                }
                console.log(`${match[2]}: ${strArr.join('')}`);
            } else {
                console.log(`Valid message not found!`);
            }

        } else {
            console.log(`Valid message not found!`);
        }
    }
}
decrypt(['4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|']);

decrypt(['3',
    'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
    '$tAGged$: [97][97][97]|',
    '$Request$: [73]|[115]|[105]|true']);