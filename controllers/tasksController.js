const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({})
    res.status(200).json({ allTasks })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    res.status(200).json({ task })
    if (!task) {
      return res
        .status(404)
        .json({ message: `No tasks with that id: ${taskID}` })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
const updateTask = (req, res) => {
  res.json(req.body)
}
const deleteTask = (req, res) => {
  res.send('delete task')
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
}
