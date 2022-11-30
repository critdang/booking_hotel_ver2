module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Order', [{
      userId: 3,
      code: 'u8jbo',
      date: new Date(),
      status: 'Pending',
      adminAction: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 1732.5,
      checkInDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      guestId: 1,
      code: '4vly8',
      date: new Date(),
      status: 'Pending',
      adminAction: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 420,
      checkInDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      code: 'wssm8',
      date: new Date(),
      status: 'Pending',
      adminAction: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 420,
      checkInDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      guestId: 3,
      userId: 2,
      code: 'sxya7',
      date: new Date(),
      status: 'Pending',
      adminAction: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 1785,
      checkInDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 5,
      guestId: 4,
      code: 'ulapk',
      date: new Date(),
      status: 'Pending',
      adminAction: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 1260,
      checkInDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 1,
      code: 'qihpl',
      date: new Date(),
      status: 'Pending',
      adminAction: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 367.5,
      checkInDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 2,
      code: 'j3h6r',
      date: new Date(),
      status: 'Pending',
      adminAction: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 367.5,
      checkInDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 4,
      code: 'j3h6r',
      date: new Date(),
      status: 'Pending',
      adminAction: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 2730,
      checkInDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 5,
      code: 'j3h6r',
      date: new Date(),
      status: 'Pending',
      adminAction: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 1770,
      checkInDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 6,
      code: 'j3h6r',
      date: new Date(),
      status: 'Pending',
      adminAction: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 1320,
      checkInDate: new Date(),
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
  }
};
