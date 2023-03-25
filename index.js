// all required files
const fs = require('fs');
const Employee = require('./lib/employee')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const { renderManager, renderEngineer, renderIntern } = require('./utils/renderEmployees');

// empty string where generated html will be added to
let renderedHTML = '';
// beginning portion of every generated html file
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
// closing portion of every generated html file
let finalHTML = `</section>
  <script src="index.js"></script>
  </body>
</html>`
// function that writes to index.html file that will be deployed for users to see product
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('index.html File Generated!'));
}
// Manager prompts
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
// engineer prompts
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
// intern prompts
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
// menu prompt
const menuPrompt = [
  {
    type: 'list',
    message: "Menu",
    name: 'menu',
    choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
  }
]
// initializes application, starts by giving user manager prompts
function init() {
  inquirer
  // takes in manager prompts
  .prompt(managerPrompts)
  // returns data based on user input
  .then((data) => {
    // manager is created
    let manager = new Manager(data);
    // opening html is added to the empty string
    renderedHTML += initHTML;
    // manager html rendered using function that takes in manager data
    let managerHTML = renderManager(manager);
    // manager html is added to renderedHTML
    renderedHTML += managerHTML;
  })
  // after manager prompts, menu is opened
  .then(openMenu)
}
// allows users to choose to add employees or finish making team
function openMenu() {
  inquirer
  // takes in menu prompt
  .prompt(menuPrompt)
  // returns user choice
  .then((data) => {
    // if user chose to add engineer
    if (data.menu === 'Add an Engineer') {
      inquirer
      // user is given engineer prompts
      .prompt(engineerPrompts)
      .then((data) => {
        // new engineer is created with input from prompts
        let engineer = new Engineer(data);
        // html is rendered using designated function that takes in engineer values
        let engineerHTML = renderEngineer(engineer);
        // rendered html is added to string
        renderedHTML += engineerHTML;
      })
      // after prompts, menu is opened
      .then(openMenu)
      // if user chose to add intern
    } else if (data.menu === 'Add an Intern') {
      inquirer
      // user is given intern prompts
      .prompt(internPrompts)
      .then((data) => {
        // new intern is created with input from prompts
        let intern = new Intern(data);
        // html is rendered using designated function that takes in intern values
        let internHTML = renderIntern(intern);
        // rendered html is added to string
        renderedHTML += internHTML;
      })
      // menu prompt is opened
      .then(openMenu)
    // if user chooses to finish making team
    } else {
      // final portion of html is added to the string
      renderedHTML += finalHTML;
      // function is called to write to deployed html file using the complete renderedHTML string
      writeToFile('./dist/index.html', renderedHTML);
    }
  })
}
// 'node index.js' command will initiate the prompts
init();