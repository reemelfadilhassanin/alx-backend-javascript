export function taskFirst() {
    return 'I prefer const when I can.'; // Directly returning the string
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    let combination = 'But sometimes let';
    combination = `${combination}${getLast()}`; // Using template literals for concatenation
    return combination;
  }
  