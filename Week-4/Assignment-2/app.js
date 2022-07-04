require('dotenv').config()
const port = process.env.PORT;

const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index", {pageTitle: "Use the ajax to retrieve the JSON data"});
});

app.listen(port, () => console.log(`Server started on port ${port}!`));