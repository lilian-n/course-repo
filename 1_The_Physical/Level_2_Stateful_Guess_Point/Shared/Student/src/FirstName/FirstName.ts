import { Result } from "../Student/Student";

export class FirstName {
  private readonly firstName;

  constructor(firstName: string) {
    this.firstName = firstName;
  }

  public static create(firstName: string | null): Result<FirstName> {
    const validatedName = this.validate(firstName);

    if (validatedName.isFailure) {
      return {
        type: "failure",
        error: validatedName.error,
        isSuccess: false,
        isFailure: true,
      };
    }

    return {
      type: "success",
      value: new FirstName(validatedName.value),
      isSuccess: true,
      isFailure: false,
    };
  }

  public getValue() {
    return this.firstName;
  }

  private static validate(firstName: string | null): Result<string> {
    if (!firstName) {
      return {
        type: "failure",
        error: "You must give a first name",
        isSuccess: false,
        isFailure: true,
      };
    }

    if (firstName.length < 2) {
      return {
        type: "failure",
        error: "Your first name must have at least 2 characters",
        isSuccess: false,
        isFailure: true,
      };
    }

    if (firstName.length > 10) {
      return {
        type: "failure",
        error: "Your first name must have at most 10 characters",
        isSuccess: false,
        isFailure: true,
      };
    }

    return {
      type: "success",
      value: firstName,
      isSuccess: true,
      isFailure: false,
    };
  }
}
