import { Student } from "./Student";

describe("Student", () => {
  it("fails to be created when not given a first name", () => {
    expect(() => Student.create(null, "Boop")).toThrowError();
  });

  it("fails to be created when the first name is only 1 character", () => {
    expect(() => Student.create("B", "Boop")).toThrowError();
  });

  it("fails to be created when the first name is over 10 characters", () => {
    expect(() => Student.create("Bettyyyyyyy", "Boop")).toThrowError();
  });
});
