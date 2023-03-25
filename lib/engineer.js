const Employee = require('./employee');

class Engineer extends Employee {
    constructor(data) {
        super(data.name, data.id, data.email);
        this.github = data.github;

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
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer; 