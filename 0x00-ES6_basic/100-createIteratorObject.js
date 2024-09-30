export default function createIteratorObject(report) {
    const employees = [];
    
    // Collect all employees from the report object
    for (const department of Object.values(report)) {
      employees.push(...department);
    }
  
    // Create an iterator
    return {
      [Symbol.iterator]() {
        let index = 0;
        return {
          next: () => {
            if (index < employees.length) {
              return { value: employees[index++], done: false };
            } else {
              return { done: true };
            }
          },
        };
      },
    };
  }
  