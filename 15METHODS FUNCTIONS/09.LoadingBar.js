function loadingBar(persentage) {
    let full = '%';
    let empty = '.';
    if (persentage == 100) {
        console.log(`100% Complete!`);
        console.log(`[${full.repeat(10)}]`);
    } else {
        console.log(`${persentage}% [${full.repeat(persentage / 10)}${empty.repeat((100 - persentage) / 10)}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(30);