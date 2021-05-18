const { boolean } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    checked: {
      type: Boolean,
    },
    task: {
      type: String,
    },
  },
  { timestamps: true } // createdAt et updatedAt
);

const todo = mongoose.model("todo", todoSchema);

module.exports = todo;
