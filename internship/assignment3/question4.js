let marks = Number(prompt("Enter your marks:"));
 
if (marks >= 90 && marks <= 100) {
       document.write("Grade: A");
    } 
    else if (marks >= 75 && marks <= 89) {
        document.write ("Grade: B");
    } 
    else if (marks >= 50 && marks <= 74) {
        document.write("Grade: C");
    } 
    else if (marks >= 0 && marks < 50) {
        document.write("Result: Fail");
    } 
    