const express = require('express');
const cors = require('cors');
const cardController = require('./app/controllers/card.controller');
const sizeController = require('./app/controllers/size.controller');

const db = require('./app/models/main');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/card', cardController);
app.use('/api/size', sizeController);

db.sequelize
    .sync()
    .then(() => {
        console.log('Synced db.');
    })
    .catch((err) => {
        console.log('Failed to sync db: ' + err.message);
    });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
