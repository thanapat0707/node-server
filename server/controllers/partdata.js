const partdata = require('../models').partdata;

module.exports = {
	listAll(req, res) {
		const sql = `SELECT * FROM partdata 
						JOIN part ON partdata.part_id = part.part_id 
						ORDER BY partdata_id`;
		return partdata.sequelize.query(sql,
			{
				model: partdata,
				mapToModel: true // pass true here if you have any mapped fields
			})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},
	PartInPacker(req, res) {
		const sql = `SELECT * FROM partdata 
						JOIN part ON partdata.part_id = part.part_id
						WHERE status = 'packer' 
						ORDER BY partdata_id`;
		return partdata.sequelize.query(sql,
			{
				model: partdata,
				mapToModel: true // pass true here if you have any mapped fields
			})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},

	list(req, res) {
		const id = req.params.id;
		const sql = `SELECT * FROM partdata
						JOIN part ON partdata.part_id = part.part_id 
						WHERE partdata_id = ${id}
						ORDER BY partdata_id`;
		return partdata.sequelize.query(sql,
			{
				model: partdata,
				mapToModel: true // pass true here if you have any mapped fields
			})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},

	listdata(req, res) {
		return partdata
			.findAll({
				where: {
					partnumber: req.params.data.split(',')
				}
			})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},
	Update(req, res) {
		return partdata
			.update({
					part_id: req.body.part_id,
					time_base: req.body.time_base,
					counter_base: req.body.counter_base,
					status: req.body.status,
					location: req.body.location,
					update_date: Date.now(),
				},
				{ where: { partdata_id: req.body.partdata_id } }
			)
			.then(partdata => res.status(200).send(partdata))
			.catch(error => res.status(400).send(error))
	},

	PMpartUpdate(req, res) {
		return partdata
			.update({
						counter_use: 0,
						time_use: 0,
						user_id: req.body.user_id,
						pm_date: Date.now()
					},
						{ where: { partnumber: req.params.id } }
					)
					.then(partdata => res.status(200).send(partdata))
					.catch(error => res.status(400).send(error))
	},

	Reset(req, res) {
		return partdata
			.update({
					status: 'store',
					location: '',
					counter_use: 0,
					time_use: 0,
					convert_id: null,
					user_id: null,
					update_date: Date.now(),
				},
				{ where: {status: 'packer'} }
			)
			.then(partdata => res.status(200).send(partdata))
			.catch(error => res.status(400).send(error))
	},

	Insert(req, res) {
		return partdata
			.create({
				partdata_id: req.body.partdata_id,
				part_id: req.body.part_id || 1,
				status: 'store',
				location: req.body.location,
				time_base: req.body.time_base,
				time_use: 0,
				counter_base: req.body.counter_base,
				counter_use: 0,
				create_date: Date.now()
			})
			.then(todo => res.status(201).send(todo))
			.catch(error => res.status(400).send(error));
	},

	delete(req, res) {
		return partdata
			.destroy({where: {partdata_id: req.params.id}})
			.then(() => res.status(204).send())
			.catch(error => res.status(400).send(error));

	},
};
