var cgpaInput = document.querySelector('#gpaValue');
var cgpaButton = document.querySelector('#submitCgpa');
var displayResult = document.querySelector('#displayCgpa');



// cgpaButton.addEventListener

cgpaButton.addEventListener('click', function (event) {
    event.preventDefault();
    var inputValue = cgpaInput.value;
    console.log(inputValue);

});



function checkCgpa(gpa) {
    if (gpa === 5 || (gpa >= 4.5 && gpa <= 5)) {
        return 'First Class';
    }

    else if (gpa >= 3.5 && gpa <= 4.49) {
        return '2.1';
    }

    else if (gpa >= 2.4 && gpa <= 3.49) {
        return '2.2';
    }
    else if (gpa >= 1.5 && gpa <= 2.39) {
        return '3rd class';
    }

    else if (gpa <= 1.49 && gpa >= 0) {
        return 'Pass';
    }

    else if (gpa < 0) {
        return 'Invalid Number';
    }

    else {
        return 'Invalid Input';
    }
}





// Switch Statement


function gpaChecker(gpaVal) {
    switch (true) {
        case (gpaVal === 5 || (gpaVal >= 4.5 && gpaVal <= 5)):
            return 'First Class';

        case (gpaVal >= 3.5 && gpaVal <= 4.49):
            return '2.1';

        case (gpaVal >= 2.4 && gpaVal <= 3.49):
            return '2.2';

        case (gpaVal >= 1.5 && gpaVal <= 2.39):
            return 'Third Class';

        case (gpaVal <= 1.49 && gpaVal >= 0):
            return 'Pass';

        case (gpaVal < 0):
            return 'Invalid Number';

        default:
            return 'Invalid Input';
    }

    return gpaVal;
}

