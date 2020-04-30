function steps(array) {
    let steps = Number(array[0]);
    let lengthOfStep = Number(array[1]);
    let distance = Number(array[2]);
    let currentDistance = 0;

    for (let i = 1; i <= steps; i++) {
        if (i % 5 == 0) {
            currentDistance += (lengthOfStep * 0.7);
        } else {
            currentDistance += lengthOfStep;
        }
    }
    let percentage = currentDistance / distance;
    console.log(`You travelled ${percentage.toFixed(2)}% of the distance!`)
}

steps(['100', '2', '1']);
steps(['5000', '7.5', '500']);
