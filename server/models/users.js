module.exports = function(sequelize, DataTypes){
    var users = sequelize.define('users', {
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
    }, {
      freezeTableName: true,
      timestamps: false
    });
    return users;
};
