const Employee = require('./employee');

class Manager extends Employee {
    constructor(data) {
        super(data.name, data.id, data.email);
        this.officeNum = data.officeNum;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;