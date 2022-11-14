const axios = require('axios');
const path = require('path');

let url = "http://localhost:8084/SpringBootRestApiMySql";
let data = "";
let config = "";


exports.welcomeCourses = (req, res) => { 
	res.sendFile(path.join(__dirname,'..','views','welcome-courses.html'));
}

exports.viewAllCourses = (req, res) => {
	config = {
		method: 'get',
		url: `${url}/get/all`
	};

	axios(config).then(resp => {
        // res.json(resp.data);
		// res.sendFile(path.join(__dirname,'..','views','all-courses.html'));
		console.log(resp.data);
		let finaldata = resp.data.sort((a, b) => parseInt(a.id) - parseInt(b.id));		 
		res.render('all-courses',{ headerValue : 'List of all courses avialable', data : finaldata});
	});
};



exports.addAllCourses = (req, res) => {	
	data = {
		"id": `${req.body.id}`,
		"courseName": `${req.body.courseName}`,
		"rating": `${req.body.rating}`,
		"price": `${req.body.price}`,
		"trainerName": `${req.body.trainerName}`,
		"numberOfDays": `${req.body.numberOfDays}`
	};
	config = {
		method: 'post',
		url: `${url}/post`,
		data
	};
	axios(config).then(resp => {
		//res.json(resp.data);
		// res.render('all-courses',{ headerValue : 'List of all courses avialable', data : resp.data});	
		res.redirect('/NodeJSMVCMySql/get/viewAllCourses');	
	}
	);
};


exports.updateCourseById = (req, res) => {
	data = {
		id: `${req.body.id}`,
		courseName: `${req.body.courseName}`,
		rating: `${req.body.rating}`,
		price: `${req.body.price}`,
		trainerName: `${req.body.trainerName}`,
		numberOfDays: `${req.body.numberOfDays}`
	};
	config = {
		method: 'put',
		url: `${url}/put/${req.params.id}`,
		data
	};
	axios(config).then(resp => {
		res.json(resp.data);
	});
};



exports.updateCourseByIdViaPost = (req, res) => {
	data = {
		id: `${req.body.id}`,
		courseName: `${req.body.courseName}`,
		rating: `${req.body.rating}`,
		price: `${req.body.price}`,
		trainerName: `${req.body.trainerName}`,
		numberOfDays: `${req.body.numberOfDays}`
	};
	config = {
		method: 'put',
		url: `${url}/put/${req.body.id}`,
		data
	};
	axios(config).then(resp => {
		// res.json(resp.data);
		res.redirect('/NodeJSMVCMySql/get/viewAllCourses');
	});
};

exports.deleteCourseById = (req, res) => {
	config = {
		method: 'delete',
		url: `${url}/delete/${req.params.id}`
	};
	axios(config).then(resp => {
		res.json(resp.data);
	});
};

exports.deleteCourseByIdViaPost = (req, res) => {
	config = {
		method: 'delete',
		url: `${url}/delete/${req.body.id}`
	};
	axios(config).then(resp => {
		// res.json(resp.data);
		res.redirect('/NodeJSMVCMySql/get/viewAllCourses');
	});
};

exports.addCourseForm = (req, res) => {		
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-courses.html'));
	res.render('add-courses');
};


exports.editCourseForm = (req, res) => {		
	console.log(req.body);
	// res.sendFile(path.join(__dirname, '..', 'views', 'edit-courses.html'));
	
	res.render('edit-courses', 
								{ 
									id : req.body.id,
									courseName : req.body.courseName,
									rating : req.body.rating,
									price : req.body.price,
									trainerName : req.body.trainerName,
									numberOfDays : req.body.numberOfDays
								});
								
};



exports.removeCourses = (req, res) => {		
	console.log(req.body);
	// res.sendFile(path.join(__dirname, '..', 'views', 'delete-courses.html'));
	
	res.render('remove-courses', 
								{ 
									id : req.body.id,
									courseName : req.body.courseName,
									rating : req.body.rating,
									price : req.body.price,
									trainerName : req.body.trainerName,
									numberOfDays : req.body.numberOfDays
								});
								
};

exports.confirmCourseFormForPost = (req, res) => {		
	console.log(req.body);
	// res.sendFile(path.join(__dirname, '..', 'views', 'confirm-courses-for-post.html'));
	res.render('confirm-courses', 
								{ 									
									urlComponent : '/NodeJSMVCMySql/post',
									headerValue : 'Form to confirm courses before adding it',
									paragraphValue : 'Confirm the Courses that is going to be added',									
									titleValue : 'Confirm Courses that is going to be added',	
									id : req.body.id,
									courseName : req.body.courseName,
									rating : req.body.rating,
									price : req.body.price,
									trainerName : req.body.trainerName,
									numberOfDays : req.body.numberOfDays
								});
};



exports.confirmCourseFormForPut = (req, res) => {		
	console.log(req.body);
	// res.sendFile(path.join(__dirname, '..', 'views', 'confirm-courses-for-put.html'));
	res.render('confirm-courses', 
								{ 
									urlComponent : '/NodeJSMVCMySql/post/updateCourses',
									headerValue : 'Form to confirm courses before updating it',
									paragraphValue : 'Confirm the Courses that is going to be updated',									
									titleValue : 'Confirm Courses that is going to be updated',	
									id : req.body.id,
									courseName : req.body.courseName,
									rating : req.body.rating,
									price : req.body.price,
									trainerName : req.body.trainerName,
									numberOfDays : req.body.numberOfDays
								});
};



exports.confirmCourseFormForDelete = (req, res) => {		
	console.log(req.body);
	// res.sendFile(path.join(__dirname, '..', 'views', 'confirm-courses-for-delete.html'));
	res.render('confirm-courses', 
								{ 
									urlComponent : '/NodeJSMVCMySql/post/deleteCourses',
									headerValue : 'Form to confirm courses before deleting it',
									paragraphValue : 'Confirm the Courses that is going to be deleted',									
									titleValue : 'Confirm Courses that is going to be deleted',	
									id : req.body.id,
									courseName : req.body.courseName,
									rating : req.body.rating,
									price : req.body.price,
									trainerName : req.body.trainerName,
									numberOfDays : req.body.numberOfDays
								});
};