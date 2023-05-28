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
  ): Student {
    const validatedFirstName = this.validateFirstName(firstName);
    const validatedLastName = this.validateLastName(lastName);

    return new Student(validatedFirstName, validatedLastName);
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

    return `${lastName.toLowerCase()}${firstTwoCharOfFirstName}@essentialist.dev`;
  }

  private static validateFirstName(firstName: string | null): string {
    if (!firstName) {
      throw new Error("You must give a first name");
    }

    if (firstName.length < 2) {
      throw new Error("Your first name must have at least 2 characters");
    }

    if (firstName.length > 10) {
      throw new Error("Your first name must have at most 10 characters");
    }

    return firstName;
  }

  private static validateLastName(lastName: string | null): string {
    if (!lastName) {
      throw new Error("You must give a last name");
    }

    if (lastName.length < 2) {
      throw new Error("Your last name must have at least 2 characters");
    }

    if (lastName.length > 15) {
      throw new Error("Your last name must have at most 15 characters");
    }

    return lastName;
  }
}
