function numModification(number) {
    let stringNum = number.toString();
    if (moreThan5(stringNum)) {
        console.log(stringNum);
    } else {
        console.log('kotka');
    }

    function moreThan5(toBeModified) {
        let result = 0;
        for (let i = 0; i < toBeModified.length; i++) {
            result += Number(toBeModified[i]);
        }
        if ((result / toBeModified.length) > 5) {
            stringNum = toBeModified;
        } else {
            moreThan5(toBeModified += '9');
        }
        return true;
    }
}
numModification(101);