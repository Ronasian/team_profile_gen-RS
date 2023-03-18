class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(data) {
        this.name = data.managerName;
    }
    getId(data) {
        this.id = data.managerId;
    }
    getEmail(data) {
        this.id = data.managerEmail;
    }
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee