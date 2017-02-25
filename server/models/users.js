module.exports = function(sequelize, DataTypes){
    var users = sequelize.define('users', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
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
            type: DataTypes.TIME
        },
    }, {
      freezeTableName: true,
      timestamps: false
    });
    return users;
};
