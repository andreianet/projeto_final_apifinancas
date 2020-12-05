const express = require('express')
const router = express.Router();
const controller = require('../controllers/categoryControllers')

router.get('/allcategory', controller.getAllCategory)
router.post('/create', controller.addCategory)
router.delete('/delete/:id', controller.delCategory)


module.exports = router