# Challenge #10: Team Profile Generator • [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This application will take information about a software engineering team and generates an HTML page with summaries for each person. This project will be initialized and deployed from a Node.js command-line, and will require the use of the 'Inquire' package. The program will also include unit tests for the application to showcase functionality and for users to test for correct and incorrect inputs.

## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Usage
Users must access the application file directory in the terminal and use 'node index.js' to initiate the program.
Test suits can be ran using 'npm run test'.

Link to video demo: https://drive.google.com/file/d/1mQA2V_4kamiF9ieblFlRQKy-wwhG0eEO/view

## License
This project is licensed under The MIT License - see the LICENSE.md file for details

## Questions
Link to my GitHub: https://github.com/Ronasian

For additional questions about this application, email me at ronansanchez@gmail.com