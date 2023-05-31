import { Result } from "../Student/Student";

export class LastName {
  private readonly lastName;

  constructor(lastName: string) {
    this.lastName = lastName;
  }

  public static create(lastName: string | null): Result<LastName> {
    const validateNameResult = this.validate(lastName);

    if (validateNameResult.isFailure) {
      return {
        type: "failure",
        error: validateNameResult.error,
        isSuccess: false,
        isFailure: true,
      };
    }

    return {
      type: "success",
      value: new LastName(validateNameResult.value),
      isSuccess: true,
      isFailure: false,
    };
  }

  public getValue() {
    return this.lastName;
  }

  private static validate(lastName: string | null): Result<string> {
    if (!lastName) {
      return {
        type: "failure",
        error: "You must give a last name",
        isSuccess: false,
        isFailure: true,
      };
    }

    if (lastName.length < 2) {
      return {
        type: "failure",
        error: "Your last name must have at least 2 characters",
        isSuccess: false,
        isFailure: true,
      };
    }

    if (lastName.length > 10) {
      return {
        type: "failure",
        error: "Your last name must have at most 15 characters",
        isSuccess: false,
        isFailure: true,
      };
    }

    return {
      type: "success",
      value: lastName,
      isSuccess: true,
      isFailure: false,
    };
  }
}
