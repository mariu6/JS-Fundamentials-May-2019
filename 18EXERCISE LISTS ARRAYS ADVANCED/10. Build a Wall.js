function walls(array) {
    let output = [];
    let sectionVolume = 0;
    let price = 0;
    while (Math.min(...array) < 30) {
        sectionVolume = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 30) {
                array[i]++;
                increase(array[i]);
            }
        }
        output.push(sectionVolume);
    }
    console.log(output.join(', '));
    console.log(`${price} pesos`);

    function increase(section) {
        sectionVolume += 195;
        price += 195 * 1900;
    }
}
walls([21, 25, 28]);
walls([17]);