function totalPrice(item, amount) {
    switch (item) {
        case 'coffee':
            console.log((amount * 1.5).toFixed(2));
            break;
        case 'water':
            console.log((amount * 1).toFixed(2));
            break;
        case 'coke':
            console.log((amount * 1.4).toFixed(2));
            break;
        case 'snacks':
            console.log((amount * 2).toFixed(2));
            break;
    }
}
totalPrice('water',5);