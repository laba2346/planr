module.exports = function(sequelize, DataTypes){
    var assignments = sequelize.define('assignments', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
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
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return assignments
}
