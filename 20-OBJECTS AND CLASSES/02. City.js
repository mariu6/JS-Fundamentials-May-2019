function city(name, area, population, country, postCode) {
    class City {
        constructor(name, area, population, country, postCode) {
            this.name = name;
            this.area = area;
            this.population = population;
            this.country = country;
            this.postCode = postCode;
        }
    }

    let city = new City(name, area, population, country, postCode);

    Object.entries(city).forEach(tuple => console.log(`${tuple[0]} -> ${tuple[1]}`));
}
city("Sofia", " 492", "1238438", "Bulgaria", "1000");