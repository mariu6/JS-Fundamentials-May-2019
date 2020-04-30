function store(currentStock, orderedProducts) {
    let products = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let productName = currentStock[i];                      // избиране на продукта (всеки четен елемент)
        let productQuantity = Number(currentStock[i + 1]);      // избиране на количеството (всеки нечетен)
        products[productName] = productQuantity;                // добавяне на двойките в обекта products
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let productName = orderedProducts[i];
        let productQuantity = Number(orderedProducts[i + 1]);

        if (products.hasOwnProperty(productName)) {          // проверка дали ключа вече го има в масива
            products[productName] += productQuantity;        // ако го има, добавяме стойността към първата
        } else {
            products[productName] = productQuantity;        // ако го няма, добавяме го със стойността му.
        }
    }

    for (let key in products) {                             // принтиране с for in  цикъл.
        console.log(`${key} -> ${products[key]}`);          // key е името, а с products[key] извикваме стойността
    }
}
store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
   