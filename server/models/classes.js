var classes = sequelize.define('classes', {
    class_id: {
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
  freezeTableName: true
});

export default classes;
