const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require ("./lib/Manager")
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern")
const generateHtml = require("./src/generateHtml.js")
//an array to hold our employee questions
const allEmployees = []
//choices for what to do next
const questions = [
    {
        type: "list",
        name: "choice",
        message: "What kind of employee do you want to add or are you done?",
        choices:["Engineer","Intern","Done"],
    }
];
//questions for intern/with validation
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this Intern?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter Intern name");
                return false;
            }
        } 
    },
    {
        type: "input",
        name: "id",
        message: "What is the Intern's id?", 
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log("Please enter Intern's id");
                return false;
            }
        }       
    },
    {
        type: "input",
        name: "email",
        message: "What is the Intern's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true; 
            } else {
                console.log("Please enter Intern's email");
                return false; 
            }
        } 
    },
    {
        type: "input",
        name: "school",
        message: "What is the name of the Intern's school?",
        validate: schoolInput => {
            if (schoolInput) {
                return true; 
            } else {
                console.log("Please enter Inter's school name");
                return false; 
            }
        } 
    }
]
//questions for engineer w/ validation
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this Engineer?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter Engineer name");
                return false;
            }
        } 
    },
    {
        type: "input",
        name: "id",
        message: "What is the Engineer's id?", 
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log("Please enter Engineer's id");
                return false;
            }
        }       
    },
    {
        type: "input",
        name: "email",
        message: "What is the Engineer's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true; 
            } else {
                console.log("Please enter Engineer's email");
                return false; 
            }
        } 
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is the name of the Engineer's GitHub?",
        validate: githubInput => {
            if (githubInput) {
                return true; 
            } else {
                console.log("Please enter Engineer's GitHub");
                return false; 
            }
        } 
    }
]
//questions for manager w/validation
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this Manager?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter Manger name");
                return false;
            }
        }  
    },
    {
        type: "input",
        name: "id",
        message: "What is the Manager's id?",
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log("Please enter Manager id");
                return false;
            }
        }

    },
    {
        type: "input",
        name: "email",
        message: "What is the Manager's email address?",  
        validate: emailInput => {
            if (emailInput) {
                return true; 
            } else {
                console.log("Please enter Manager email");
                return false; 
            }
        } 
    },
    {
        type: "input",
        name: "officeNumber",
         message: "What is this Manager's office number?",  
         validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please enter Manager officeNumber")
                return false;
            }
         } 
    },

    
]
function askUser() {
    inquirer.prompt (questions).then(function(answers){
        console.log (answers);
        if (answers.choice === "Engineer") {
            createEngineer();
        } else if (answers.choice === "Intern") {
            createIntern();  
        } else if (answers.choice === "Done") {
            writeFile(allEmployees);  
        }
    })    
} 

function writeFile() {
    const html = generateHtml(allEmployees)
    fs.writeFile('./dist/index.html',html, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
}

function createIntern() {
    inquirer.prompt (internQuestions) .then(function(answers){         
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        console.log(intern)
        allEmployees.push(intern);
        askUser()
    })
}
function createEngineer() {
    inquirer.prompt (engineerQuestions) .then(function(answers){         
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        console.log(engineer)
        allEmployees.push(engineer);
        askUser()
    })
}

const createManager = function () {
     inquirer.prompt(managerQuestions) .then(function(answers){      
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(manager)
        allEmployees.push(manager);
        askUser()
    }) 

};

 createManager();