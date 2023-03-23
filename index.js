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

const managerPrompts = [
  {
    type: 'input',
    name: 'name',
    message: "Enter the manager's name"
  },
  {
    type: 'input',
    name: 'id',
    message: "Enter the manager's ID"
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter the manager's email address"
  },
  {
    type: 'input',
    name: 'officeNum',
    message: "Enter the manager's office number"
  }
];

const engineerPrompts = [
  {
    type: 'input',
    name: 'name',
    message: "Enter the engineer's name"
  },
  {
    type: 'input',
    name: 'id',
    message: "Enter the engineer's ID"
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter the engineer's email address"
  },
  {
    type: 'input',
    name: 'github',
    message: "Enter the engineer's GitHub username"
  }
];

const internPrompts = [
  {
    type: 'input',
    name: 'name',
    message: "Enter the intern's name",
  },
  {
    type: 'input',
    name: 'id',
    message: "Enter the intern's ID",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter the intern's email address",
  },
  {
    type: "input",
    name: "school",
    message: "Enter the intern's school"
  }
];

const menuPrompt = [
  {
    type: 'list',
    message: "Menu",
    name: 'menu',
    choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
  }
]

function init() {
  team = [];
  inquirer
  .prompt(managerPrompts)
  .then((data) => {
    let manager = new Manager(data);
    let name = manager.getName();
    let role = manager.getRole();
    let id = manager.getId();
    let email = manager.getEmail();
    let officeNum = manager.officeNum;
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
        let engineer = new Engineer(data);
        engineer.role = engineer.getRole();
        console.log(engineer);
        team.push(engineer);
      })
      .then(openMenu)
    } else if (data.menu === 'Add an Intern') {
      inquirer
      .prompt(internPrompts)
      .then((data) => {
        let intern = new Intern(data);
        intern.role = intern.getRole();
        console.log(intern);
        team.push(intern);
      })
      .then(openMenu)
    } else {
      // writeToFile()
      console.log (`Team: ${JSON.stringify(team)}`);
      console.log('Program ended');
    }
  })
}

init();