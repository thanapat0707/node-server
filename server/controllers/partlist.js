const partlist = require('../models').partlist;

module.exports = {
	listAll(req, res) {
		const sql = `SELECT * FROM partlist 
						JOIN sot ON partlist.sot_id = sot.sot_id
						ORDER BY packer_id`;
		return partlist.sequelize.query(sql, {
			model: partlist,
			mapToModel: true // pass true here if you have any mapped fields
		})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},

	list(req, res) {
		const sql = `SELECT * FROM partlist WHERE partlist_id = ` + req.params.id;
		return partlist.sequelize.query(sql, {
			model: partlist,
			mapToModel: true // pass true here if you have any mapped fields
		})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},

	Update(req, res) {
		return partlist
			.update({
					allpart: req.body.allpart
				},
				{ where: { partlist_id: req.body.partlist_id } }
			)
			.then(partdata => res.status(200).send(partdata))
			.catch(error => res.status(400).send(error))
	},

};
