const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    // test case for valid parameters
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      // example of valid inputs
      const employee = new Employee('Robert', 3, 'robert@gmail.com');

      // expect actual output to equal expected input
      expect(employee.name).toEqual("Robert");
      expect(employee.id).toEqual(3);
      expect(employee.email).toEqual("robert@gmail.com");
    });
    // test case for invalid email inputs
    it("should throw an error if email input is not a non empty string", () => {
        // example of invalid input
        const cb = () => new Employee("Robert", 3, 6);
  
        // throw error if email input is not a string
        const err = new Error("Expected parameter 'email' to be a non empty string");
  
        // expect actual output to equal expected input
        expect(cb).toThrowError(err);
      });
      // test case for invalid id inputs
    it("should throw an error if 'id' is less than 0", () => {
      // example of invalid input
      const cb = () => new Employee("Robert", -1, "robert@gmail.com");
      // throw error if id is a number less than 0
      const err = new Error("Expected parameter 'id' to be a non-negative number");
      // expect actual output to equal expected input
      expect(cb).toThrowError(err);
    });
  });
});