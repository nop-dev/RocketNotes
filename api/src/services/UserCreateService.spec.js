const UserCreateService = require("./UserCreateService");

it("user should be created", () => {
	const user = {
		name: "userTest",
		email: "nop@gmail.com",
		password: "123456",
	};

	const userCreateService = new UserCreateService();

	const userCreated = userCreateService.execute(user);

	expect(userCreated).toHaveProperty("id")
});
