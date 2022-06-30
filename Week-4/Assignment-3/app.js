const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const mainRoutes = require('./routes');
const memberRoutes = require('./routes/member');
const dbRoutes = require('./routes/db');

app.use('/', mainRoutes);
// app.use('/db', dbRoutes);
app.use('/member', memberRoutes);

app.listen(3000, () => {
    console.log("Server started on port 3000!");
});
