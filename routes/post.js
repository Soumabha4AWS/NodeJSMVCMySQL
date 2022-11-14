const express = require('express');
const router = express.Router();


const courseController = require('../controllers/courseController');

router.post('/',courseController.addAllCourses);

router.post('/editCourses', courseController.editCourseForm);
router.post('/removeCourses', courseController.removeCourses);

router.post('/confirmFormForPost',courseController.confirmCourseFormForPost);
router.post('/confirmFormForPut',courseController.confirmCourseFormForPut);
router.post('/confirmFormForDelete',courseController.confirmCourseFormForDelete);

router.post('/updateCourses', courseController.updateCourseByIdViaPost); 
router.post('/deleteCourses', courseController.deleteCourseByIdViaPost); 



module.exports = router;