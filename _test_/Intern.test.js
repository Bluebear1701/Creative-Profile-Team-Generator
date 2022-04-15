const Intern = require("../lib/Intern");

test("creat an intern object", () => {
    const intern = new Intern("Monica", "1234", "email", "SCHOOL");
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
});

test("get the intern name", () => {
    const intern = new Intern("Monica", "1234", "email", "SCHOOL");
    expect (intern.getName()).toEqual(expect.any(String));
});

test("get the intern id", () => {
    const intern = new Intern("Monica", "1234", "email", "SCHOOL");
    expect (intern.getId()).toEqual(expect.any(String));
});

test("get the intern email", () => {
    const intern = new Intern("Monica", "1234", "email", "SCHOOL");
    expect (intern.getEmail()).toEqual(expect.any(String));
});

test("get the intern role", () => {
    const intern = new Intern("Monica", "1234", "email", "SCHOOL");
    expect (intern.getRole()).toBe("Intern")  
});

test("get the intern school", () => {
    const intern = new Intern("Monica", "1234", "email", "SCHOOL");
    expect (intern.getSchool()).toEqual(expect.any(String));  
});