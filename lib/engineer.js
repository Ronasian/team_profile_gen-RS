// exported employee class
const Employee = require('./employee');
// class that extends employee class
class Engineer extends Employee {
    // takes in data from prompts
    constructor(data) {
        // inherits name, id, and email from employee class
        super(data.name, data.id, data.email);
        // also takes in string for github username
        this.github = data.github;
        // if statements for invalid inputs
        if (typeof data.name !== "string" || data.name === "") {
            throw new Error("Expected parameter 'name' to be a non empty string");
        }
        if (data.id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
        if (typeof data.email !== "string" || data.email === "") {
            throw new Error("Expected parameter 'email' to be a non-negative number");
        }
        if (typeof data.github !== "string" || data.github === "") {
            throw new Error("Expected parameter 'github' to be a non empty string");
        }
    }
    // class functions
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer; 