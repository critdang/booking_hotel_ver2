module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoomDate', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      roomId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Room',
          key: 'id',
          as: 'roomId',
        },
      },
      from: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      to: {
        allowNull: false,
        type: Sequelize.DATE,
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
  async down(queryInterface) {
    await queryInterface.dropTable('RoomDate');
  },
};
