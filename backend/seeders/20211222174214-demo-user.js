'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',
    [
      {
        first: 'John',
        last: 'Doe',
        email: 'test@test.com',
        password: '123',
        signup: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: 'Will',
        last: 'Naval',
        email: 'will@test.com',
        password: '123',
        signup: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: 'Cullen',
        last: 'Reddy',
        email: 'cullen@test.com',
        password: '123',
        signup: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: 'Marco',
        last: 'Colucci',
        email: 'marco@test.com',
        password: '123',
        signup: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: 'Jennifer',
        last: 'Lai',
        email: 'jennie@test.com',
        password: '123',
        signup: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: 'Jeffrey',
        last: 'Tse',
        email: 'heff@test.com',
        password: '123',
        signup: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  )
},
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
