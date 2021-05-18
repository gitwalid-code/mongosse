// const { v4: uuidv4 } = require("uuid");
const { find } = require("../../models/todo");
const Todo = require("../../models/todo");

// let todos = [
//   {
//     id: 5,
//     task: "todo 1",
//     checked: false,
//   },
//   {
//     id: 12,
//     task: "todo 2",
//     checked: true,
//   },
// ];

const getTodos = async (req, res) => {
  const { checked, task } = req.query;
  const filters = {};
  const options = { soirt: { createdAT: 1 } };
  if (checked) filters.checked = checked;
  if (task) filters.task = task;
  const todos = await Todo.find(filters, {}, options);
  res.status(200).send(todos);
};

const addTodo = async (req, res) => {
  // const task = req.body.task
  const { task } = req.body;
  const todo = new Todo({
    task, //task: task
    checked: false,
  });
  await todo.save();

  res.status(201).send(todo);
};

const updateTodo = async (req, res) => {
  try {
    const { task } = req.body;
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (todo == undefined) {
      return res.status(400).send({
        message: "todo not existe",
      });
    }
    const newTodo = await Todo.findByIdAndUpdate(id, { task }, { new: true });
    res.status(200).send(newTodo);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error interne",
    });
  }
};

const patchTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (todo == undefined) {
      return res.status(400).send({
        message: "todo not existe",
      });
    }
    const patchTodo = await Todo.findByIdAndUpdate(
      id,
      {
        checked: !todo.checked,
      },
      { new: true }
    );
    res.status(200).send(patchTodo);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error interne",
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    // const index = todos.findIndex((elem) => elem.id == id);
    // if (index == -1) {
    //   return res.status(400).send({
    //     message: "todo doesn't exist",
    //   });
    // }
    // todos.splice(index, 1);
    const todo = await Todo.findById(id);
    if (todo == undefined) {
      return res.status(400).send({
        message: "todo doesn't exist",
      });
    }
    const remouveTodo = await Todo.findByIdAndDelete(id);
    res.status(200).send(remouveTodo);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error interne",
    });
  }
};

const getOneTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) {
    res.status(400).send({
      message: "todo not found",
    });
  }
  res.status(200).send(todo);
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  patchTodo,
  deleteTodo,
  getOneTodo,
};
