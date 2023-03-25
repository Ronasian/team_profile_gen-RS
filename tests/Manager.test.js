const Manager = require("../lib/manager");

describe("Manager", () => {
  // TODO: Add a comment describing the purpose of the following test suite
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and officeNum if provided valid data arguement", () => {
      const data = {name: "Robert", id: 3, email: "robert@gmail.com", officeNum: 1};
      const manager = new Manager(data);

      // TODO: Add a comment describing the purpose of the following statements
      expect(manager.name).toEqual("Robert");
      expect(manager.id).toEqual(3);
      expect(manager.email).toEqual("robert@gmail.com");
      expect(manager.officeNum).toEqual(1);
    });

    it("should throw an error if id is not a number", () => {
      const data = {name: "Robert", id: "three", email: "robert@gmail.com", officeNum: 1};
      const cb = () => new Manager(data);

      // TODO: Add a comment describing the purpose of the following declaration
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      // TODO: Add a comment describing the purpose of the following statement
      expect(cb).toThrowError(err);
    });

    it("should throw an error if email input is not a string", () => {
        const data = {name: "Robert", id: 3, email: 6, officeNum: 1};
        const cb = () => new Manager(data);
  
        // TODO: Add a comment describing the purpose of the following declaration
        const err = new Error("Expected parameter 'email' to be a non empty string");
  
        // TODO: Add a comment describing the purpose of the following statement
        expect(cb).toThrowError(err);
      });

    it("should throw an error if 'id' is less than 0", () => {
      const data = {name: "Robert", id: -1, email: "robert@gmail.com", officeNum: 1};
      const cb = () => new Manager(data);
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'officeNum' input is not a number", () => {
      const data = {name: "Robert", id: 3, email: "robert@gmail.com", officeNum: "one"};
      const cb = () => new Manager(data);
  
      // TODO: Add a comment describing the purpose of the following declaration
      const err = new Error("Expected parameter 'officeNum' to be a non negative number");

      // TODO: Add a comment describing the purpose of the following statement
      expect(cb).toThrowError(err);
    })

    it("should throw an error if 'officeNum' input is less than 0", () => {
      const data = {name: "Robert", id: 3, email: "robert@gmail.com", officeNum: -1};
      const cb = () => new Manager(data);
  
      // TODO: Add a comment describing the purpose of the following declaration
      const err = new Error("Expected parameter 'officeNum' to be a non negative number");

      // TODO: Add a comment describing the purpose of the following statement
      expect(cb).toThrowError(err);
    })
  });
});