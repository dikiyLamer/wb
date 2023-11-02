const Card = require('../models/main').card;
const Size = require('../models/main').size;


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

module.exports.create = async (req, res) => {
    console.log(req.body.data);


   


    for (let card of req.body.data.cards) {
        await Card.create(card, {include: [Size]})

    }


    res.send(req.body).json()
};

module.exports.edit = (req, res) => { };

module.exports.delete = (req, res) => { };
