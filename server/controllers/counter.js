const counter = require('../models').counter;

module.exports = {
	counterBase(req, res) {
		return counter.sequelize.query("SELECT * FROM counter", {
			model: counter,
			mapToModel: true // pass true here if you have any mapped fields
		})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},

};
