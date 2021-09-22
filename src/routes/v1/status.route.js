const express = require('express');
const validate = require('../../middlewares/validate');
const statusValidation = require('../../validations/status.validation');
const statusController = require('../../controllers/status.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/', auth(), validate(statusValidation.createStatus), statusController.createStatus);
router.get('/:id', auth(), validate(statusValidation.getStatus), statusController.getStatus);
// router.put('/:id', validate(statusValidation.updateStatusById), statusController.updateById);

module.exports = router;
