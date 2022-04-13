const Employee = require("../lib/Employee");

test("creat an employee object", () => {
    const employee = new Employee("Monica", "1234", "email");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test("get the employee name", () => {
    const employee = new Employee("Monica");
    expect (employee.getName()).toEqual(expect.any(String));
});

test("get the employee id", () => {
    const employee = new Employee("1234");
    expect (employee.getId()).toEqual(expect.any(String));
});

test("get the employee email", () => {
    const employee = new email("email");
    expect (employee.getEmail()).toEqual(expect.any(String));
});

test("get the employee role", () => {
    const employee = new Employee("role");
    expect (employee.getRole()).toEqual(expect.any(String));  
});