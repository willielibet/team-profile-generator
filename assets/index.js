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
const Employee = require("./employee");
const Engineer = require("./engineer");
const Intern = require("./intern");

//declare empty array to store all employees
let allEmployees = [];

function myTeam() {
function employeeManager() {
  //questions for manager name, manager id, email, and office number
  inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter manager's name."
      },
      {
        type: "input",
        name: "managerID",
        message: "Please enter nanager's ID."
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
        type: "list",
        name: "employeeRole",
        message: "What is the role of this team member?",
        choices: [
          "Engineer",
          "Intern",
          "None"
        ],
      }
    ])
    .then((data) => {
      //console.log(data);
      //create a new Manager instance with the question's answers.
      let managerData = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeName);

      switch (data.employeeRole) {
        case "Engineer":
          employeeEngineer();
          break;
        case "Intern":
          employeeIntern();
          break;
        case "None":
          noMoreEmployees();
          break;
        default:
          noMoreEmployees();
      }

      //save the newly created manager into the allEmployees array.
      allEmployees.push(managerData);
    });
}


function employeeEngineer() {
  //questions for engineer name, manager id, email, and office number
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
    ])
    .then((data) => {
      //create a new Engineer instance with the question's answers.
      let engineerData = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGitHub);

      switch (data.employeeRole) {
        case "Engineer":
          employeeEngineer();
          break;
        case "Intern":
          employeeIntern();
          break;
        case "None":
          noMoreEmployees();
          break;
        default:
          noMoreEmployees();
      }

      //save the newly created manager into the allEmployees array.
      allEmployees.push(engineerData);
    });
}

function employeeIntern() {
  //questions for engineer name, manager id, email, and office number
  inquirer.prompt([
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
        message: "Please enter intern's email.",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Please enter intern's school username.",
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
    ])
    .then((data) => {
      //create a new intern instance with the question's answers.
      let internData = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);

      switch (data.employeeRole) {
        case "Engineer":
          employeeEngineer();
          break;
        case "Intern":
          employeeIntern();
          break;
        case "None":
          noMoreEmployees();
          break;
        default:
          noMoreEmployees();
      }

      //save the newly created manager into the allEmployees array.
      allEmployees.push(internData);
    });

}

function noMoreEmployees() {
  return true;
}
employeeManager();
}

myTeam();