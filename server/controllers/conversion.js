const conversion = require('../models').conversion;
const partdata = require('../models').partdata;
const date = require('date-and-time');

module.exports = {
	list(req, res) {
		const sql = `SELECT * FROM conversion 
						JOIN sot ON conversion.sot_id = sot.sot_id 
						JOIN packer ON conversion.packer_id = packer.packer_id 
						ORDER BY convert_id DESC`;
		return conversion.sequelize.query( sql, {
			model: conversion,
			mapToModel: true // pass true here if you have any mapped fields
		})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},

	create(req, res) {
		const now = new Date();
		const datetime = date.format(now, 'YYYYMMDD-HHmmss').toString();
		conversion
			.create({
				convert_id: datetime,
				packer_id: req.body.packer_id,
				sot_id: req.body.sot_id,
				user_id: req.body.user_id,
			})
			.then(todo => res.status(201).send(todo))
			.catch(error => res.status(400).send(error));
		// part: Object.values(req.body.part)
		partdata
			.update({
					status: 'packer',
					location: null,
					convert_id: datetime,
					user_id: req.body.user_id,
					update_date: Date.now(),
				},
				{ where: { partdata_id: req.body.part } }
			)
			.then(partdata => res.status(200).send(partdata))
			.catch(error => res.status(400).send(error))

	},

	delete(req, res) {
		return conversion
			.destroy( {where: {}})
			.then(todos => res.status(200).send(todos))
			.catch(error => res.status(400).send(error));
	}

};
