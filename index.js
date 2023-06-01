const employee = {
    name: 'Sam',
    streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue() {
    const employee = { name: 'Sam',
    streetAddress: "11 Broadway"};
    return employee};
    

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
      
        return employee};

    function deleteFromEmployeeByKey(newEmployee,key, value){
    newEmployee= {employee};
    delete employee.key,value
    return newEmployee
    };

    function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
        employee[key] = value;
      
        return employee};