const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML.js');

function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, generateHTML(data), (err) => err ? console.log(err) : console.log('README.md File Generated!')
    );
}

function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "Enter the name of the Team Manager",
      },
      {
        type: 'input',
        name: 'managerId',
        message: "Enter the employeeID of the Team Manager",
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "Enter the email address of the Team Manager",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the office number",
      },
      {
        type: 'list',
        message: "Menu",
        name: 'optionsMenu',
        choices: ['Add Engineer or Intern', 'Finish building team'],
      },
      {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
      },
    ])
    .then((data) => {
      // call to function that takes data and formats it for the markdown file named 'README'
      writeToFile('README.md', data);
    });
  }
  
  // Function call to initialize app
  init();