function giftBox(array) {
    let sizeOfSide = Number(array[0]);
    let numberOfSheets = Number(array[1]);
    let areaOfSheet = Number(array[2]);
    let fullArea = (sizeOfSide ** 2) * 6;
    let percentage = ((numberOfSheets * areaOfSheet)
                     - (Math.floor(numberOfSheets / 3) * areaOfSheet * 0.75))
                     * 100 / fullArea;
    console.log(`You can cover ${(percentage).toFixed(2)}% of the box.`);
}
giftBox(['5', '30', '4']);
giftBox(['2.5', '32', '4.25']);