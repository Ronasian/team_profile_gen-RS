const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML.js');

function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, generateHTML(data), (err) => err ? console.log(err) : console.log('README.md File Generated!')
    );
}

const employeePrompt = [
  {
    type: 'input',
    name: 'name',
    message: "Enter the name of the employee",
  },
  {
    type: 'input',
    name: 'id',
    message: "Enter the employeeID of the employee",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter the email address of the employee",
  }
]

const managerPrompt = [
  {
    type: 'input',
    name: 'officeNumber',
    message: "Enter the manager's office number",
  }
]

const engineerPrompt = [
  {
    type: 'input',
    name: 'github',
    message: "Enter the engineer's GitHub username"
  }
]

const internPrompt = [
  {
    type: "input",
    name: "school",
    message: "Enter the intern's school"
  }
]

const menuPrompt = [
  {
    type: 'list',
    message: "Menu",
    name: 'menu',
    choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
  }
]

// function init() {
//   inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'managerName',
//       message: "Enter the name of the Team Manager",
//     },
//     {
//       type: 'input',
//       name: 'managerId',
//       message: "Enter the employeeID of the Team Manager",
//     },
//     {
//       type: 'input',
//       name: 'managerEmail',
//       message: "Enter the email address of the Team Manager",
//     },
//     {
//       type: 'input',
//       name: 'officeNumber',
//       message: "Enter the office number",
//     },
//   ])
//     .then((data) => {
//       // call to function that takes data and formats it for the markdown file named 'README'
//       writeToFile('README.md', data);
//     });
//   }
  
//   // Function call to initialize app
//   init();