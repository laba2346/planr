import DataTypes from 'sequelize';

var classes = {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true
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
};

module.exports = classes;
