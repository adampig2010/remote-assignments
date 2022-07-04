require("dotenv").config();
const port = process.env.PORT;

const express = require("express");
const app = express();

const session = require('express-session')

app.set('view engine', 'ejs');
app.use(express.static('public'));

const mainRoutes = require('./routes/home');
const memberRoutes = require('./routes/member');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const logoutRoutes = require('./routes/logout');

app.use(session({
    secret: 'mySecret123123123432',
    name: 'user', // optional
    saveUninitialized: false,
    resave: true
}));

app.use('/home', mainRoutes);
app.use('/member', memberRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/logout', logoutRoutes);

app.get('/', (req, res) => {
    res.redirect('/home');
})

app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
});