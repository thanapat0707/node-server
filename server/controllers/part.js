const part = require('../models').part;

module.exports = {
	list(req, res) {
		return part.sequelize.query("SELECT * FROM part ORDER BY part_name", {
			model: part,
			mapToModel: true // pass true here if you have any mapped fields
		})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},

	Insert(req, res) {
		return part
			.create({
				part_name: req.body.part_name
			})
			.then(todo => res.status(201).send(todo))
			.catch(error => res.status(400).send(error));
	},

};
