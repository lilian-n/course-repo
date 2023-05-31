export class StudentEmail {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  public static create(firstName: string, lastName: string) {
    const generatedEmail = this.setUpEmail(firstName, lastName);

    return new StudentEmail(generatedEmail);
  }

  getValue() {
    return this.email;
  }

  private static setUpEmail(firstName: string, lastName: string) {
    const firstTwoCharOfFirstName = firstName.slice(0, 2).toLowerCase();
    const first5CharOfLastName =
      lastName.length < 5
        ? lastName.toLowerCase()
        : lastName.slice(0, 5).toLowerCase();

    return `${first5CharOfLastName}${firstTwoCharOfFirstName}@essentialist.dev`;
  }
}
