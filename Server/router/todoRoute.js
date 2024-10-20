const express = require("express")
const router = express.Router();

const {getTodo, createTodo, updateTodo, deleteTodo}=require('../controller/todoController')

//create a todo
router.post("/todo",createTodo)
//get all todo
router.get("/todo", getTodo);
//update a todo
router.put("/todo/:id",updateTodo)
//delete a todo
router.delete("/todo/:id",deleteTodo)

module.exports = router;