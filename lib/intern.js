const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool(data) {
        this.school = data.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;