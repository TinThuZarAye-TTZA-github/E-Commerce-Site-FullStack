module.exports = (sequelize, DataType) => {
    const AddItem = sequelize.define("AddItem", {
        item_name: {
            type: DataType.STRING,
            allowNull: false,
        },

        item_price: {
            type: DataType.INTEGER,
            allowNull: false,
        },

        seller_name: {
            type: DataType.STRING,
            allowNull: false,
        },
        
        seller_address: {
            type: DataType.STRING,
            allowNull: false,
        },
    });

    return AddItem;
}