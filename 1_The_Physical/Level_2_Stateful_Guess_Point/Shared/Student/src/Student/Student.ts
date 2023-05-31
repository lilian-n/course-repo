import { FirstName } from "../FirstName/FirstName";
import { LastName } from "../LastName/LastName";
import { StudentEmail } from "../StudentEmail/StudentEmail";

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
  private readonly firstName: FirstName;
  private readonly lastName: LastName;
  private readonly email: StudentEmail;

  private constructor(firstName: FirstName, lastName: LastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = StudentEmail.create(firstName.getValue(), lastName.getValue());
  }

  public static create(
    firstName: string | null,
    lastName: string | null
  ): Result<Student> {
    const firstNameOrError = FirstName.create(firstName);
    const lastNameOrError = LastName.create(lastName);

    if (firstNameOrError.isFailure) {
      return {
        type: "failure",
        error: firstNameOrError.error,
        isSuccess: false,
        isFailure: true,
      };
    }

    if (lastNameOrError.isFailure) {
      return {
        type: "failure",
        error: lastNameOrError.error,
        isSuccess: false,
        isFailure: true,
      };
    }

    return {
      type: "success",
      value: new Student(firstNameOrError.value, lastNameOrError.value),
      isSuccess: true,
      isFailure: false,
    };
  }

  public getFirstName() {
    return this.firstName.getValue();
  }

  public getLastName() {
    return this.lastName.getValue();
  }

  public getEmail() {
    return this.email.getValue();
  }

  public updateFirstName(firstName: string | null): Result<Student> {
    return Student.create(firstName, this.lastName.getValue());
  }

  public updateLastName(lastName: string | null): Result<Student> {
    return Student.create(this.firstName.getValue(), lastName);
  }
}
