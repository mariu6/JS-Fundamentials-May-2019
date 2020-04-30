function movies(input) {
    let movies = [];
    input.forEach((line) => {
        let tokens = line.split(' ');

        if (line.includes('addMovie')) {
            let movieName = tokens.slice(1).join(' ');  // взима всички елементи след нулевия(slice(1)) и ги обединява по интервал(join(' '))
            movies.push({ name: movieName });          // пълним масива със обекти
        } else if (line.includes('directedBy')) {
            let index = tokens.indexOf('directedBy');   // тъй като се пада между филма и режисьора, трябва да ги извадим
            let movieName = tokens.slice(0, index).join(' ');   // отделяме от 0 до позицията на directedBy, обединяваме с join за да стане един елемент
            let movieDirector = tokens.slice(index + 1).join(' ');  // същото, но от directedBy до края. join връща стринг
            let movie = movies.find(m => m.name === movieName);    //find връща само първия елемент с това име

            if (movie !== undefined) {                              // ако е създадена променлива movie
                movie.director = movieDirector;
            }
        } else if (line.includes('onDate')) {
            let index = tokens.indexOf('onDate');
            let movieName = tokens.slice(0, index).join(' ');
            let movieDate = tokens.slice(index + 1).join(' ');
            let movie = movies.find(m => m.name === movieName);   // като .filter, но връща първият намерен елемент

            if (movie !== undefined) {
                movie.date = movieDate;
            }
        }
    }
    );
    for (let m of movies) {
        let keys = Object.keys(m);
        if (keys.length === 3) {
            // if (m.hasOwnProperty('name') && m.hasOwnProperty('date') && m.hasOwnProperty('director')) {  // друг вариант за проверка
            console.log(JSON.stringify(m));
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);