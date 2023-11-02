const Data = require('../models/data.model');

module.exports.getAll = async (req, res) => {
    res.send({ lul: Data.findAll() });
};

module.exports.getOne = (req, res) => {
    return Data.findOne({
        where: {
            id: req.params.id,
        },
    });
};

module.exports.create = (req, res) => {
    console.log(req.body);
    res.send();
    // return Data.create({})
};

module.exports.edit = (req, res) => {};

module.exports.delete = (req, res) => {};
