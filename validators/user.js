const Joi = require("joi");

const schema = {
  post: {
    nom: Joi.string().required().max(10),
    prenom: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
  },
  put: {
    nom: Joi.string().max(10),
    prenom: Joi.string(),
    phone: Joi.string(),
    email: Joi.string().email(),
  },
};

module.exports = schema;
