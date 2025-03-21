const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");

describe("UserCreateService", () => {
	it("user should be created", async () => {
		const user = {
			name: "userTest",
			email: "nop@gmail.com",
			password: "123456",
		};

		const userRepositoryInMemory = new UserRepositoryInMemory();

		const userCreateService = new UserCreateService(userRepositoryInMemory);

		const userCreated = await userCreateService.execute(user);

		console.log(userCreated);

		expect(userCreated).toHaveProperty("id");
	});

	it("user not should be created with in-use email", async () => {
		const user1 = {
			name: "user test 1",
			email: "user@test1.com",
			password: "123",
		};

		const user2 = {
			name: "user test 2",
			email: "user@test1.com",
			password: "456",
		};

		const userRepository = new UserRepositoryInMemory();
		const userCreateService = new UserCreateService(userRepository);

		await userCreateService.execute(user1);

		expect(userCreateService.execute(user2)).rejects.toMatchObject({
			message: "Este e-mail já está em uso...",
		});
	});
});
