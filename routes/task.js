const express = require('express');
const { body } = require('express-validator/check');

const taskController = require('../controllers/task');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /task/tasks
router.get('/tasks', isAuth, taskController.getTasks);

// POST /task/add
router.post(
  '/add',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  taskController.createTask
);

router.get('/add/:taskId', isAuth, taskController.getTask);

router.put(
  '/add/:taskId',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  taskController.updateTask
);

router.delete('/add/:taskId', isAuth, taskController.deleteTask);

module.exports = router;
