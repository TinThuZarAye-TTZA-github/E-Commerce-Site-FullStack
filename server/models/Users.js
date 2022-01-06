module.exports = (sequelize, DataType) => {
    const Users = sequelize.define("Users", {
        email: {
            type: DataType.STRING,
            allowNull: true,
        },
        password: {
            type: DataType.STRING,
            allowNull: true,
        },
        confirm_password: {
            type: DataType.STRING,
            allowNull: true,
        },
        googleId: {
            type: DataType.STRING,
            allowNull: true,
        }
    });


    return Users;
};