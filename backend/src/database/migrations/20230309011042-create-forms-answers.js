'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('forms_answers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('forms_answers')
  }
};
