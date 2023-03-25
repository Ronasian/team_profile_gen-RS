const Intern = require("../lib/intern");
// test suit for intern class
describe("Intern", () => {
  describe("Initialization", () => {
    // test for valid inputs
    it("should create an object with a name, id, email, and school if provided valid data arguement", () => {
      // valid inputs
      const data = {name: "Robert", id: 3, email: "robert@gmail.com", school: "UC Davis"};
      // intern class takes in valid data
      const intern = new Intern(data);

      // expect actual output to equal expected output
      expect(intern.name).toEqual("Robert");
      expect(intern.id).toEqual(3);
      expect(intern.email).toEqual("robert@gmail.com");
      expect(intern.school).toEqual("UC Davis");
    });
    // test for invalid name input
    it("should throw an error if 'name' input is not a string", () => {
      // invalid input
      const data = {name: 0, id: 3, email: 6, school: "UC Davis"};
      // intern takes in invalid input
      const cb = () => new Intern(data);

      // throw error if name is not a string
      const err = new Error("Expected parameter 'name' to be a non empty string");

      // must throw error
      expect(cb).toThrowError(err);
  });
    // test for invalid email inputs
    it("should throw an error if email input is not a string", () => {
      // invalid input
        const data = {name: "Robert", id: 3, email: 6, school: "UC Davis"};
        // intern takes in inalid input
        const cb = () => new Intern(data);
  
        // throw error if email is not a string
        const err = new Error("Expected parameter 'email' to be a non empty string");
  
        // must throw error
        expect(cb).toThrowError(err);
    });
    // test for invalid id input
    it("should throw an error if 'id' is less than 0", () => {
      // invalid input
      const data = {name: "Robert", id: -1, email: "robert@gmail.com", school: "UC Davis"};
      // intern takes in invalid input
      const cb = () => new Intern(data);
      // throw error if id is a negative number
      const err = new Error("Expected parameter 'id' to be a non-negative number");
      // must throw error
      expect(cb).toThrowError(err);
    });
    // test for invalid school input
    it("should throw an error if 'school' input is not a string", () => {
      // invalid input
      const data = {name: "Robert", id: 3, email: "robert@gmail.com", school: 6};
      // intern takes in invalid input
      const cb = () => new Intern(data);
  
      // throw error if school is not a string
      const err = new Error("Expected parameter 'school' to be a non empty string");

      // must throw error
      expect(cb).toThrowError(err);
    })
  });
});