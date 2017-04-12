import DataTypes from 'sequelize';

var settings = {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.BIGINT,
        unique: true
    },
    color: {
        type: DataTypes.STRING,
    },
};

module.exports = settings;
