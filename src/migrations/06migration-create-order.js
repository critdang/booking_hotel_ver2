module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('Pending', 'Completed', 'Cancel'),
        defaultValue: 'Pending',
      },
      adminAction: {
        type: Sequelize.ENUM('Cancel', 'Accept', 'Pending'),
        defaultValue: 'Pending',
      },
      paymentMethod: {
        type: Sequelize.ENUM('Pending', 'Visa', 'Cash', 'PayPal'),
        defaultValue: 'Pending',
      },
      paymentDate: {
        type: Sequelize.DATE,
      },
      total: {
        type: Sequelize.FLOAT,
      },
      checkInDate: {
        type: Sequelize.DATE,
      },
      userId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'User',
          key: 'id',
        },
      },
      guestId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Guest',
          key: 'id',
        },
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
    await queryInterface.dropTable('Order');
  },
};
