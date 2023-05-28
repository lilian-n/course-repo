export class Student {
  private firstName;
  private lastName;

  private constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public static create(
    firstName: string | null,
    lastName: string | null
  ): Student {
    const validatedFirstName = this.validateFirstName(firstName);

    if (!lastName) {
      throw new Error("You must give a last name");
    }

    return new Student(validatedFirstName, lastName);
  }

  public getFirstName() {
    return this.firstName;
  }

  private static validateFirstName(firstName: string | null): string {
    if (!firstName) {
      throw new Error("You must give a first name");
    }

    if (firstName.length < 2) {
      throw new Error("Your first name must have at least 2 characters");
    }

    return firstName;
  }
}
