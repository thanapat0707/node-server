const LMdata = require('../models').LMdata;

module.exports = {
	list(req, res) {
		return LMdata
			.findAll()
			.then(LMdata => res.status(200).send(LMdata))
			.catch(error => res.status(400).send(error));
	},
};

// {attributes : ['packergroup', 'packerid', 'kitid', 'sot', 'id']}
