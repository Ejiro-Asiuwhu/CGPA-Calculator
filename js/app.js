
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
  
} 