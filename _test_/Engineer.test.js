const Engineer = require("../lib/Engineer");

test("creat an engineer object", () => {
    const engineer = new Engineer("Monica", "1234", "email", "GITHUB");
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
});

test("get the engineer name", () => {
    const engineer = new Engineer("Monica", "1234", "email", "GITHUB");
    expect (engineer.getName()).toEqual(expect.any(String));
});

test("get the engineer id", () => {
    const engineer = new Engineer("Monica", "1234", "email", "GITHUB");
    expect (engineer.getId()).toEqual(expect.any(String));
});

test("get the engineer email", () => {
    const engineer = new Engineer("Monica", "1234", "email", "GITHUB");
    expect (engineer.getEmail()).toEqual(expect.any(String));
});

test("get the engineer role", () => {
    const engineer = new Engineer("Monica", "1234", "email", "GITHUB");
    expect (engineer.getRole()).toBe("Engineer")  
});

test("get the engineer github username", () => {
    const engineer = new Engineer("Monica", "1234", "email", "GITHUB");
    expect (engineer.getGithub()).toEqual(expect.any(String));  
});