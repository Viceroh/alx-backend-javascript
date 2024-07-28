
export default function createIteratorObject(report) {
  const arr = [];
  const departmentEmp = report.allEmployees;
  if (departmentEmp) {
    for (const key in departmentEmp) {
      if (departmentEmp[key]) {
        for (const item of departmentEmp[key]) {
          arr.push(item);
        }
      }
    }
  }
  return arr;
}
