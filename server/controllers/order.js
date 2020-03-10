const order = require('../models').order;
const partdata = require('../models').partdata;
const date = require('date-and-time');

module.exports = {
	// list(req, res) {
	// 	return order.sequelize.query("SELECT * FROM order",
	// 		{
	// 			model: order,
	// 			mapToModel: true // pass true here if you have any mapped fields
	// 		})
	// 		.then(test => res.status(200).send(test))
	// 		.catch(error => res.status(400).send(error));
	// },
	list(req, res) {
		return order
			.findAll({
				order: [['id', 'DESC']]
			})
			.then(todos => res.status(200).send(todos))
			.catch(error => res.status(400).send(error));
	},
	create(req, res) {
		const now = new Date();
		const datetime = date.format(now, 'YYYYMMDD-HHmmss').toString();
		order
			.create({
				id: datetime,
				packer: req.body.packer,
				packergroup: req.body.packergroup,
				packerid: req.body.packerid,
				sot: req.body.sot,
				package: req.body.package,
				user_id: req.body.user_id
			})
			.then(todo => res.status(201).send(todo))
			.catch(error => res.status(400).send(error));
			// part: Object.values(req.body.part)
		partdata
			.update({
					status: 'packer',
					outdate : Date.now(),
					order_id: datetime,
					user_id: req.body.user_id
				},
				{ where: { partnumber: Object.values(req.body.part) } }
			)
			.then(partdata => res.status(200).send(partdata))
			.catch(error => res.status(400).send(error))

	},
	delete(req, res) {
		return order
			.destroy( {where: {}})
			.then(todos => res.status(200).send(todos))
			.catch(error => res.status(400).send(error));
	}
};
