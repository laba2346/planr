import Express from 'express';
import { Provider, store } from 'redux';

const app = Express();
const port = 3000;

// Wait on api calls here

// Create new store and send initial state to client
app.get('/*', (req,res) => {
    res.send('hello world!');
});

app.listen(port, () => {
    console.log('Planr runnning on port %d!', port);
});
