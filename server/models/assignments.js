var assignments = sequelize.define('assignments', {
  id: {
    type: Sequelize.BIGINT
  }
  class_id: {
    type: Sequelize.BIGINT
  }
  assignment_name: {
    type: Sequelize.STRING
  }
  assignment_description: {
    type: Sequelize.STRING
  }
  assignment_due {
    type: Sequelize.DATE
  }
}, {
  freezeTableName: true,
  timestamps: false
});

export default assignments;
