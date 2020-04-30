function bunnyDoom(input) {
    let bombs = input.pop().split(' ');
    let array = [...input].map(x => x.split(' ').map(Number));
    let damageCount = 0;
    let deadBunniesCount = 0;
    for (let i = 0; i < bombs.length; i++) {
        explode(bombs[i]);
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (array[i][j] > 0) {
                deadBunniesCount++;
                damageCount += array[i][j];
            }
        }
    }
    console.log(damageCount);
    console.log(deadBunniesCount);

    function explode(coordinates) {
        let coord = coordinates.split(',').map(Number);
        let damage = array[coord[0]][coord[1]]
        for (let i = Math.max(0, (coord[0] - 1)); i <= Math.min(array.length - 1, (coord[0] + 1)); i++) {
            for (let j = Math.max(0, (coord[1] - 1)); j <= Math.min(array[0].length - 1, (coord[1] + 1)); j++) {
                array[i][j] -= Math.min(array[i][j], damage);
            }
        }
        damageCount += damage;
        if (damage > 0) {
            deadBunniesCount++;
        }
    }
}
bunnyDoom(['10 10 10 10',
    '10 10 10 10',
    '10 10 10 10',
    '10 10 10 10', '2,0 2,1']);


// bunnyDoom(['10 10 10',
//     '10 10 10',
//     '10 10 10', '2,0']);

// bunnyDoom(['5 10 15 20',
//     '10 10 10 10',
//     '10 15 10 10',
//     '10 10 10 10',
//     '2,2 0,1']);

