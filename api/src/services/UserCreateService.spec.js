const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");

it("user should be created", async () => {
	const user = {
		name: "userTest",
		email: "nop@gmail.com",
		password: "123456",
	};

	const userRepositoryInMemory = new UserRepositoryInMemory();

	const userCreateService = new UserCreateService(userRepositoryInMemory);

	const userCreated = await userCreateService.execute(user);

	console.log(userCreated)

	expect(userCreated).toHaveProperty("id");
});
