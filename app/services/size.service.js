const Size = require('../models/main').size;

module.exports.getAll = async (req, res) => {
    try {
        const sizes = await Size.findAll();
        res.json(sizes);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

module.exports.getOne = async (req, res) => {
    try {
        const size = await Size.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.json(size);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

module.exports.create = async (req, res) => {
    try {
        for (let size of req.body.sizes) {
            await Size.create(size);
        }
        res.json(req.body.sizes);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

module.exports.edit = async (req, res) => {
    try {
        console.log(req.body.size);
        await Size.update(req.body.size, {
            where: { id: req.params.id },
        });
        res.json(req.body.size);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};

module.exports.delete = async (req, res) => {
    try {
        await Size.destroy({
            where: { id: req.params.id },
        });
        res.send(200);
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
};
