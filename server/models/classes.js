import DataTypes from 'sequelize';

var classes = {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.BIGINT,
    },
    class_name: {
        type: DataTypes.STRING,
    },
    class_info: {
        type: DataTypes.STRING,
    },
    class_times: {
        type: DataTypes.STRING,
    },
    class_color: {
        type: DataTypes.STRING,
    }
};

module.exports = classes;
