function person(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age,
    }

    // let entries = Object.entries(person);         //  Един вариант за принтиране
    // for (let [key, value] of entries) {
    //     console.log(`${key}: ${value}`);
    // }
    Object.entries(person).forEach((tuple) => console.log(`${tuple[0]}: ${tuple[1]}`));
}
person("Peter", "Pan", "20");