import { SignUpController } from "./sign-up";

describe("Sign-Up", () => {
  test("should returns statusCode 400 if name is not provided", async () => {
    const sut = new SignUpController();

    const httpRequest = {
      email: "valid_email@mail.com",
      password: "valid_password",
    };

    const req = await sut.handle({ body: httpRequest });

    expect(req.statusCode).toBe(400);
  });

  test("should returns statusCode 400 if email is not provided", async () => {
    const sut = new SignUpController();

    const httpRequest = {
      name: "valid_name",
      password: "valid_password",
    };

    const req = await sut.handle({ body: httpRequest });

    expect(req.statusCode).toBe(400);
  });

  test("should returns statusCode 400 if password is not provided", async () => {
    const sut = new SignUpController();

    const httpRequest = {
      name: "valid_name",
      email: "valid_email@mail.com",
    };

    const req = await sut.handle({ body: httpRequest });

    expect(req.statusCode).toBe(400);
  });
});
