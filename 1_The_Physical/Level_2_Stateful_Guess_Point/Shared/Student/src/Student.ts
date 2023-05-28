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
    if (!firstName) {
      throw new Error("You must give a first name");
    }

    if (!lastName) {
      throw new Error("You must give a last name");
    }

    return new Student(firstName, lastName);
  }

  public getFirstName() {
    return this.firstName;
  }
}
