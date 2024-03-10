const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const dotenv = require("dotenv").config()
const categoryRoutes = require('./routes/categoryRoutes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './server/views');
app.use('/categories', categoryRoutes);

const db = require("./config/db");
app.locals.db = db;

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });