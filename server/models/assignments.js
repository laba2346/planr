import DataTypes from 'sequelize';

var assignments = {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
    },
    owner_id:{
        type: DataTypes.BIGINT,
    },
    class_id: {
        type: DataTypes.BIGINT
    },
    assignment_name: {
        type: DataTypes.STRING
    },
    assignment_description: {
        type: DataTypes.STRING
    },
    assignment_due: {
        type: DataTypes.DATE
    },
};

module.exports = assignments;
