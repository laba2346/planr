import DataTypes from 'sequelize';

var users = {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    join_date: {
        type: DataTypes.DATE
    },
    color: {
        type: DataTypes.STRING
    },
}
module.exports = users;
