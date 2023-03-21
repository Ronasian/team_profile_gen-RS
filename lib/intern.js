const Employee = require('./employee');

class Intern extends Employee {
    constructor(data) {
        super(data.name, data.id, data.email);
        this.school = data.school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;