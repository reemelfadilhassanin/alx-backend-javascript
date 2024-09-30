export default function iterateThroughObject(reportWithIterator) {
    const employeeNames = [];
  
    // Use the iterator to collect employee names
    for (const employee of reportWithIterator) {
      employeeNames.push(employee);
    }
  
    // Join the names with ' | ' separator
    return employeeNames.join(' | ');
  }
  