const sot = require('../models').sot;

module.exports = {
	list(req, res) {
		return sot.sequelize.query("SELECT * FROM sot ORDER BY sot_id", {
			model: sot,
			mapToModel: true // pass true here if you have any mapped fields
		})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},

};
