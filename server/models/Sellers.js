module.exports = (sequelize, DataType) => {
    const Sellers = sequelize.define("Sellers", {

        email: {
            type: DataType.STRING,
            allowNull: false,
        },

        password: {
            type: DataType.STRING,
            allowNull: false,
        },

        confirm_password: {
            type: DataType.STRING,
            allowNull: false
        },
    });

    Sellers.associate = (models) => {
        Sellers.hasMany(models.AddItem, {
            onDelete: "cascade",
        })
    }
    
    return Sellers;
};