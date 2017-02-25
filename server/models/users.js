var users = sequelize.define('user', {
  id: {
    type: Sequelize.BIGINT
},
  username: {
    type: Sequelize.STRING
},
  email: {
    type: Sequelize.STRING
},
  password: {
    type: Sequelize.STRING
},
  join_date: {
    type: Sequelize.TIME
  }
}, {
  freezeTableName: true
});

export default users;
