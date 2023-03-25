const Employee = require('./employee');

class Manager extends Employee {
    constructor(data) {
        super(data.name, data.id, data.email);
        this.officeNum = data.officeNum;

        if (typeof data.name !== "string" || data.name === "") {
            throw new Error("Expected parameter 'name' to be a non empty string");
        }
        if (typeof data.id !== "number" || data.id < 0) {
            throw new Error("Expected parameter 'id' to be a non negative number");
        }
        if (typeof data.email !== "string" || data.email === "") {
            throw new Error("Expected parameter 'email' to be a non negative number");
        }
        if (typeof data.officeNum !== "number" || data.officeNum < 0) {
            throw new Error("Expected parameter 'officeNum' to be a non negative number");
        }
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;