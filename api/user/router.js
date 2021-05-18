const express = require("express");
const schema = require("../../validators/user");
const validate = require("../../validators/validate");
const controller = require("./controller");

const userRouter = express.Router();

/***************** CRUD API *******************/

userRouter.get("/", controller.getUsers);
userRouter.post("/", validate(schema.post), controller.addUser);
userRouter.put("/:id", validate(schema.put), controller.updateUser);
userRouter.delete("/:id", controller.deleteUser);

/************************************************/

userRouter.get("/:id", controller.getOneUser);
userRouter.patch("/:id", controller.patchUser);

module.exports = userRouter;
