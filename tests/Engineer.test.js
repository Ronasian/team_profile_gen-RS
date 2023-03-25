const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    // test case for valid parameters
    it("should create an object with a name, id, email, and github if provided valid data arguement", () => {
      // example of valid inputs
      const data = {name: "Robert", id: 3, email: "robert@gmail.com", github: "Robert123"};
      const engineer = new Engineer(data);

      // expect actual output to equal expected input
      expect(data.name).toEqual("Robert");
      expect(data.id).toEqual(3);
      expect(data.email).toEqual("robert@gmail.com");
      expect(data.github).toEqual("Robert123");
    });
    // test case for invalid email input
    it("should throw an error if email input is not a string", () => {
      // example of invalid email input
        const data = {name: "Robert", id: 3, email: 6, github: "Robert123"};
        const cb = () => new Engineer(data);
  
        // throws error if email is not a string
        const err = new Error("Expected parameter 'email' to be a non empty string");
  
        // expect actual output to equal expected input
        expect(cb).toThrowError(err);
      });
    // test for invalid id input
    it("should throw an error if 'id' is less than 0", () => {
      // example of invalid input
      const data = {name: "Robert", id: -1, email: "robert@gmail.com", github: "Robert123"};
      // class takes in invalid input
      const cb = () => new Engineer(data);
      // throw error if id is a negative number
      const err = new Error("Expected parameter 'id' to be a non-negative number");
      // expect actual output to equal expected input
      expect(cb).toThrowError(err);
    });
    // test suit for invalid github input
    it("should throw an error if 'github' input is not a string", () => {
      // example of invalid github input
        const data = {name: "Robert", id: 3, email: "robert@gmail.com", github: 6};
        // class takes data from invalid input
        const cb = () => new Engineer(data);
    
        // throw error if input is not a string
        const err = new Error("Expected parameter 'github' to be a non empty string");
  
        // expect actual output to equal expected input
        expect(cb).toThrowError(err);
      })
  });
});