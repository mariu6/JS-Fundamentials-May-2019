function odd(array) {
    let oddArray = array.filter((el,index,arr) => index % 2 !==0).reverse();
    let doubled = oddArray.map((element) => element *= 2);
    console.log(doubled.join(' '));
}
odd([10, 15, 20, 25]);
odd([3, 0, 10, 4, 7, 3]);