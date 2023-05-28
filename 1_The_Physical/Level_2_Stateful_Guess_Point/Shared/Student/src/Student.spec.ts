import { error } from "console";
import { Student } from "./Student";

describe("Student", () => {
  it("fails to be made when not given a first name", () => {
    expect(() => Student.create(null, "Boop")).toThrowError();
  });
});
