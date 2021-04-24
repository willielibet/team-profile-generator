//inquirer for collecting user input
const inquirer = require("inquirer");
//fs is a Node standard library package for reading and writing files.
//that is, the `fs` module enables interaction with the file system.
const fs = require("fs");
//path module to help make path manipulation easier with its helper functions.
const path = require("path");

const createHTML = require ("./createHTML")

//to avoid errors such as "Manager is not defined" and
//"TypeError: Manager is not a constructor", import classes
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

const manager = new Manager;
const engineer = new Engineer;
const intern = new Intern;

//declare empty array to store all employees
// let allEmployees = [];

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
            ]
          }
      ]).then((data) => {
        if (data.employeeRole === "Engineer") {
          inquirer.prompt([
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
          }
        ])    
        .then((data) => {
          return fs.writeFileSync("index.html", createHTML(data));
        //}
      }).catch((err) => {
          throw err;
      });
}
