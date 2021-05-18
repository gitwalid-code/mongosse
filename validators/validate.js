const Joi = require("Joi");
const validate = (schema) => {
  return (req, res, next) => {
    const template = Joi.object(schema);
    const result = template.validate(req.body);
    if (result.error) {
      const message = result.error.details.map((err) => err.message);
      return res.status(400).send({
        message,
      });
    }
    next();
  };
};

module.exports = validate;
