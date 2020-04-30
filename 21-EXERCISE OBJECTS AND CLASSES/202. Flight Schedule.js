function letsTry(arr2D) {
    class Flights {
        constructor(flightNumber, destination, status) {
            this.flightNumber = flightNumber;
            this.Destination = destination;
            this.status = status;
        }
    }

    let allFlights = arr2D.shift().map(x => x.split(' '));
    let flightArray = [];
    for (const f of allFlights) {
        // f[1] = f.slice(1).join(' ');
        let flight = new Flights(f[0], f[1], 'Ready to fly');
        flightArray.push(flight);
    }

    let changedFlights = arr2D.shift().map(x => x.split(' '));
    let flightStatus = arr2D.shift();
    for (const f of changedFlights) {
        let filtered = flightArray.filter((i) => i.flightNumber === f[0]);
        filtered.forEach(i => i.status = 'Cancelled');
    }
    
    let toPrint = flightArray.filter((i) => i.status === flightStatus[0]);
    toPrint.forEach(i => console.log(`{ Destination: '${i.Destination}', Status: '${i.status}' }`));
}

letsTry([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],

['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],

['Cancelled']]);

// letsTry([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK330 Cancelled'],
// ['Ready to fly']]);