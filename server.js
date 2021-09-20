const inquirer = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table');

const db = require('./connection/database');
const { listenerCount } = require("./connection/database");



const trackEmp = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "table",
        choices: ["Show All Employees", "Show All Roles", "Show All Departments", "Add New Department", "Add New Role", "Add New Employee", "Update Employee Role"]
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
        name: "firstName"
    },
    {
        type: "input",
        message: "Please, enter the new employee's last name:",
        name: "lastName"
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

function promptUser() {
    inquirer.prompt(trackEmp).then((response) => {
        //If respoonse.table === Add New Department then run addDeptartment function
        switch(response.table) {
            case "Add New Department":
                addDept();
            case "Show All Departments":
                viewDept();
            case "Add New Role":
                addRole();
            case "Show All Roles":
                viewRoles();
            case "Add New Employee":
                addEmployee;
            case "Show All Employees":
                viewEmployees();
            case "Update Employee Role":
                updateEmp();

        }
    })
}
promptUser();

//Add name to deptartment table
function addDept() {
    inquirer.prompt(deptQuestions).then((response) => {
        //Add to the department table?
        //? is a placeholder
        db.query("INSERT INTO departments SET ?", {
            //pass for the ?
            name: response.name
        }, err => {
            if (err) throw err
            console.log("Department has been added")
            promptUser();
        })
    })
};

//Add name, salary, and dept to role table
function addRole() {
    inquirer.prompt(roleQuestions). then((response) => {
        //Add to the role table?
        db.query("INSERT INTO roles SET ?", {
            //pass for the ?
            title: response.title,
            salary: response.salary
        }, err => {
            if (err) throw err
            console.log("Role has been added")
            promptUser();
        })
    })
};

//Add first name, last name, role, and manager to employee db
function addEmployee() {
    inquirer.prompt(employeeQuestions).then((response) => {
        //add new employee to employee table?
        db.query("INSERT INTO employees SET ?", {
            firstName: response.firstName,
            lastName: response.lastName,
            role: response.role,
            salary: response.salary
        }, err =>{
            if (err) throw err
            console.log("Employee has been added")
            promptUser();
        })
    })
};

function viewDept() {
    db.query ("SELECT * FROM departments" , (err, response) => {
        if (err) throw err
           console.table(response);
            promptUser();
    })
};

function viewRoles() {
    db.query("SELECT * FROM roles", (err, response) => {
        if (err) throw err
           console.table(response);
            promptUser();
    })
};

function viewEmployees() {
    db.query("SELECT * FROM employees", (err, response) => {
        if (err) throw err
           console.table(response);
            promptUser();
    })
};

function updateEmp() {
    db.query('SELECT * FROM employees', (err, empData) => {
        if (err) throw err
        console.log(empData);
        promptUser();
    })

    db.query('SELECT * FROM roles', (err, roleData) => {
        if (err) throw err
        console.log(roleData);
        promptUser();
    })

    const empList = empData.map(
        (empNames) => `${empNames.id}: ${empNames.first_name} ${empNames.last_name}`
    );

    const rolesList = roles.map((rolesData) => ({
        name: rolesData.title,
        value: rolesData.id
    }));

    inquirer.prompt([
        {
            type: "list",
            name: "empSelect",
            message: "Please select an employee to update:",
            choices: empList
        },
        {
            type: "list",
            name: "roleSelect",
            message: "Select a enw role for the employee:",
            choices: rolesList
        },
    ])
    .then((updateResponse) => {
        db.query('UPDATE employees SET roles_id = ? WHERE id = ?',
        [
            updateResponse.roleSelect,
            updateResponse.empSelect,
        ],
        (err, roles) => {
            if (err) throw err
            console.table(response);
            promptUser();
        },
        console.log("Employee updated!")
        )
        promptUser();
    })

}

    //data.map
    
    


//Show all employees
    //Pass another prompt to select employee
        //Update role



    

    //Add name, salary, and dept to role db
//Add Employee
    
//Update Employee
    //Show list of employees
        //Alter role or salary and update in db
//Delete employee, role, or Department (BONUS)