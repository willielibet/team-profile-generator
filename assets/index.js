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

//declare empty array to hold all employees
let allEmployees = [];

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
      }
    ])
    .then((data) => {
      //console.log(data);
      // create a new Manager instance with the question's answers.
      let managerData = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeName);
      //save the newly created manager into the allEmployees array.
      allEmployees.push(managerData);
    });
}

employeeManager();