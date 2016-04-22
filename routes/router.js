const Router = require('express').Router;
const Pedal = require(__dirname + '/../models/pedal');
const Motor = require(__dirname + '/../models/motor');
const bodyParser = require('body-parser').json();
const myRouter = module.exports = new Router();

myRouter.get('/pedal', (req, res) => {
  Pedal.find(null, (err, data) => {
    if (err) return res.status(500).send('Server Error');
    res.status(200).json(data);
  });
});

myRouter.get('/motor', (req, res) => {
  Motor.find(null, (err, data) => {
    if (err) return res.status(500).send('Server Error');
    res.status(200).json(data);
  });
});

myRouter.post('/pedal', bodyParser, (req, res) => {
  var newPedal = new Pedal(req.body);
  newPedal.save((err, data) => {
    if (err) return res.status(500).send('Server Error');
    res.status(200).json(data);
  });
});

myRouter.post('/motor', bodyParser, (req, res) => {
  var newMotor = new Motor(req.body);
  newMotor.save((err. data) => {
    if (err) return res.status(500).send('Server Error');
    res.status(200).json(data);
  })
});

myRouter.put('/pedal');

myRouter.put('/motor');

myRouter.delete('/pedal');

myRouter.delete('/motor');

myRouter.get('/fastest');
