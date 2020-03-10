const counterController = require( "../controllers" ).counter;
const todoItemsController = require('../controllers').todoItems;
const kitController = require('../controllers').kit;
const LMdataController = require('../controllers').LMdata;
const number_of_partController = require('../controllers').number_of_part;
const part_of_kitController = require('../controllers').part_of_kit;
const partdataController = require('../controllers').partdata;
const orderController = require('../controllers').order;
const testController = require('../controllers').test;
const packerController = require('../controllers').packer;
const sotController = require('../controllers').sot;
const partlistController = require('../controllers').partlist;
const usersController = require('../controllers').users;
const convertController = require('../controllers').conversion;
const partController = require('../controllers').part;

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the Todos API!',
	}));
	/*
	app.post('/api/todos', todosController.create);
	app.get('/api/todos', todosController.list);
	app.post('/api/todos/:todoId/items', todoItemsController.create);
	app.get('/api/todos/:todoId', todosController.retrieve);
	app.put('/api/todos/:todoId', todosController.update);
	app.delete('/api/todos/:todoId', todosController.destroy);
	 */
	// app.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy );

	// app.get('/api/kit', kitController.list);
	// app.get('/api/ckdbsql', ckdbController.listsql);

	// -------------------------------------------------------------------------------
	app.get('/api/packer', packerController.list);

	app.get('/api/sot', sotController.list);

	app.get('/api/partlist', partlistController.listAll);
	app.get('/api/partlist/:id', partlistController.list);
	app.put('/api/partlist', partlistController.Update);

	app.get('/api/user', usersController.list);

	app.post('/api/convert', convertController.create);
	app.get('/api/convert', convertController.list);
	app.put('/api/convert/delete', convertController.delete);

	app.get('/api/partdata', partdataController.listAll);
	// app.get('/api/partdata/:id', partdataController.list);
	app.post('/api/partdata', partdataController.Insert);
	app.put('/api/partdata', partdataController.Update);
	app.put('/api/partdata/reset', partdataController.Reset);

	app.get('/api/part', partController.list);
	app.post('/api/part', partController.Insert);

	// -------------------------------------------------------------------------------
	// app.get('/api/LMdata', LMdataController.list);

	app.get('/api/number_of_part', number_of_partController.listAll);
	app.get('/api/number_of_part/:part', number_of_partController.list);

	app.get('/api/part_of_kit', part_of_kitController.list);
	app.get('/api/part_of_kit/:kitID', part_of_kitController.part_of_kit);

	// app.get('/api/partdata', partdataController.listAll);
	app.get('/api/partdata/packer', partdataController.PartInPacker);
	app.get('/api/partdata/:data', partdataController.listdata);
	app.put('/api/partdata/:id', partdataController.PMpartUpdate);
	// app.put('/api/partdata/', partdataController.testUpdate);

	app.delete('/api/partdata/:id', partdataController.delete);

	app.get('/api/order', orderController.list);
	app.post('/api/order', orderController.create);
	app.delete('/api/order', orderController.delete);

	app.get('/api/testcode', testController.show);
	app.get('/api/testcode/startCounter', testController.startCounter);
	app.put('/api/testcode/stopCounter', testController.stopCounter);
	app.get('/api/testcode/counter', testController.counterBase);
	app.get('/api/testcode/new', testController.test);


	app.get('/api/counter', counterController.counterBase);

	// For any other request method on todo items, we're going to return "Method Not Allowed"
	app.all('/api/todos/:todoId/items', (req, res) =>
		res.status(405).send({
			message: 'Method Not Allowed',
		}));
};
