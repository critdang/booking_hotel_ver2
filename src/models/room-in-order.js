const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RoomInOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Room, {
        foreignKey: 'roomId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      this.belongsTo(models.Order, {
        foreignKey: 'orderId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  RoomInOrder.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    roomId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Room',
        key: 'id',
      },
    },
    orderId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Order',
        key: 'id',
      },
    },
    from: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    to: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    adults: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    kids: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'RoomInOrder',
    freezeTableName: true,
  });
  return RoomInOrder;
};
