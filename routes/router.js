const Router = require('express').Router;
const Pedal = require(__dirname + '/../models/pedal');
const Motor = require(__dirname + '/../models/motor');
const bodyParser = require('body-parser').json();
const myRouter = module.exports = new Router();

myRouter.get('/pedal');

myRouter.get('/motor');

myRouter.post('/pedal');

myRouter.post('/motor');

myRouter.put('/pedal');

myRouter.put('/motor');

myRouter.delete('/pedal');

myRouter.delete('/motor');

myRouter.get('/fastest');
