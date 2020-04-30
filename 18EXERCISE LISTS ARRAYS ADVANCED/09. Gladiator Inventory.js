function gladiator(input) {
    let inventory = input.shift().split(' ');

    for (const iterator of input) {
        let line = iterator.split(' ');
        if (line[0] === 'Buy') {
            buy(line[1]);
        } else if (line[0] === 'Trash') {
            trash(line[1]);
        }
        else if (line[0] === 'Repair') {
            repair(line[1]);
        }
        else if (line[0] === 'Upgrade') {
            let separated = line[1].split('-');
            upgrade(separated[0],separated[1]);
        }
    }

    console.log(inventory.join(' '));

    function buy(equipment) {
        if (!inventory.includes(equipment)) {
            inventory.push(equipment);
        }
    }

    function trash(equipment) {
        if (inventory.includes(equipment)) {
            inventory.splice(inventory.indexOf(equipment), 1);
        }
    }

    function repair(equipment) {
        if (inventory.includes(equipment)) {
            inventory.splice(inventory.indexOf(equipment), 1);
            inventory.push(equipment);
        }
    }

    function upgrade(equipment, upgradeItem) {
        if (inventory.includes(equipment)) {
            let upgraded = `${equipment}:${upgradeItem}`;
            inventory.splice(inventory.indexOf(equipment) + 1, 0, upgraded);
        }
    }
}
gladiator(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
gladiator(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);