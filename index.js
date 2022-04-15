const inquirer = require("inquirer");
const Manager = require ("./lib/Manager")
const Engineer = require ("./lib/Engineer");
const Engineer = require ("./lib/Engineer")
//an array to hold our employee questions
const allEmployees = []
//choices for what to do next
const questions = [
    {
        type: "list",
        name: "choice",
        message: "What kind of employee do you want to add?",
        choices:["Engineer","Engineer","Done"],
    }
];
//questions for Engineer/with validation
const engineerquestions = [
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
        message: "What is the engineer's id?", 
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
        message: "What is the engineer's email address?",
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
        name: "school",
        message: "What is the name of the engineer's school?",
        validate: schoolInput => {
            if (schoolInput) {
                return true; 
            } else {
                console.log("Please enter Engineer's school name");
                return false; 
            }
        } 
    }
]

const engineerquestions = [
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
        message: "What is the engineer's id?", 
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
        message: "What is the engineer's email address?",
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
        message: "What is the name of the engineer's GitHub?",
        validate: GitHubInput => {
            if (GithubInput) {
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
                console.log("Please enter manger name");
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
                console.log("Please enter manager id");
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
                console.log("Please enter manager email");
                return false; 
            }
        } 
    },
    {
        type: "input",
        name: "officeNumber",
         message: "What is this manager's office number?",  
         validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please enter manager officeNumber")
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
        } else if (answers.choice === "Engineer") {
            createEngineer();  
        } else if (answers.choice === "Done") {
            creatHTML();  
        }
    })    
} 
function creatHTML(){
    console.log (allEmployees)
}
function createEngineer() {
    inquirer.prompt (engineerQuestions).then(function(answers){
        console.log (answers) 
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.school)
        allEmployees.push(engineer);
        askUser()
    })
}
function createEngineer() {
    inquirer.prompt (engineerQuestions).then(function(answers){
        console.log (answers) 
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        allEmployees.push(engineer);
        askUser()
    })
}

const createManager = function () {
     inquirer.prompt(managerQuestions) .then(function(answers){
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        allEmployees.push(manager);
        askUser()
    }) 

};

createManager();
