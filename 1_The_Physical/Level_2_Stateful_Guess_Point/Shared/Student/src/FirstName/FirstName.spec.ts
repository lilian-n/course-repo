import { FirstName } from "./FirstName";

describe("FirstName", () => {
  it("fails to be created when not given a name", () => {
    const nameResult = FirstName.create(null);
    expect(nameResult.isSuccess).toBeFalsy();

    if (nameResult.isFailure) {
      expect(nameResult.error).toBe("You must give a first name");
    }
  });

  it("fails to be created when the name is only 1 character", () => {
    const nameResult = FirstName.create("B");
    expect(nameResult.isSuccess).toBeFalsy();

    if (nameResult.isFailure) {
      expect(nameResult.error).toBe(
        "Your first name must have at least 2 characters"
      );
    }
  });

  it("fails to be created when the name is over 10 characters", () => {
    const nameResult = FirstName.create("Bettyyyyyyy");
    expect(nameResult.isSuccess).toBeFalsy();

    if (nameResult.isFailure) {
      expect(nameResult.error).toBe(
        "Your first name must have at most 10 characters"
      );
    }
  });

  it("succeeds in being created when the name is 5 characters, between 2 and 10 characters", () => {
    const nameResult = FirstName.create("Betty");

    expect(nameResult.isSuccess).toBeTruthy();

    if (nameResult.isSuccess) {
      expect(nameResult.value.getValue()).toBe("Betty");
    }
  });
});
