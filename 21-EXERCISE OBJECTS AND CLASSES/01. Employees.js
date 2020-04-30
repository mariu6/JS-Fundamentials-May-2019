function employees(array) {
    let employees = [];
    class Template {
        constructor(employeeName, personalNum) {
            this.employeeName = employeeName;
            this.personalNum = personalNum;
        }
    } 

    for (let i = 0; i < array.length; i++) {
       let persNum = array[i].length;
       let persName = array[i];
       employees.push(new Template(persName,persNum));
    }

    for (const employee of employees) {
        console.log(`Name: ${employee.employeeName} -- Personal Number: ${employee.personalNum}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);