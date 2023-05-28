import { error } from "console";
import { Student } from "./Student";

describe("Student", () => {
  it("fails to be made when not given a first name", () => {
    expect(() => Student.create(null, "Boop")).toThrowError();
  });

  it("fails to be made when the first name is only 1 character", () => {
    expect(() => Student.create("B", "Boop")).toThrowError();
  });
});
