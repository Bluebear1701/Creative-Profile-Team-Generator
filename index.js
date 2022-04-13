const inquirer = require("inquirer");
const questions = [
    {
        type: "list",
        name: "choice",
        message: "What kind of employee do you want to add?",
        choices: ["Employee", "Intern", "Manager", "Engineer"],
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
function askuser() {
    inquirer.prompt (questions).then(function(answers){
        console.log (answers);
        if (answers.choice === "Intern") {
            createintern();
        }
    })
} 
function createintern() {
    inquirer.prompt (internquestions).then(function(answers){
        console.log (answers) 
    })
}
askuser();

// const employeequestions = [
//     {
//         type: "input",
//         name: "name",
//         message: "What is the name of the employee?",        

//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is the employee's id?",        
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is the employee's email address?",
//     }
    
// ]
// function askuser() {
//     inquirer.prompt (questions).then(function(answers){
//         console.log (answers);
//         if (answers.choice === "Employee") {
//             createemployee();
//         }
//     })
// } 
// function createemployee() {
//     inquirer.prompt (employeequestions).then(function(answers){
//         console.log (answers) 
//     })
// }
// askuser();