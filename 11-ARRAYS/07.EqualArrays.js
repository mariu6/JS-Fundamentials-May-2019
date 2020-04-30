function equal(arr1,arr2) {
    let sum1 = 0;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        sum1 += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
    }
    for (let i = 0; i < arr1.length; i++) {
       if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
       }
    }
    console.log(`Arrays are identical. Sum: ${sum1}`);
}
equal(['1','2','3','4','5'], ['1','2','4','4','5']);