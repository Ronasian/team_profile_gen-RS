const fs = require('fs');
const Employee = require('./lib/employee')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML.js');

function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, generateHTML(data), (err) => err ? console.log(err) : console.log('index.html File Generated!'));
}

var team = [];

const employeePrompts = [
  {
    type: 'input',
    name: 'name',
    message: "Enter the name of the employee",
  },
  {
    type: 'input',
    name: 'id',
    message: "Enter the ID of the employee",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter the email address of the employee",
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

const officeNumPrompt = [
  {
    type: 'input',
    name: 'officeNum',
    message: "Enter the manager's office number",
  }
]

const managerPrompts = employeePrompts.concat(officeNumPrompt);
console.log(managerPrompts)
const githubPrompt = [
  {
    type: 'input',
    name: 'github',
    message: "Enter the engineer's GitHub username"
  }
]

const engineerPrompts = employeePrompts.concat(githubPrompt);

const schoolPrompt = [
  {
    type: "input",
    name: "school",
    message: "Enter the intern's school"
  }
]

const internPrompts = employeePrompts.concat(schoolPrompt);

function init() {
  inquirer
  .prompt(managerPrompts)
  .then((data) => {
    const manager = new Manager(data);
    console.log(manager);
  })
  .then(openMenu)
}

function openMenu() {
  inquirer
  .prompt(menuPrompt)
  .then((data) => {
    if (data.menu === 'Add an Engineer') {
      inquirer
      .prompt(engineerPrompts)
      .then((data) => {
        const engineer = new Engineer(data);
        console.log(engineer);
      })
      .then(openMenu)
    } else if (data.menu === 'Add an Intern') {
      inquirer
      .prompt(internPrompts)
      .then((data) => {
        const intern = new Intern(data)
      })
      .then(openMenu)
    } else {
      // writeToFile()
      console.log('Program ended')
    }
  })
}

init();