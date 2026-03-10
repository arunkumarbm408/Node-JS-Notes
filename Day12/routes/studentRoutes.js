const express = require("express");
const { createStudent, getStudentById, signupStudent } = require("../controllers/studentController");

const router=express.Router();


router.post("/create-student",createStudent );
router.get("/get-student/:id",getStudentById)

router.post("/student-signup", signupStudent)



module.exports =router;