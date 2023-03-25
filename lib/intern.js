const Employee = require('./employee');

class Intern extends Employee {
    constructor(data) {
        super(data.name, data.id, data.email);
        this.school = data.school;

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
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;