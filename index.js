require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/weather.js'));

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected!"))
.catch((err) => console.error("MongoDB error:", err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});