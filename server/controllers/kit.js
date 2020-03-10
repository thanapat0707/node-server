const kit = require('../models').kit;

module.exports = {
	list(req, res) {
		return kit.sequelize.query("SELECT * FROM kit", {
			model: kit,
			mapToModel: true // pass true here if you have any mapped fields
			})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},

};

// {attributes : ['packergroup', 'packerid', 'kitid', 'sot', 'id']}
/*
listsql(req, res) {
	return ckdb.sequelize.query("SELECT DISTINCT packer FROM ckdbs", {
		model: ckdb,
		mapToModel: true // pass true here if you have any mapped fields
	})
		.then(test => res.status(200).send(test))
		.catch(error => res.status(400).send(error));
},

 */
