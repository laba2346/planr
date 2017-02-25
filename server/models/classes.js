var classes = sequelize.define('classes', {
    id: {
        type: Sequelize.BIGINT
    },
    owner_id: {
        type: Sequelize.BIGINT
    },
    class_name: {
        type: Sequelize.STRING
    },
    class_info: {
        type: Sequelize.STRING
    },
    class_times: {
        type: Sequelize.STRING
    },
}, {
  freezeTableName: true,
  timestamps: false
});

export default classes;
