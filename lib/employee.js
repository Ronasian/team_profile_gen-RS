class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(data) {
        this.name = data.name;
    }
    getId(data) {
        this.id = data.id;
    }
    getEmail(data) {
        this.email = data.email;
    }
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee