// employee class
class Employee {
    // takes in name, id, email that will be inherited by subclasses (manager, engineer, and intern)
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        // if statements for invalid inputs
        if (typeof name !== "string" || name === "") {
            throw new Error("Expected parameter 'name' to be a non empty string");
        }
        if (id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
        if (typeof email !== "string") {
            throw new Error("Expected parameter 'email' to be a non empty string");
        }
        
    }
    // functions for class
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
// export for other files to access
module.exports = Employee