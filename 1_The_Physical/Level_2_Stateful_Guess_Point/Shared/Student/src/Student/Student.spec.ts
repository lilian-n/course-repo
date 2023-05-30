import { Student } from "./Student";

describe("Student", () => {
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
    const studentResult = Student.create("Betty", "Boop");
    expect(studentResult.isSuccess).toBeTruthy();

    if (studentResult.isFailure) {
      return;
    }

    const student = studentResult.value;

    it("changes the student's name from 'Betty' to 'Betsy'", () => {
      const updatedStudent = student.updateFirstName("Betsy");
      expect(updatedStudent.isSuccess).toBeTruthy();

      if (updatedStudent.isFailure) {
        return;
      }

      expect(updatedStudent.value.getFirstName()).toBe("Betsy");
    });

    it("the student's email changes to reflect the updated first name", () => {
      const updatedStudent = student.updateFirstName("Betsy");
      expect(updatedStudent.isSuccess).toBeTruthy();

      if (updatedStudent.isFailure) {
        return;
      }

      expect(updatedStudent.value.getEmail()).toBe("boopbe@essentialist.dev");
    });

    it("fails to update if a first name is not given", () => {
      const updatedStudent = student.updateFirstName(null);
      expect(updatedStudent.isSuccess).toBeFalsy();
    });
  });

  describe("when updating a last name", () => {
    const studentResult = Student.create("Betty", "Boop");
    expect(studentResult.isSuccess).toBeTruthy();

    if (studentResult.isFailure) {
      return;
    }

    const student = studentResult.value;

    it("changes the student's last name from 'Boop' to 'Snoop'", () => {
      const updatedStudent = student.updateLastName("Snoop");
      expect(updatedStudent.isSuccess).toBeTruthy();

      if (updatedStudent.isFailure) {
        return;
      }

      expect(updatedStudent.value.getLastName()).toBe("Snoop");
    });

    it("the student's email changes to reflect the updated last name", () => {
      const updatedStudent = student.updateLastName("Snoop");
      expect(updatedStudent.isSuccess).toBeTruthy();

      if (updatedStudent.isFailure) {
        return;
      }

      expect(updatedStudent.value.getEmail()).toBe("snoopbe@essentialist.dev");
    });

    it("fails to update if a last name is not given", () => {
      const updatedStudent = student.updateLastName(null);
      expect(updatedStudent.isSuccess).toBeFalsy();
    });
  });
});
