const express = require("express");
const controller = require("./controller");
const schema = require("../../validators/todo");
const validate = require("../../validators/validate");
const todoRouter = express.Router();

todoRouter.get("/", controller.getTodos);

todoRouter.get("/:id", controller.getOneTodo);

todoRouter.post("/", validate(schema.post), controller.addTodo);

todoRouter.put("/:id", validate(schema.put), controller.updateTodo);

todoRouter.patch("/:id", controller.patchTodo);

todoRouter.delete("/:id", controller.deleteTodo);

module.exports = todoRouter;
