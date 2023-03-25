const Intern = require("../lib/intern");

describe("Intern", () => {
  // TODO: Add a comment describing the purpose of the following test suite
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and school if provided valid data arguement", () => {
      const data = {name: "Robert", id: 3, email: "robert@gmail.com", school: "UC Davis"};
      const intern = new Intern(data);

      // TODO: Add a comment describing the purpose of the following statements
      expect(intern.name).toEqual("Robert");
      expect(intern.id).toEqual(3);
      expect(intern.email).toEqual("robert@gmail.com");
      expect(intern.school).toEqual("UC Davis");
    });

    it("should throw an error if 'name' input is not a string", () => {
      const data = {name: 0, id: 3, email: 6, school: "UC Davis"};
      const cb = () => new Intern(data);

      // TODO: Add a comment describing the purpose of the following declaration
      const err = new Error("Expected parameter 'name' to be a non empty string");

      // TODO: Add a comment describing the purpose of the following statement
      expect(cb).toThrowError(err);
  });

    it("should throw an error if email input is not a string", () => {
        const data = {name: "Robert", id: 3, email: 6, school: "UC Davis"};
        const cb = () => new Intern(data);
  
        // TODO: Add a comment describing the purpose of the following declaration
        const err = new Error("Expected parameter 'email' to be a non empty string");
  
        // TODO: Add a comment describing the purpose of the following statement
        expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is less than 0", () => {
      const data = {name: "Robert", id: -1, email: "robert@gmail.com", school: "UC Davis"};
      const cb = () => new Intern(data);
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'school' input is not a string", () => {
      const data = {name: "Robert", id: 3, email: "robert@gmail.com", school: 6};
      const cb = () => new Intern(data);
  
      // TODO: Add a comment describing the purpose of the following declaration
      const err = new Error("Expected parameter 'school' to be a non empty string");

      // TODO: Add a comment describing the purpose of the following statement
      expect(cb).toThrowError(err);
    })
  });
});