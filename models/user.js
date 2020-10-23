'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    tableName:'users'
  });
  user.associate = function(models) {
    user.hasMany(models.tasks, {
      foreignKey: 'user_id',
      as: 'tasks'
    });
  };
  return user;
};