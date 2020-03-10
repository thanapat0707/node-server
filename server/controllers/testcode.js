const partdata = require('../models').partdata;
const order = require('../models').order;
const counter = require('../models').counter;
const conversion = require('../models').conversion;

var CounterInterval;
var TimeInterval;

module.exports = {

	show(req, res) {
		return partdata.sequelize.query("SELECT status, usetime FROM partdata WHERE status = 'packer'", {
			model: partdata,
			mapToModel: true // pass true here if you have any mapped fields
		})
			.then(test => res.status(200).send(test))
			.catch(error => res.status(400).send(error));
	},

	startCounter(req, res) {
		createCounterInterval(req, res);
		createTimeInterval(req, res);
		console.log('Start Counter');
		// return res;
	},

	stopCounter(req, res) {
		clearInterval(CounterInterval);
		clearInterval(TimeInterval);
		console.log('Stop Counter');
		return res;
	},

	async test(req, res) {
		// const sql = `SELECT * FROM partdata
		// 				JOIN conversion ON conversion.convert_id = partdata.convert_id
		// 				ORDER BY partdata_id`;
		const data = await partdata.findAll({
			where: {
				status: 'packer',
			},
		});
		console.log('data: ', data);
		// for (let part of data) {
		// 	console.log('data: ', part.partdata_id, ', ', part.convert_id, ', ', part.packer_id);
		// }
	},

	// ไม่ได้ใช้งาน
	async counterBase(req, res) {
		// const data = await partdata.findAll({
		// 	where: {
		// 		status: 'packer',
		// 	}
		// });
		//
		// for (let list of data) {
		// 	let id = list.order_id;
		// 	const packer = await order.findAll({
		// 		where: {
		// 			id: id,
		// 		}
		// 	});
		// 	// for (let article of packer) { // ไมจำเป็ยต้องใช้เพราะมันมีค่าเดียวอยู่แล้ว หรือจะใช้ก็ได้ ลูปรอบเดียว ต่าง?
		// 		// console.log('list: ', packer[0].packerid);
		// 		const Counter = await counter.findAll({
		// 			where: {
		// 				id: packer[0].packerid,
		// 			}
		// 		});
		//
		// 		// console.log('counter: ', Counter[0].counter);
		// 		const countValue = Counter[0].counter;
		//
		// 		partdata.update({
		// 				usetime: list.usetime + countValue
		// 			},{ where: {partnumber: list.partnumber }})
		// 			.then(part => res.status(200).send())
		// 			.catch(error => res.status(400).send(error));
		// }
	},
};



function createCounterInterval(req, res) {
	CounterInterval = setInterval( async () => {

		const data = await partdata.findAll({
			where: {
				status: 'packer',
			}
		});

		for (let list of data) {
			let id = list.order_id;
			const packer = await order.findAll({
				where: {
					id: id,
				}
			});
			// for (let article of packer) { // ไมจำเป็นต้องใช้เพราะมันมีค่าเดียวอยู่แล้ว หรือจะใช้ก็ได้ ลูปรอบเดียว ต่าง?
			// console.log('list: ', packer[0].packerid);
			const Counter = await counter.findAll({
				where: {
					id: packer[0].packerid,
				}
			});

			// console.log('counter: ', Counter[0].counter);
			const countValue = Counter[0].counter;

			partdata
				.update({
					counter_use: list.counter_use + countValue
				}, { where: { partnumber: list.partnumber }})
				.then(part => res.status(200).send())
				.catch(error => res.status(400).send(error));
		}

	}, 10000 );

}

function createTimeInterval(req, res) {
	TimeInterval = setInterval(() => {
		partdata.sequelize.query("UPDATE partdata SET time_use = time_use+1", {
			model: partdata,
			mapToModel: true // pass true here if you have any mapped fields
		})
			.then(part => res.status(200).send())
			.catch(error => res.status(400).send(error));
	}, 60000 );

}

//one_day means 1000*60*60*24
//one_hour means 1000*60*60
//one_minute means 1000*60
//one_second means 1000
