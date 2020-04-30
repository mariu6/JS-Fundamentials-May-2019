function eGifts(input) {
    let basket = input.shift().split(" ");
    let i = 0;
    while (input[i] !== 'No Money') {
        let commands = input[i].split(" ");
        switch (commands[0]) {
            case 'OutOfStock':
                while (basket.includes(commands[1])) {
                    let positionFound = basket.indexOf(commands[1]);
                    basket[positionFound] = 'None';
                }
                break;
            case 'Required':
                let requiredPosition = Number(commands[2]);
                if (requiredPosition >= 0 && requiredPosition < basket.length) {
                    basket[requiredPosition] = commands[1];
                }
                break;
            case 'JustInCase':
                basket.pop();
                basket.push(commands[1]);
                break;
        }
        i++;
    }
    basket = basket.filter((n) => n !== 'None');
    console.log(basket.join(' '));
}
eGifts(['Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs', 
    'Required Spoon 2', 
    'JustInCase ChocolateEgg', 
    'No Money']);

eGifts(['Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
    ]);    
