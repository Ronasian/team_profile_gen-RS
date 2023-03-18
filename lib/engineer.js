const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
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