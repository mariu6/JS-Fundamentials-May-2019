function solve (num, type, day) {
    let price = 0;
    switch (type) {
        case "Students" :
            if (day === "Friday") price = 8.45;
            else if (day=== "Saturday") price = 9.80;
            else price = 10.46;
        break;

        case "Business" :
                if (day === "Friday") price = 10.9;
                else if (day=== "Saturday") price = 15.6;
                else price = 16;
        break;

        case "Regular" :
                if (day === "Friday") price = 15;
                else if (day=== "Saturday") price = 20;
                else price = 22.5;
        break;
    }
    if (type === "Students" && num >= 30) price *= .85;
    if (type === "Business" && num >=100) num -=10;
    if (type === "Regular" && (num >=10 && num <=20)) price *=.95;

    console.log(`Total price: ${(price*num).toFixed(2)}`);
}

solve(20,"Students","Sunday");