const fs = require('fs');
const Employee = require('./lib/employee')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const { renderManager, renderEngineer, renderIntern } = require('./utils/renderEmployees');

let renderedHTML = '';

let initHTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <h1>My Team</h1>
      <section>`

let finalHTML = `</section>
  <script src="index.js"></script>
  </body>
</html>`

function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('index.html File Generated!'));
}

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
    renderedHTML += initHTML;
    let managerHTML = renderManager(manager);
    renderedHTML += managerHTML;
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
        let engineerHTML = renderEngineer(engineer);
        renderedHTML += engineerHTML;
      })
      .then(openMenu)
    } else if (data.menu === 'Add an Intern') {
      inquirer
      .prompt(internPrompts)
      .then((data) => {
        let intern = new Intern(data);
        let internHTML = renderIntern(intern);
        renderedHTML += internHTML;
      })
      .then(openMenu)
    } else {
      renderedHTML += finalHTML;
      writeToFile('./dist/index.html', renderedHTML);
      console.log('Program ended');
    }
  })
}

init();