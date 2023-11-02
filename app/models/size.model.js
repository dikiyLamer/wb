module.exports = (sequelize, Sequelize) => {
    const Size = sequelize.define(
        'size',
        {
            techSize: {
                type: Sequelize.STRING,
            },
            skus: {
                type: Sequelize.ARRAY(Sequelize.STRING),
                allowNull: true,
            },
            chrtID: {
                type: Sequelize.INTEGER,
            },
        },
        { timestamps: false }
    );

    return Size;
};
