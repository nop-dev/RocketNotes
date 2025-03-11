const sqliteConnection = require("../database/sqlite");

class UserRepository {
	async findByEmail(email) {
		const database = await sqliteConnection();

		const user = await database.get("SELECT * FROM users WHERE email = (?)", [
			email,
		]);

		return user;
	}

	async create({ name, email, password }) {
		const database = await sqliteConnection();

		await database.run(
			"INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
			[name, email, password],
		);

		return console.log("Cadastro concluído...");
	}
}

module.exports = UserRepository;
