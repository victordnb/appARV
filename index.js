'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3900;


//mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
const url = 'mongodb+srv://appVR:Amigos13@cluster0.1piwo.mongodb.net/Cluster0?retryWrites=true&w=majority';
const options = { useNewUrlParser: true};

mongoose.connect(url, options).then(() => {
    console.log('Connections succeful');

    //crear servidor:
    app.listen(port, () => {
        console.log('Server running on port: ', port);
    });

}).catch((err) => {
    console.log('Connection failed', err);
});