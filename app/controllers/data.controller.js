const express = require('express');
const service = require('../services/data.service');
const router = express.Router();

router.get('/', service.getAll);
router.get('/:id', service.getOne);
router.post('/', service.create);
router.put('/:id', service.edit);
router.delete('/:id', service.delete);

module.exports = router;
