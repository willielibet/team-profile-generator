//inquirer for collecting user input
const inquirer = require("inquirer");
//fs is a Node standard library package for reading and writing files.
//that is, the `fs` module enables interaction with the file system.
const fs = require("fs");
//path module to help make path manipulation easier with its helper functions.
const path = require("path");

//to avoid errors such as "Manager is not defined" and
//"TypeError: Manager is not a constructor", import classes
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Employee = require("./Employee");

const manager = new Manager;
const engineer = new Engineer;
const intern = new Intern;

//declare empty array to store all employees
let allEmployees = [];

init();

function init() {
  teamQuestions();
}


function teamQuestions() {
  //questions for manager name, manager id, email, and office number
    return inquirer.prompt([
          {
            type: "input",
            name: "employeeName",
            message: "Please enter employee's name."
          },
          {
            type: "input",
            name: "employeeID",
            message: "Please enter manager's ID."
          },
          {
            type: "input",
            name: "managerEmail",
            message: "Please enter manager's email."
          },
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "Please enter manager's office number."
          },
          {
            type: "input",
            name: "engineerName",
            message: "Please enter Engineer's name."
          },
          {
            type: "input",
            name: "engineerID",
            message: "Please enter Engineer's ID."
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "Please enter Engineer's email.",
          },
          {
            type: "input",
            name: "engineerGitHub",
            message: "Please enter Engineer's Github username.",
          },    
      
      //questions for engineer name, manager id, email, and office number
          {
            type: "input",
            name: "internName",
            message: "Please enter intern's name."
          },
          {
            type: "input",
            name: "internID",
            message: "Please enter intern's ID."
          },
          {
            type: "input",
            name: "internEmail",
            message: "Please enter intern's email."
          },
          {
            type: "input",
            name: "internSchool",
            message: "Please enter intern's school username."
          },
          {
            type: "list",
            name: "employeeRole",
            message: "What is the role of this team member?",
            choices: [
              "Engineer",
              "Intern",
              "None"
            ],
          }
      ]).then((data) => {
        allEmployees.push(data);
        console.log(allEmployees);
        //function writeToHTML() {
          return fs.writeFile("index.html", createHTML(allEmployees));
        //}
      }).catch((err) => {
          throw err;
      })
}

function createHTML(allEmployees) {
  return `
<!DOCTYPE html>
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
          ${generateCards(allEmployees)}
        </div>
      </div>
    <script src="./index.js"></script>
  </body>
</html>`
}

function generateCards(allEmployees) {
  return allEmployees.map(employee => {
    return `<a class="visible" id="titleCard">
<div class="card-body" id="card-body-m">
    <p id="namem">${employee.getName()}</p>
    <p id="titlem">${employee.getRole()}</p>
    <p id="id">ID: ${employee.getId()}</p>
    <p id="email">Email: ${employee.getEmail()}</p>
    ${employee.getRole() === 'Manager' ? `<p id="detail">Office number: ${employee.getOfficeNumber()}</p>` : employee.getRole() === 'Engineer' ? `<p id="detail">GitHub Name: ${employee.getGithub()}</p>` : `<p id="detail">School: ${employee.getSchool()}</p>`}
</div>
</a>`
  }).join('')
};


/* <a class="visible" id="titleCard">
              <div class="card-body" id="card-body-m">
                  <p id="namem">${data.managerName}</p>
                  <p id="titlem">${manager.getRole()}</p>
                  <p id="id">ID: ${data.managerID}</p>
                  <p id="email">Email: ${data.managerEmail}</p>
                  <p id="detail">Office number: ${data.managerOfficeNumber}</p>
              </div>
          </a>
          <a class="visible" id="titleCard">
          <div class="card-body">
              <p id="title">${engineer.getRole()}</p>
              <p id="name">${data.engineerName}</p>
              <p id="id">ID: ${data.engineerID}</p>
              <p id="email">Email: ${data.engineerEmail}</p>
              <p id="detail">GitHub Name: ${data.engineerGitHub}</p>
          </div>
        </a>
        <a class="visible" id="titleCard">
        <div class="card-body">
          <p id="title">${intern.getRole()}</p>
          <p id="name">${data.internName}</p>
          <p id="id">ID: ${data.internID}</p>
          <p id="email">Email: ${data.internEmail}</p>
          <p id="detail">School: ${data.internSchool}</p>
      </div>
      </a> */