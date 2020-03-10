const users = require('../models').users;

module.exports = {
	list(req, res) {
		return users.sequelize.query("SELECT * FROM users", {
			model: users,
			mapToModel: true // pass true here if you have any mapped fields
		})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},

};
