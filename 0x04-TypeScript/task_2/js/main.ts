// Define the String Literal Type
type Subjects = 'Math' | 'History';

// Function to teach the class
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
    // No need for an else case since Subjects can only be 'Math' or 'History'
}

// Example Usage
console.log(teachClass('Math'));     // Outputs: Teaching Math
console.log(teachClass('History'));  // Outputs: Teaching History
