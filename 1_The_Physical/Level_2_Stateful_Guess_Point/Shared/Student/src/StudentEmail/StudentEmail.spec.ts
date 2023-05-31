import { StudentEmail } from "./StudentEmail";

describe("StudentEmail", () => {
  it("contains '@essentialist.dev", () => {
    const generatedEmail = StudentEmail.create("Betty", "Boop");
    expect(generatedEmail.getValue()).toContain("@essentialist.dev");
  });

  it("given the name 'Betty Boop', should create 'boopbe@essentialist.dev' ", () => {
    const generatedEmail = StudentEmail.create("Betty", "Boop");
    expect(generatedEmail.getValue()).toBe("boopbe@essentialist.dev");
  });

  it("given the name 'Khalil Stemmler', should create 'stemmkh@essentialist.dev' ", () => {
    const generatedEmail = StudentEmail.create("Khalil", "Stemmler");
    expect(generatedEmail.getValue()).toBe("stemmkh@essentialist.dev");
  });

  it("given the name 'Maxwell Po', should create 'poma@essentialist.dev'", () => {
    const generatedEmail = StudentEmail.create("Maxwell", "Po");
    expect(generatedEmail.getValue()).toBe("poma@essentialist.dev");
  });
});
