const Employee = require('./employee');

class Engineer extends Employee {
    constructor(data) {
        super(data.name, data.id, data.email);
        this.github = data.github;
    }
    getGuthub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;