const inquirer = require("inquirer");
const Manager = require ("./Manager")
const Intern = require ("./Intern");
const Engineer = require ("./Engineer")

const managers = [];
const interns = [];
const engineers = [];
function App(){
    this.Manager;
    this.Engineer;
    this.Intern;
}

App.prototype.promptManager = function () {
    return inquirer.prompt([
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
        
    ])
};

module.exports = App;

//     };
//     App.prototype.addMenu = function()

// }
// }

// const questions = [
//     {
//         type: "list",
//         name: "choice",
//         message: "What kind of employee do you want to add?",
//         choices:["Manager", "Engineer","Intern"],
//     }
// ];

// const internquestions = [
//     {
//         type: "input",
//         name: "name",
//         message: "What is the name of this Intern?",        

//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is the intern's id?",        
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is the intern's email address?",
//     },
//     {
//         type: "input",
//         name: "school",
//         message: "What is the name of the intern's school?",
//     }
// ]
// function askuser() {
//     inquirer.prompt (questions).then(function(answers){
//         console.log (answers);
//         if (answers.choice === "Intern") {
//             createintern();
//         }
//     })
// } 
// function createintern() {
//     inquirer.prompt (internquestions).then(function(answers){
//         console.log (answers) 
//     })
// }
// askuser();



