function bar(input) {
    let totalSum = 0;
    input.forEach(line => {
        const pattern = /\%(?<customer>\b[A-Z][a-z]+)\%(\w*[^\||\$|\%|\.]*)<(?<product>\w+)>(\w*[^\$|\%|\.]*)\|(?<quantity>\d+)\|[^\||\$|\%|\.|\d]*[A-Za-z]*(?<price>\d+.*\d+)\$/gm;  // трябва да е вътре
        let result = pattern.exec(line);    // проверка за валидност                                    // иначе ми връща само първия ред . 
        if (result) {
            let total = (Number(result.groups.quantity) * Number(result.groups.price));
            console.log(`${result.groups.customer}: ${result.groups.product} - ${total.toFixed(2)}`);
            totalSum += Number(total);
        }
    });
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}


bar([ '%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift' ]);


bar([ '%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift' ]);