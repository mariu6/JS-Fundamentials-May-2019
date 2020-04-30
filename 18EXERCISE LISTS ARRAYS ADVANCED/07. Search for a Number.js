function search(array,manipulator) {
    let newArray = array.slice(0,manipulator[0])  // взимаме първите х елементи 
                        .slice(manipulator[1]);   // взимаме от у до края на масива
    let counter = 0;
        while (newArray.includes(manipulator[2])) {   // докато го има търсения номер, въртим
            counter++;
            newArray.splice(newArray.indexOf(manipulator[2]), 1);
        }
    console.log(`Number ${manipulator[2]} occurs ${counter} times.`);
}
search([5, 2, 3, 4, 1, 6], [5, 2, 3]);