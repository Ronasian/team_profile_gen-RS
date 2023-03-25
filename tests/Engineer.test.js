const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  // TODO: Add a comment describing the purpose of the following test suite
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and github if provided valid data arguement", () => {
      const data = {name: "Robert", id: 3, email: "robert@gmail.com", github: "Robert123"};
      const engineer = new Engineer(data);

      // TODO: Add a comment describing the purpose of the following statements
      expect(data.name).toEqual("Robert");
      expect(data.id).toEqual(3);
      expect(data.email).toEqual("robert@gmail.com");
      expect(data.github).toEqual("Robert123");
    });

    it("should throw an error if id is not a number", () => {
      const data = {name: "Robert", id: "three", email: "robert@gmail.com", github: "Robert123"};
      const cb = () => new Engineer(data);

      // TODO: Add a comment describing the purpose of the following declaration
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      // TODO: Add a comment describing the purpose of the following statement
      expect(cb).toThrowError(err);
    });

    it("should throw an error if email input is not a string", () => {
        const data = {name: "Robert", id: 3, email: 6, github: "Robert123"};
        const cb = () => new Engineer(data);
  
        // TODO: Add a comment describing the purpose of the following declaration
        const err = new Error("Expected parameter 'email' to be a non empty string");
  
        // TODO: Add a comment describing the purpose of the following statement
        expect(cb).toThrowError(err);
      });

    it("should throw an error if 'id' is less than 0", () => {
      const data = {name: "Robert", id: -1, email: "robert@gmail.com", github: "Robert123"};
      const cb = () => new Engineer(data);
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(cb).toThrowError(err);
    });
  });
});