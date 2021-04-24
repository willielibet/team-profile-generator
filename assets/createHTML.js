const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

const manager = new Manager;
const engineer = new Engineer;
const intern = new Intern;


function createHTML(data) {
    return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <header class="jumbotron">
            <h1 id="my-team">My Team</h1>
      </header>
        <div class="container-fluid">
          <div class="row">
          <a class="visible" id="titleCard">
                <div class="card-body" id="card-body-m">
                    <p id="namem">${data.employeeName}</p>
                    <p id="titlem">${manager.getRole()}</p>
                    <p id="id">ID: ${data.employeeID}</p>
                    <p id="email">Email: ${data.managerEmail}</p>
                    <p id="detail">Office number: ${data.managerOfficeNumber}</p>
                </div>
            </a>
            ${engineerF(data)}
          <a class="visible" id="titleCard">
          <div class="card-body">
          <p id="name">${data.internName}</p>
            <p id="title">${intern.getRole()}</p>
            <p id="id">ID: ${data.internID}</p>
            <p id="email">Email: ${data.internEmail}</p>
            <p id="detail">School: ${data.internSchool}</p>
        </div>
        </a> 
          </div>
        </div>
      <script src="./index.js"></script>
    </body>
  </html>`
  }
  
function engineerF(data) {
  return `<a class="visible" id="titleCard">
  <div class="card-body">
      <p id="name">${data.engineerName}</p>
      <p id="title">${engineer.getRole()}</p>
      <p id="id">ID: ${data.engineerID}</p>
      <p id="email">Email: ${data.engineerEmail}</p>
      <p id="detail">GitHub Name: ${data.engineerGitHub}</p>
  </div>
</a>`
}


  //export the class Manager for use elsewhere in our programs.
  module.exports = createHTML;