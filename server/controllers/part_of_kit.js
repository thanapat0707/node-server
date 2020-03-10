const part_of_kit = require('../models').part_of_kit;

module.exports = {
	list(req, res) {
		return part_of_kit.sequelize.query("SELECT * FROM part_of_kit",
			{
				model: part_of_kit,
				mapToModel: true // pass true here if you have any mapped fields
		})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},
	part_of_kit(req, res) {
		return part_of_kit
			.findAll({
				where: {
					kitid: req.params.kitID
				}
			})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},
};
