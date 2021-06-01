// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
// define PRODUCT columns
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Not sure if validate is correct**
    price: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      validate: {
        isDECIMAL: true,
      },
    },
    // Not sure if default value and or validate is correct**
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:10,
      validate: {
        isINTEGER: true,
      },
    },
    //Foreign key from Catgory - ID
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
