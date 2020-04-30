let objects = [{ a: 1 }, { a: 1 }, { a: 1 }];   //1. масив от обекти с еднакви елементи,
let str = '';                                   //2. за да премахнем повтарящите се обекти 
str = JSON.stringify(objects[0]);               //3. взимаме един елемент и го стрингифайваме
str === JSON.stringify(objects[1]);    //true   //4. сравняваме го с предходния 

let obj = objects.map(object => JSON.stringify(object));   //5. масивът е стрингифайнат
console.log(obj);
let set = new Set(obj);   //6. Set { '{"a":1}' }  повтарящите елементи са елиминирани
console.log(set);

// let filtObjects = JSON.parse(set);      // изкарва ми грешка
console.log(filtObjects);
