export type Result<T> = Success<T> | Failure;

export type Success<T> = {
  type: "success";
  value: T;
  isSuccess: true;
  isFailure: false;
};

export type Failure = {
  type: "failure";
  error: string;
  isSuccess: false;
  isFailure: true;
};

export class Student {
  private firstName;
  private lastName;
  private email;

  private constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = this.setUpEmail(firstName, lastName);
  }

  public static create(
    firstName: string | null,
    lastName: string | null
  ): Result<Student> {
    const validatedFirstName = this.validateFirstName(firstName);
    const validatedLastName = this.validateLastName(lastName);

    if (validatedFirstName.isFailure) {
      return {
        type: "failure",
        error: validatedFirstName.error,
        isSuccess: false,
        isFailure: true,
      };
    }

    if (validatedLastName.isFailure) {
      return {
        type: "failure",
        error: validatedLastName.error,
        isSuccess: false,
        isFailure: true,
      };
    }

    return {
      type: "success",
      value: new Student(validatedFirstName.value, validatedLastName.value),
      isSuccess: true,
      isFailure: false,
    };
  }

  public getFirstName() {
    return this.firstName;
  }

  public getLastName() {
    return this.lastName;
  }

  public getEmail() {
    return this.email;
  }

  private setUpEmail(firstName: string, lastName: string) {
    const firstTwoCharOfFirstName = firstName.slice(0, 2).toLowerCase();
    const first5CharOfLastName =
      lastName.length < 5
        ? lastName.toLowerCase()
        : lastName.slice(0, 5).toLowerCase();

    return `${first5CharOfLastName}${firstTwoCharOfFirstName}@essentialist.dev`;
  }

  private static validateFirstName(firstName: string | null): Result<string> {
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

  private static validateLastName(lastName: string | null): Result<string> {
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
