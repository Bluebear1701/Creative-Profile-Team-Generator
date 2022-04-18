const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");
//employees
function generateManager(manager) {
  return `
    <div class="card employee-card">
    <div class="card-header bg-danger">
        <h2 class="card-title"> ${manager.name}</h2>
        <h3 class="card-title"> ${manager.role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id} </li>
            <li class="list-group-item">Email:<a href = "mailto:${manager.email}">${
    manager.email
  }</a></li>
            <li class="list-group-item">Office number: ${
              manager.officeNumber
            }</li>
        </ul>
    </div>    
</div>`;
}

function generateEngineer(engineer) {
  return `
    <div class="card employee-card">
    <div class="card-header bg-danger">
        <h2 class="card-title"> ${engineer.name} </h2>
        <h3 class="card-title"> ${engineer.role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id} </li>
            <li class="list-group-item">Email:<a href = "mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">Github:<a href = "(https://github.com/${
              engineer.github
            }">${engineer.github}</a></li>
        </ul>
    </div>    
</div>`;
}
function generateIntern(intern) {
  return `
    <div class="card employee-card">
    <div class="card-header bg-danger">
        <h2 class="card-title"> ${intern.name} </h2>
        <h3 class="card-title"> ${intern.role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id} </li>
            <li class="list-group-item">Email:<a href = "mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school} </li>
        </ul>
    </div>    
</div>`;
}



 const generateHtml = function (allEmployees) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Our Team</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${generateHtml(allEmployees)}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}
generateHTML = (data) => {
  // array for cards
  pageArray = [];

  for (let i = 0; i < allEmployees.length; i++) {
    const employee = allEmployees[i];
    const role = employee.getRole();

    // call manager function
    if (role === "Manager") {
      const managerCard = generateManager(allEmployees);

      pageArray.push(managerCard);
    }

    // call engineer function
    if (role === "Engineer") {
      const engineerCard = generateEngineer(allEmployees);

      pageArray.push(engineerCard);
    }

    // call intern function
    if (role === "Intern") {
      const internCard = generateIntern(allEmployees);

      pageArray.push(internCard);
    }
  }

  // joining strings
  const allEmployees = pageArray.join("");

  // return to generated page
  const generateTeam = generateHTML(allEmployees);
  return generateTeam;
  
};

//html setup here
module.exports = generateHtml;
