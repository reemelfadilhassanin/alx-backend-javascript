// Define the interface for the function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
  };
  
  // Example usage
  console.log(printTeacher("John", "Doe")); // Outputs: J. Doe
  console.log(printTeacher("Jane", "Smith")); // Outputs: J. Smith
  