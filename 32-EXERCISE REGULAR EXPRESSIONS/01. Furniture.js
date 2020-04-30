function furniture(array) {
    console.log('Bought furniture:');
    let totalSum = 0;
    array.forEach(line => { 
        const pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+[.]?[\d]*)!(?<quantity>[\d]+)/gm;  // трябва да е вътре
        let result = pattern.exec(line);                                        // иначе ми връща само първия ред
        if (result) {
            console.log(result.groups.name);
            totalSum += (Number(result.groups.price) * Number(result.groups.quantity));
        }
    });
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);