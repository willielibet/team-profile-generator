//inquirer for collecting user input
const inquirer = require("inquirer");
//fs is a Node standard library package for reading and writing files.
//that is, the `fs` module enables interaction with the file system.
const fs = require("fs");
//path module to help make path manipulation easier with its helper functions.
const path = require("path");

//to avoid errors such as "Manager is not defined" and
//"TypeError: Manager is not a constructor", import classes
const Manager = require("./assets/Manager");
const Engineer = require("./assets/Engineer");
const Intern = require("./assets/Intern");

const manager = new Manager;
const engineer = new Engineer;
const intern = new Intern;

const OUTPUT_DIR = path.resolve(__dirname, "template_output")
const outputPath = path.join(OUTPUT_DIR, "team_index.html");

const render = require("./assets/createHTML");

const allEmployees = [];
const idArray = [];

function appMenu() {

  function createManager() {
    console.log("Please build your team");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your manager's name?"
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your manager's id?"
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?"
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your manager's office number?"
      }
    ]).then(function (data) {
      const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
      allEmployees.push(manager);
      idArray.push(data.managerId);
      employeeRoles();
    });
  }

  function employeeRoles() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "None"
        ]
      }
    ]).then(function (userChoice) {
      switch(userChoice.memberChoice) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        buildTeam();
      }
    });
  }

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is your engineer's id?"
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?"
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?"
      }
    ]).then(function (data) {
      const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);
      allEmployees.push(engineer);
      idArray.push(data.engineerId);
      employeeRoles();
    });
  }

  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's id?"
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?"
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
      }
    ]).then(function (data) {
      const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
      allEmployees.push(intern);
      idArray.push(data.internId);
      employeeRoles();
    });
  }

  function buildTeam() {
    //Add: "utf-8" to aviod this error:
  //TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView.

  //node:fs:505
  //handleErrorFromBinding(ctx);
  fs.writeFileSync(outputPath, render(allEmployees), "utf-8");
  }

  createManager();

}


appMenu();
