function list(input) {
    let sorted = input.sort();
    sorted.forEach((element,index) => {
        console.log(`${index + 1}.${element}`);
    });
}
list(["Potatoes", "Tomatoes", "Onions", "Apples"]);