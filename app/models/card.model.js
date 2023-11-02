module.exports = (sequelize, Sequelize) => {
    const Card = sequelize.define(
        'card',
        {
            mediaFiles: {
                type: Sequelize.ARRAY(Sequelize.STRING),
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
