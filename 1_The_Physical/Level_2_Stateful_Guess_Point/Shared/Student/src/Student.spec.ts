import { Student } from "./Student";

describe("Student", () => {
  describe("when defining a first name", () => {
    it("fails to be created when not given a first name", () => {
      expect(() => Student.create(null, "Boop")).toThrowError();
    });

    it("fails to be created when the first name is only 1 character", () => {
      expect(() => Student.create("B", "Boop")).toThrowError();
    });

    it("fails to be created when the first name is over 10 characters", () => {
      expect(() => Student.create("Bettyyyyyyy", "Boop")).toThrowError();
    });

    it("succeeds in being created when the first name is 5 characters, between 2 and 10 characters", () => {
      const student = Student.create("Betty", "Boop");

      expect(student.getFirstName()).toBe("Betty");
    });
  });

  describe("when defining a last name", () => {
    it("fails to be created when not given a last name", () => {
      expect(() => Student.create("Betty", null)).toThrowError();
    });

    it("fails to be created when the last name is only 1 character", () => {
      expect(() => Student.create("Betty", "B")).toThrowError();
    });

    it("fails to be created when the last name is over 15 characters", () => {
      expect(() => Student.create("Betty", "Booppppppppppppp")).toThrowError();
    });

    it("succeeds in being created when the last name is 4 characters, between 2 - 15 characters", () => {
      const student = Student.create("Betty", "Boop");

      expect(student.getLastName()).toBe("Boop");
    });
  });

  describe("when automatically generating a student email", () => {
    it("should have a student email defined", () => {
      const student = Student.create("Betty", "Boop");

      expect(student.getEmail()).toBeDefined();
    });

    it("should define their email as all lowercase characters", () => {
      const student = Student.create("Betty", "Boop");
      expect(student.getEmail()).toBe("boopbe@essentialist.dev");
    });
  });
});
