'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'Admin',
      email: 'admin@email.com',
      password: bcrypt.hashSync('admin123', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Jhon',
      email: 'jhon@email.com',
      password: bcrypt.hashSync('password', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  }
};
