const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
//employees
function generatehtml(allEmployees) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title> Team Line-up </title>
  </head>
  <body>
  ${employeeData(allEmployees)}
  <header>
  <div>
  <h1 id="team" class="text-center">Your Team Line-up</h1>
  </div>
  </header>

  </body>
  `;
}
function generateManager(manager) {
  return `
    <div class="card employee-card">
    <div class="card-header bg-danger">
        <h2 class="card-title"> ${manager.getName()}</h2>
        <h3 class="card-title"> ${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()} </li>
            <li class="list-group-item">Email:<a href = "mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>    
</div>`;
}

function generateEngineer(engineer) {
  return `
    <div class="card employee-card">
    <div class="card-header bg-danger">
        <h2 class="card-title"> ${engineer.getName()} </h2>
        <h3 class="card-title"> ${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()} </li>
            <li class="list-group-item">Email:<a href = "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github:<a href = "(https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
    </div>    
</div>`;
}
function generateIntern(intern) {
  return `
    <div class="card employee-card">
    <div class="card-header bg-danger">
        <h2 class="card-title"> ${intern.getName()} </h2>
        <h3 class="card-title"> ${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()} </li>
            <li class="list-group-item">Email:<a href = "mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getschool()} </li>
        </ul>
    </div>    
</div>`;
}
// filters need to here
const allEmployees = [];
// allEmployees.push(allEmployees.filter(allEmployees.getRole() === "Manager").map(manager => generateManager(manager)));
// allEmployees.push(allEmployees.filter(allEmployees.getRole() === "Engineer").map(engineer => generateEngineer(engineer)));
// allEmployees.push(allEmployees.filter(allEmployees.getRole() === "Intern").map(intern => generateIntern(Intern)));
function employeeData(data) {
  return data.map((role) => {
    let dataRole = role.getRole();
    if (dataRole === "Manager") {
      return generateManager(dataRole);
    }
  });
}


//html setup here
module.exports = generatehtml;
