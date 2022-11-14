
const express = require('express');
const router = express.Router();




const courseController = require('../controllers/courseController');



router.get('/welcomeCourses', courseController.welcomeCourses);
router.get('/viewAllCourses', courseController.viewAllCourses);
router.get('/addCourses', courseController.addCourseForm);





module.exports = router;
