import Express from 'express';
import { Provider, store } from 'redux';
import { Sequelize } from 'sequelize';
var models = require('./models');

const app = Express();
const port = 3000;

// Wait on api calls here

models.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log('Planr is running on localhost:' + port + '!');
  });
});

models.sequelize.sync().then(function() {
  models.users.create({
    username: 'mrrobot',
    email: 'mr@robot.com',
    password: 'monkey',
    join_date: '1994-05-31'
  })
})

// Create new store and send initial state to client
app.get('/*', (req,res) => {
    res.send('hello world!');
});
