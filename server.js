const inquirer = require("inquirer");
const fs = require("fs");

const trackArray = [];
const deptArray = [];
const roleArray = [];
const employeeArray = [];

const trackEmp = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "table",
        choices: ["Show All Employees", "Show All Roles", "Show Leads", "Add New Department", "Add New Role", "Add New Employee", "Update Employee"]
    }
];

//Add Department
const deptQuestions = [
    {
        type: "input",
        message: "What Department would you like to add?",
        name: "name"
    }
];

//Add role
const roleQuestions = [
    {
        type: "input",
        message: "What role would you like to add?",
        name: "title"
    },
    {
        type: "input",
        message: "Please, enter a salary for this role:",
        name: "salary"
    }
];

//Add Employee
const employeeQuestions = [
    {
        type: "input",
        message: "Please, enter the new employee's first name:",
        name: "first name"
    },
    {
        type: "input",
        message: "Please, enter the new employee's last name:",
        name: "last name"
    },
    {
        type: "list",
        message: "Please, select the new employee's role:",
        name: "role",
        choices: ["Sales", "Front-End Developer", "Back-End Developer", "Accounant", "Legal"]
    },
    {
        type: "input",
        message: "Please, enter the new employee's salary:",
        name: "salary"
    }
];



//Add Department
    //Add name to db

    //Add name, salary, and dept to role db
//Add Employee
    //Add first name, last name, role, and manager to employee db
//Update Employee
    //Show list of employees
        //Alter role or salary and update in db
//Delete employee, role, or Department (BONUS)