const Employee = require("../lib/employee");

describe("Employee", () => {
  // TODO: Add a comment describing the purpose of the following test suite
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const employee = new Employee('Robert', 3, 'robert@gmail.com');

      // TODO: Add a comment describing the purpose of the following statements
      expect(employee.name).toEqual("Robert");
      expect(employee.id).toEqual(3);
      expect(employee.email).toEqual("robert@gmail.com");
    });

    it("should throw an error if id is not a number", () => {
      const cb = () => new Employee("Robert", 'two', 'robert@gmail.com');

      // TODO: Add a comment describing the purpose of the following declaration
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      // TODO: Add a comment describing the purpose of the following statement
      expect(cb).toThrowError(err);
    });

    it("should throw an error if email input is not a string", () => {
        const cb = () => new Employee("Robert", 3, 6);
  
        // TODO: Add a comment describing the purpose of the following declaration
        const err = new Error("Expected parameter 'email' to be a non empty string");
  
        // TODO: Add a comment describing the purpose of the following statement
        expect(cb).toThrowError(err);
      });

    it("should throw an error if 'id' is less than 0", () => {
      const cb = () => new Employee("Robert", -1, "robert@gmail.com");
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(cb).toThrowError(err);
    });
  });
});