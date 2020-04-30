function grade(num) {
    let gradeForm = '';
    gradeForm = (num >= 2 && num < 3) ? 'Fail'
        : (num >= 3 && num < 3.50) ? 'Poor' 
        : (num >= 3.50 && num < 4.50) ? 'Good'
        : (num >= 4.50 && num < 5.50) ? 'Very good'
        : 'Excellent'
    return gradeForm;
}
grade(4);
