'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = [];
    for(let i=1; i<=10; i++){
      const date = new Date();
      users.push({ username: `user${i}`,created_at:date,updated_at:date});
    }
    return queryInterface.bulkInsert('users',users, {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('users',null,{});
  }
};
