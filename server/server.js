import Express from 'express';
import { Provider, store } from 'redux';
import { Sequelize } from 'sequelize';

const app = Express();
const port = 3000;

// Wait on api calls here
var sequelize = new Sequelize('mysql://localhost:3306/planr');


// Create new store and send initial state to client
app.get('/*', (req,res) => {
    res.send('hello world!');
});

app.listen(port, () => {
    console.log('Planr runnning on localhost:%d!', port);
});
