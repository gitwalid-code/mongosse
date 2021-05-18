const Joi = require("joi");

const schema = {
  post: {
    task: Joi.string().required(),
  },
  put: {
    task: Joi.string().required(),
  },
};

module.exports = schema;
