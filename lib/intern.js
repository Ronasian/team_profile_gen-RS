// exported employee class
const Employee = require('./employee');
// class that extends employee class
class Intern extends Employee {
    // takes in data from prompts
    constructor(data) {
        // inherits name, id, and email from employee class
        super(data.name, data.id, data.email);
        // also takes in string for school
        this.school = data.school;
        // if statements for invalid inputs
        if (typeof data.name !== "string" || data.name === "") {
            throw new Error("Expected parameter 'name' to be a non empty string");
        }
        if (data.id < 0) {
            throw new Error("Expected parameter 'id' to be a non negative number");
        }
        if (typeof data.email !== "string" || data.email === "") {
            throw new Error("Expected parameter 'email' to be a non negative number");
        }
        if (typeof data.school !== "string" || data.school === "") {
            throw new Error("Expected parameter 'school' to be a non empty string");
        }
    }
    // class functions
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;