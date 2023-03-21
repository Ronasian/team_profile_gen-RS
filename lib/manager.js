const Employee = require('./employee');

class Manager extends Employee {
    constructor(data) {
        super(data.name, data.id, data.email);
        this.data = data;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;