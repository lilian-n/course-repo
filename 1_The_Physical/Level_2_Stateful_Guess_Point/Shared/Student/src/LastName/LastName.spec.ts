import { LastName } from "./LastName";

describe("when defining a last name", () => {
  it("fails to be created when not given a last name", () => {
    const nameResult = LastName.create(null);
    expect(nameResult.isSuccess).toBeFalsy();

    if (nameResult.isFailure) {
      expect(nameResult.error).toBe("You must give a last name");
    }
  });

  it("fails to be created when the last name is only 1 character", () => {
    const nameResult = LastName.create("B");
    expect(nameResult.isSuccess).toBeFalsy();

    if (nameResult.isFailure) {
      expect(nameResult.error).toBe(
        "Your last name must have at least 2 characters"
      );
    }
  });

  it("fails to be created when the last name is over 15 characters", () => {
    const nameResult = LastName.create("Booppppppppppppp");
    expect(nameResult.isSuccess).toBeFalsy();

    if (nameResult.isFailure) {
      expect(nameResult.error).toBe(
        "Your last name must have at most 15 characters"
      );
    }
  });

  it("succeeds in being created when the last name is 4 characters, between 2 - 15 characters", () => {
    const nameResult = LastName.create("Boop");
    expect(nameResult.isSuccess).toBeTruthy();

    if (nameResult.isSuccess) {
      expect(nameResult.value.getValue()).toBe("Boop");
    }
  });
});
