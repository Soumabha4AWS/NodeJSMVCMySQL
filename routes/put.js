const express = require('express');
const router = express.Router();




const courseController = require('../controllers/courseController');

router.put('/:id', courseController.updateCourseById); 


module.exports = router;