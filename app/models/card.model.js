module.exports = (sequelize, Sequelize) => {
    const Card = sequelize.define(
        'card',
        {

            updateAt: {
                type: Sequelize.STRING,
            },
            vendorCode: {
                type: Sequelize.STRING,
            },
            brand: {
                type: Sequelize.STRING,
            },
            object: {
                type: Sequelize.STRING,
            },
            nmID: {
                type: Sequelize.INTEGER,
            },
            imtID: {
                type: Sequelize.INTEGER,
            },
            objectID: {
                type: Sequelize.INTEGER,
            },
            isProhibited: {
                type: Sequelize.BOOLEAN,
            },
            mediaFiles: {
                type: Sequelize.ARRAY(Sequelize.STRING),
                allowNull: false,
                defaultValue: [],
            },
            tags: {
                type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.STRING)),
                allowNull: false,
                defaultValue: [],
            },
            colors: {
                type: Sequelize.ARRAY(Sequelize.STRING),
                allowNull: false,
                defaultValue: [],
            },
        },
        { timestamps: false }
    );

    return Card;
};
