const Manager = require("../lib/manager");
// test suit for manager class
describe("Manager", () => {
  describe("Initialization", () => {
    // test for valid arguments
    it("should create an object with a name, id, email, and officeNum if provided valid data arguement", () => {
      // valid input
      const data = {name: "Robert", id: 3, email: "robert@gmail.com", officeNum: 1};
      // manager takes in valid input
      const manager = new Manager(data);

      // actual output must equal expected output
      expect(manager.name).toEqual("Robert");
      expect(manager.id).toEqual(3);
      expect(manager.email).toEqual("robert@gmail.com");
      expect(manager.officeNum).toEqual(1);
    });
    // test for invalid email input
    it("should throw an error if email input is not a string", () => {
      // invalid input
      const data = {name: "Robert", id: 3, email: 6, officeNum: 1};
      // manager takes in invalid input
      const cb = () => new Manager(data);

      // throws error if email is not a string
      const err = new Error("Expected parameter 'email' to be a non empty string");

      // must throw error
      expect(cb).toThrowError(err);
    });
    // test for invalid id inputs
    it("should throw an error if 'id' is less than 0", () => {
      // invalid input
      const data = {name: "Robert", id: -1, email: "robert@gmail.com", officeNum: 1};
      // manager takes in invalid data
      const cb = () => new Manager(data);
      // throws error if id is negative number
      const err = new Error("Expected parameter 'id' to be a non-negative number");
      // must throw error
      expect(cb).toThrowError(err);
    });
    // test for invalid office input
    it("should throw an error if 'officeNum' input is less than 1", () => {
      // invalid input
      const data = {name: "Robert", id: 3, email: "robert@gmail.com", officeNum: 0};
      // manager takes in invalid data
      const cb = () => new Manager(data);
  
      // throws error if office number is less than 1
      const err = new Error("Expected parameter 'officeNum' to be a number greater than 0");

      // must throw error
      expect(cb).toThrowError(err);
    })
  });
});