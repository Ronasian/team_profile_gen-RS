// exported employee class
const Employee = require('./employee');
// class that extends employee class
class Manager extends Employee {
    // takes in data from prompts
    constructor(data) {
        // inherits name, id, and email from employee class
        super(data.name, data.id, data.email);
        // also takes in number for office number
        this.officeNum = data.officeNum;
        // if statements for invalid inputs
        if (typeof data.name !== "string" || data.name === "") {
            throw new Error("Expected parameter 'name' to be a non empty string");
        }
        if (data.id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
        if (typeof data.email !== "string" || data.email === "") {
            throw new Error("Expected parameter 'email' to be a non empty string");
        }
        if (data.officeNum < 1) {
            throw new Error("Expected parameter 'officeNum' to be a number greater than 0");
        }
    }
    // class functions
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;