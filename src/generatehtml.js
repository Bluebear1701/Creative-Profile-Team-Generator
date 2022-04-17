const Engineer = require("../lib/Engineer")

const generatehtml = allEmployees => {
    const generateManager = allEmployees => {
        return`
        <div class="card employee-card">
        <div class="card-header bg-danger">
            <h2 class="card-title"> ${manager.getName()} </h2>
            <h3 class="card-title"> ${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()} </li>
                <li class="list-group-item">Email:<a href = "mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>    
    </div>`
    }

    const generateEngineer  = allEmployees => {
        return`
        <div class="card employee-card">
        <div class="card-header bg-danger">
            <h2 class="card-title"> ${engineer.getName()} </h2>
            <h3 class="card-title"> ${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()} </li>
                <li class="list-group-item">Email:<a href = "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github:[${engineer.getGithub}](https://github.com/${engineer.getGithub}
            </ul>
        </div>    
    </div>`
    }


    const generateIntern  = allEmployees => {
    
    }
}
filters need to here 
module.exports = allEmployees => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>`
    
    ${generatehtml(allEmployees)}
}
