const express = require('express');
const validate = require('../../middlewares/validate');
const projectValidation = require('../../validations/project.validation');
const projectController = require('../../controllers/project.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/', auth(), validate(projectValidation.createProject), projectController.createProject);
router.get('/', auth(), validate(projectValidation.getProjects), projectController.getProjects);
router.get('/:id', auth(), validate(projectValidation.getProject), projectController.getProject);
// router.put('/:id', validate(projectValidation.updateProjectById), projectController.updateById);

module.exports = router;
