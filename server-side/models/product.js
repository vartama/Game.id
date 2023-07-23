'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Image, { foreignKey: 'productId' })
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' })
      Product.belongsTo(models.User, { foreignKey: 'authorId' })
      // define association here
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Title Game is required' },
        notEmpty: { msg: 'Title Game is required' }
      }
    },
    slug: DataTypes.STRING,
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Description game is required' },
        notEmpty: { msg: 'Description game is required' }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Price is required' },
        notNull: { msg: 'Price is required' },
        validatePrice(price) {
          if (price < 50000) {
            throw new Error('Price minimum 50.000')
          }
        }
      }
    },
    mainImg: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Image link is required' },
        notEmpty: { msg: 'Image link is required' }
      }
    },
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};