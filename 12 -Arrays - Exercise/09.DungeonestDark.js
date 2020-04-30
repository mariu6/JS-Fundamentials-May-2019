function dungeon(input) {
    let array = input.toString().split("|");
    let health = 100;
    let coins = 0;
    let bestRoom = 0;
    while (health > 0 && bestRoom < array.length) {
        let item = array[bestRoom].split(" ");
        bestRoom++;
        switch (item[0]) {
            case 'potion':
                health += Number(item[1]);
                if (health > 100) {
                    console.log(`You healed for ${item[1] - (health - 100)} hp.`);
                    health = 100;
                } else{
                    console.log(`You healed for ${item[1]} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += Number(item[1]);
                console.log(`You found ${item[1]} coins.`);
                break;
            default:
                health -= Number(item[1]);
                if (health > 0) {
                    console.log(`You slayed ${item[0]}.`);
                } else {
                    console.log(`You died! Killed by ${item[0]}.`);
                    console.log(`Best room: ${bestRoom}`);
                    return;
                }
                break;
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeon("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
// dungeon('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
// // console.log();
// dungeon('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');