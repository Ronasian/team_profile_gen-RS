class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        if (typeof name !== "string" || name === "") {
            throw new Error("Expected parameter 'name' to be a non empty string");
        }
        if (typeof id !== "number" || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
        if (typeof email !== "string") {
            throw new Error("Expected parameter 'email' to be a non empty string");
        }
        
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee'
    }
}
module.exports = Employee