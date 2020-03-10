const packer = require('../models').packer;

module.exports = {
	list(req, res) {
		return packer.sequelize.query("SELECT * FROM packer ORDER BY packer_type", {
			model: packer,
			mapToModel: true // pass true here if you have any mapped fields
		})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},

};
