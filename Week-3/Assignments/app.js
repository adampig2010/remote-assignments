const express = require('express');
const app = express();
const port = 3000;

const mainRoutes = require('./routes');
const dataRoutes = require('./routes/data');
const nameRoutes = require('./routes/myName');
const trackRoutes = require('./routes/trackName');

app.set('view engine', 'pug')

app.use('/', mainRoutes);
app.use('/data', dataRoutes);
app.use('/myName', nameRoutes);
app.use('/trackName', trackRoutes);

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example router listening on port ${port}`)
})