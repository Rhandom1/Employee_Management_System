const inquirer = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table');

const db = require('./connection/database')



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

//Add name to deptartment table
function addDept() {
    inquirer.prompt(deptQuestions).then((response) => {
        //Add to the department table?
    })
};

//Add name, salary, and dept to role table
function addRole() {
    inquirer.prompt(roleQuestions). then((response) => {
        //Add to the role table?
    })
}

//Add first name, last name, role, and manager to employee db
function addEmployee() {
    inquirer.prompt(employeeQuestions).then((response) => {
        //add new employee to employee table?
    })
}





    

    //Add name, salary, and dept to role db
//Add Employee
    
//Update Employee
    //Show list of employees
        //Alter role or salary and update in db
//Delete employee, role, or Department (BONUS)