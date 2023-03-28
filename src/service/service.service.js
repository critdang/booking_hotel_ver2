const format = require("string-format");
const db = require("../models");
const AppError = require("../utils/errorHandle/appError");
const { objToArr } = require('../utils/convert/convert');
const MessageHelper = require('../utils/message');

const getServices = async (req) => {
  // const sort = objToArr(req.query);
  const foundServices = await db.Service.findAll({
    attributes: ['name', 'price', 'image'],
    raw: true
  });
  if (!foundServices) {
    throw new AppError(
      format(MessageHelper.getMessage('noFoundCategories')),
    );
  }
  return foundServices;
};

module.exports = {
  getServices,
};
