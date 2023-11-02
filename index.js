const express = require('express');
const cors = require('cors');
const dataController = require('./app/controllers/data.controller');
const db = require('./app/models/main');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('api/data', dataController);

db.sequelize
    .sync({ force: true })
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