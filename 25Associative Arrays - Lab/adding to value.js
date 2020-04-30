function storeProductsInfo(products) {
    const info = products.split(' ');
    const map = new Map();

    for (let i = 0; i < info.length; i += 2) {
        const product = info[i];
        const quantity = parseInt(info[i + 1]);

        if (map.has(product)) {
            const newQuantity = map.get(product) + quantity;
            map.set(product, newQuantity);
        } else {
            map.set(product, quantity);
        }
    }
    //Принтиране - правим масив и го принтираме
    let array = [...map];
    for (const line of array) {
        console.log(`${line[0]} -> ${line[1]}`);
    }
    // console.log(map);       // Принтиране на суровия map
    // return map;             // връщане на map
}
storeProductsInfo('tomatoes 10 coffee 5 olives 100 coffee 40');

function solve(input) {
    let map = new Map();
    for (let string of input) {
        let tokens = string.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if (!map.has(product)) {
            map.set(product, quantity);
        } else {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity + quantity;
            map.set(product, newQuantity);
        }
    }
    let arrayToPrint = [...map];
    for (const iterator of arrayToPrint) {
        console.log(`${iterator[0]} => ${iterator[1]}`);
    }
}
solve(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);


function withObject(input) {
    let products = {};
    for (const i of input) {
        let line = i.split(' ');
        let product = line[0];
        let quantity = parseInt(line[1]);
        if (products.hasOwnProperty(product)) {     // Ако има продукт с такова име
            products[product] += quantity;          // да се добави към неговата стойност
        } else {                                    // в противен случай
            products[product] = quantity;           // да се създаде ново пропърти 'product': 'quantity'
        }
    }
    // ПРИНТИРАНЕ НА ОБЕКТ
    Object.entries(products).forEach((product)  =>  console.log(`${product[0]} -> ${product[1]}`));             
    // console.log(products);
}
withObject(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);