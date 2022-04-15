const Manager = require("../lib/Manager");

test("creat an manager object", () => {
    const manager = new Manager("Monica", "1234", "email", "21022558");
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
});

test("get the manager name", () => {
    const manager = new Manager("Monica", "1234", "email", "21022558");
    expect (manager.getName()).toEqual(expect.any(String));
});

test("get the manager id", () => {
    const manager = new Manager("Monica", "1234", "email", "21022558");
    expect (manager.getId()).toEqual(expect.any(String));
});

test("get the manager email", () => {
    const manager = new Manager("Monica", "1234", "email", "21022558");
    expect (manager.getEmail()).toEqual(expect.any(String));
});

test("get the manager role", () => {
    const manager = new Manager("Monica", "1234", "email", "21022558");
    expect (manager.getRole()).toBe("Manager")  
});

test("get the manager officeNumber", () => {
    const manager = new Manager("Monica", "1234", "email", "21022558");
    expect (manager.getOfficeNumber()).toEqual(expect.any(String));  
});