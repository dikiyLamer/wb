module.exports = (sequelize, Sequelize) => {
    const Size = sequelize.define(
        'size',
        {
            techSize: {
                type: Sequelize.STRING,
            },
            skus: {
                type: Sequelize.ARRAY(Sequelize.STRING),
                allowNull: false,
                defaultValue: [],
            },
            chrtID: {
                type: Sequelize.INTEGER,
            },
        },
        { timestamps: false }
    );

    return Size;
};
