'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    tableName: 'tasks'
  });
  task.associate = function(models) {
    task.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'user'
    });
  };
  return task;
};