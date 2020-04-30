function towns(array) {
    let townsArray = [];

    class Towns {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    for (let i = 0; i < array.length; i++) {
        let line = array[i].split(' | ');
        let name = line[0];
        let lat = Number(line[1]).toFixed(2);
        let long = Number(line[2]).toFixed(2);
        townsArray.push(new Towns(name, lat, long));
    }
    townsArray.forEach(x => console.log(`{ town: '${x.town}', latitude: '${x.latitude}', longitude: '${x.longitude}' }`));
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);

  