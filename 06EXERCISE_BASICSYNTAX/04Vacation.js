function solve(num, type, day) {
    let price = 0;
    switch (type) {
        case "Students":
        switch (day) {
            case "Friday":   price = 8.45;
            break;
            case "Saturday": price = 9.8;
            break;
            case "Sunday":   price = 10.46;
            break;
        }
        if(num >= 30) price *= .85;
        break;

        case "Business":
            switch (day) {
            case "Friday":   price = 10.9;
            break;
            case "Saturday":  price = 15.6;
            break;
            case "Sunday":    price = 16;
            break;
        }
        if(num >= 100) num -= 10;
        break;

        case "Regular":
        switch (day) {
            case "Friday":    price = 15;
            break;
            case "Saturday":  price = 20;
            break;
            case "Sunday":    price = 22.5;
            break;
        }
        if(num >= 10 && num <= 20) price *= .95;
        break;
    }
    console.log(`Total price: ${(price*num).toFixed(2)}`);
}  

solve(20,"Students","Sunday");