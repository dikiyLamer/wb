const Card = require('../models/main').card;
const Size = require('../models/main').size;

module.exports.getAll = async (req, res) => {
    try {
        const cards = await Card.findAll();
        res.json(cards);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

module.exports.getOne = async (req, res) => {
    try {
        const card = await Card.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.json(card);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

module.exports.create = async (req, res) => {
    try {
        for (let card of req.body.data.cards) {
            await Card.create(card, { include: [Size] });
        }
        res.json(req.body);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

module.exports.edit = async (req, res) => {
    try {
        console.log(req.body.card);
        await Card.update(req.body.card, {
            where: { id: req.params.id },
        });
        res.json(req.body.card);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

module.exports.delete = async (req, res) => {
    try {
        await Card.destroy({
            where: { id: req.params.id },
        });
        res.send(200);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};
