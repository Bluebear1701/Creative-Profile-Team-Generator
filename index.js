const inquirer = require("inquirer");
const Manager = require ("./lib/Manager")
const Intern = require ("./lib/Intern");
const Engineer = require ("./lib/Engineer")
const allEmployees = []
const questions = [
    {
        type: "list",
        name: "choice",
        message: "What kind of employee do you want to add?",
        choices:["Engineer","Intern","Done"],
    }
];

const internquestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this Intern?",        

    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's id?",        
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
    },
    {
        type: "input",
        name: "school",
        message: "What is the name of the intern's school?",
    }
]
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
        if (answers.choice === "Intern") {
            createIntern();
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
function createIntern() {
    inquirer.prompt (internquestions).then(function(answers){
        console.log (answers) 
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        allEmployees.push(intern);
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
