function calculateGrade(mark) {
    if (isNaN(mark) || mark < 0 || mark > 100) {
        return "Invalid Mark!  Enter a valid mark between 0-100";
    }

    let grade;
    if (mark >= 91) {
        grade = "A+";
    } else if (mark >= 81) {
        grade = "A";
    } else if (mark >= 71) {
        grade = "B";
    } else if (mark >= 61) {
        grade = "C";
    } else if (mark >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    return grade;
}

function showWelcomePrompt() {
    const name = prompt("Please Enter Your Name:");
    if (name === null || name.trim() === "") {
        alert("Name Cannot Be Empty! Please Try Again.");
        return;
    }

    const rawMark = prompt(`Hello ${name}! Please Enter Your Mark :`);
    const mark = Math.floor(Number(rawMark));
    if (isNaN(mark) || mark < 0 || mark > 100) {
        alert("Invalid Mark! Please enter a valid numeric value between 0-100.");
        return;
    }

    const grade = calculateGrade(mark);
    let resultMessage = `Hello ${name}, Your Mark is ${mark} And Your Grade Is ${grade}.`;

    if (mark >= 50) {
        resultMessage += "\nCongratulations, Passed!";
    } else {
        resultMessage += "\nSorry , You Failed :( ";
    }

    alert(resultMessage);
}