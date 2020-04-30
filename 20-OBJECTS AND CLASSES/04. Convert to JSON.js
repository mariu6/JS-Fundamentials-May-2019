function convert(name, lastName, hairColor) {
    // class Template {
    //     constructor(name, lastName, hairColor) {
    //         this.name = name;
    //         this.lastName = lastName;
    //         this.hairColor = hairColor;
    //     }
    // }
    // let person = new Template(name, lastName, hairColor);
    let person = {
        name,
        lastName,
        hairColor,
    }
    // person = JSON.stringify(person);
    // console.log(person);
    console.log(JSON.stringify(person));
}
convert('George','Jones','Brown');