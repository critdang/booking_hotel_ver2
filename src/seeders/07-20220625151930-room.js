module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Room', [{
      name: 'VIP Room',
      detail: 'this is vip room',
      description: 'the best room in the hotel',
      price: 500,
      hot: true,
      active: true,
      adult_limit: 2,
      kid_limit: 1,
      status: 'available',
      categoryId: 2,
      branchId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Royal Room',
      detail: 'this is royal room',
      description: 'the second best room in the hotel',
      price: 400,
      hot: true,
      active: true,
      adult_limit: 2,
      kid_limit: 1,
      status: 'available',
      categoryId: 1,
      branchId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Luxury Room',
      detail: 'this is luxury room',
      description: 'the third best room in the hotel',
      price: 700,
      hot: true,
      active: true,
      adult_limit: 2,
      kid_limit: 1,
      status: 'available',
      categoryId: 2,
      branchId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Standard Room',
      detail: 'this is standard room',
      description: 'the fourth best room in the hotel',
      price: 300,
      hot: true,
      active: true,
      adult_limit: 2,
      kid_limit: 1,
      status: 'available',
      categoryId: 1,
      branchId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Business Room',
      detail: 'this is business room',
      description: 'the fifth best room in the hotel',
      price: 350,
      hot: true,
      active: true,
      adult_limit: 2,
      kid_limit: 1,
      status: 'available',
      categoryId: 4,
      branchId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};