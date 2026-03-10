const express = require("express");
const { createStudent, getStudentById, signupStudent, loginStudent } = require("../controllers/studentController");
const { authVerify } = require("../utils/auth");

const router=express.Router();


router.post("/create-student",createStudent );
router.get("/get-student/:id",authVerify,getStudentById)

router.post("/student-signup", signupStudent);
router.post("/student-login", loginStudent )



module.exports =router;