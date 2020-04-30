function inventory(input) {
    let heroes = [];

    input.forEach((line) => {
        let [heroname, level, items] = line.split(' / ');
        // array
        items = items.split(', ');
        items.sort((a,b) => a.localeCompare(b));
        let hero = {
            name: heroname,
            level: Number(level),
            items: items
        };
        heroes.push(hero);
    });

    //Сортирае на обектите по level (Ibject array)
    heroes.sort((a,b) => a.level - b.level);  //promenq masiwa

    //Принтиране на конзолата
    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}

inventory(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);