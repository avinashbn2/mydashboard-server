const express = require('express');
const validate = require('../../middlewares/validate');
const taskValidation = require('../../validations/task.validation');
const taskController = require('../../controllers/task.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/', auth(), validate(taskValidation.createTask), taskController.createTask);
router.get('/:id', auth(), validate(taskValidation.getTask), taskController.getTask);
router.put('/:id', auth(), validate(taskValidation.updateTask), taskController.updateTask);
// router.put('/:id', validate(taskValidation.updateTaskById), taskController.updateById);

module.exports = router;
