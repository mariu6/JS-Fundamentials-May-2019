function convert(jsonStr) {
    let person = JSON.parse(jsonStr);
    Object.entries(person).forEach(tuple => console.log(`${tuple[0]}: ${tuple[1]}`));
}
convert('{"name": "George", "age": 40, "town": "Sofia"}');