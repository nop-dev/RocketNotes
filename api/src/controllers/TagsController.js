const knex = require("../database/knex");

class TagsControler {
	async index(request, response) {
		const user_id = request.user.id;

		const tags = await knex("tags").where({ user_id }).groupBy("title");

		return response.json(tags);
	}
}

module.exports = TagsControler;
