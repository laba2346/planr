module.exports = function(sequelize, DataTypes){
    var classes = sequelize.define('classes', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true
        },
        owner_id: {
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
    }, {
      freezeTableName: true,
      timestamps: false
    });
    return classes;
};
