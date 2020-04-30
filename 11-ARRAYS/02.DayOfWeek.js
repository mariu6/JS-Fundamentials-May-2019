function dayOfWeek(input) {
    let day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    if (input < 1 || input > 7) {
        console.log('Invalid day!');
        return;
    }
    console.log(day[input - 1]);
}
dayOfWeek( 8);