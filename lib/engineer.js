const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        super(data.name, data.id, data.email);
        this.github = github;
    }
    getGuthub(data) {
        this.github = data.github
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;