import { Student } from "./Student";

describe("Student", () => {
  describe("when defining a first name", () => {
    it("fails to be created when not given a first name", () => {
      const studentResult = Student.create(null, "Boop");
      expect(studentResult.isSuccess).toBeFalsy();

      if (studentResult.isFailure) {
        expect(studentResult.error).toBe("You must give a first name");
      }
    });

    it("fails to be created when the first name is only 1 character", () => {
      const studentResult = Student.create("B", "Boop");
      expect(studentResult.isSuccess).toBeFalsy();

      if (studentResult.isFailure) {
        expect(studentResult.error).toBe(
          "Your first name must have at least 2 characters"
        );
      }
    });

    it("fails to be created when the first name is over 10 characters", () => {
      const studentResult = Student.create("Bettyyyyyyy", "Boop");
      expect(studentResult.isSuccess).toBeFalsy();

      if (studentResult.isFailure) {
        expect(studentResult.error).toBe(
          "Your first name must have at most 10 characters"
        );
      }
    });

    it("succeeds in being created when the first name is 5 characters, between 2 and 10 characters", () => {
      const studentResult = Student.create("Betty", "Boop");

      expect(studentResult.isSuccess).toBeTruthy();

      if (studentResult.isSuccess) {
        expect(studentResult.value.getFirstName()).toBe("Betty");
      }
    });
  });

  describe("when defining a last name", () => {
    it("fails to be created when not given a last name", () => {
      const studentResult = Student.create("Betty", null);
      expect(studentResult.isSuccess).toBeFalsy();

      if (studentResult.isFailure) {
        expect(studentResult.error).toBe("You must give a last name");
      }
    });

    it("fails to be created when the last name is only 1 character", () => {
      const studentResult = Student.create("Betty", "B");
      expect(studentResult.isSuccess).toBeFalsy();

      if (studentResult.isFailure) {
        expect(studentResult.error).toBe(
          "Your last name must have at least 2 characters"
        );
      }
    });

    it("fails to be created when the last name is over 15 characters", () => {
      const studentResult = Student.create("Betty", "Booppppppppppppp");
      expect(studentResult.isSuccess).toBeFalsy();

      if (studentResult.isFailure) {
        expect(studentResult.error).toBe(
          "Your last name must have at most 15 characters"
        );
      }
    });

    it("succeeds in being created when the last name is 4 characters, between 2 - 15 characters", () => {
      const studentResult = Student.create("Betty", "Boop");
      expect(studentResult.isSuccess).toBeTruthy();

      if (studentResult.isSuccess) {
        expect(studentResult.value.getLastName()).toBe("Boop");
      }
    });
  });

  describe("when automatically generating a student email, should define in the following format: up to 5 characters of their last name + 2 characters of their first name + @essentialist.dev", () => {
    it("should have a student email defined", () => {
      const studentResult = Student.create("Betty", "Boop");
      expect(studentResult.isSuccess).toBeTruthy();

      if (studentResult.isSuccess) {
        expect(studentResult.value.getEmail()).toBeDefined();
      }
    });

    it("given the name 'Betty Boop', should create 'boopbe@essentialist.dev' ", () => {
      const studentResult = Student.create("Betty", "Boop");
      expect(studentResult.isSuccess).toBeTruthy();

      if (studentResult.isSuccess) {
        expect(studentResult.value.getEmail()).toBe("boopbe@essentialist.dev");
      }
    });

    it("given the name 'Khalil Stemmler', should create 'stemmkh@essentialist.dev' ", () => {
      const studentResult = Student.create("Khalil", "Stemmler");
      expect(studentResult.isSuccess).toBeTruthy();

      if (studentResult.isSuccess) {
        expect(studentResult.value.getEmail()).toBe("stemmkh@essentialist.dev");
      }
    });

    it("given the name 'Maxwell Po', should create 'poma@essentialist.dev'", () => {
      const studentResult = Student.create("Maxwell", "Po");
      expect(studentResult.isSuccess).toBeTruthy();

      if (studentResult.isSuccess) {
        expect(studentResult.value.getEmail()).toBe("poma@essentialist.dev");
      }
    });
  });

  describe("when updating a first name", () => {
    it("changes the student's name from 'Betty' to 'Betsy'", () => {
      const studentResult = Student.create("Betty", "Boop");
      expect(studentResult.isSuccess).toBeTruthy();

      if (studentResult.isFailure) {
        return;
      }

      const student = studentResult.value;
      const updatedStudent = student.updateFirstName("Betsy");
      expect(updatedStudent.isSuccess).toBeTruthy();

      if (updatedStudent.isFailure) {
        return;
      }
      expect(updatedStudent.value.getFirstName()).toBe("Betsy");
    });
  });
});
