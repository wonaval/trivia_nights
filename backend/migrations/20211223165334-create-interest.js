'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('interests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userid: {
        type: Sequelize.INTEGER,
      },
      music: {
        type: Sequelize.BOOLEAN,
      },
      film: {
        type: Sequelize.BOOLEAN,
      },
      sports: {
        type: Sequelize.BOOLEAN,
      },
      general: {
        type: Sequelize.BOOLEAN,
      },
      popular: {
        type: Sequelize.BOOLEAN,
      },
      history: {
        type: Sequelize.BOOLEAN,
      },
      science: {
        type: Sequelize.BOOLEAN,
      },
      current: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('interests');
  },
};
