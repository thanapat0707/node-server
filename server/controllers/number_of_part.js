const number_of_part = require('../models').number_of_part;
module.exports = {
	listAll(req, res) {
		return number_of_part.sequelize.query("SELECT * FROM number_of_part", {
			model: number_of_part,
			mapToModel: true // pass true here if you have any mapped fields
		})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},
	listA(req, res) {
		return number_of_part.sequelize.query("SELECT * FROM number_of_part WHERE partname = array", {
			model: number_of_part,
			mapToModel: true // pass true here if you have any mapped fields
		})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},
	list(req, res) {
		return number_of_part
			.findAll({
				where: {
					partname: req.params.part.split(',')
				}
			})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},

};
