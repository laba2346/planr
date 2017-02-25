import Express from 'express';
import { Provider, store } from 'redux';
import { Sequelize } from 'sequelize';

const app = Express();
const port = 3000;

// Wait on api calls here
var sequelize = new Sequelize('mysql://root@localhost:3306/planr');
var users = sequelize.define('users', {
  user_id: {
    type: Sequelize.BIGINT
},
  username: {
    type: Sequelize.STRING
},
  email: {
    type: Sequelize.STRING
},
  password: {
    type: Sequelize.STRING
},
  join_date: {
    type: Sequelize.TIME
  }
}, {
  freezeTableName: true,
  timestamps: false,
});

users.sync().then(function () {
  return users.create({
    username: 'steve',
    email: 'steve@heyitssteve.net',
    password: 'monkey'
  });
});
// Create new store and send initial state to client
app.get('/*', (req,res) => {
    res.send('hello world!');
});

app.listen(port, () => {
    console.log('Planr runnning on localhost:%d!', port);
});
