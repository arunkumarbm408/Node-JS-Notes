const express = require("express");
const { createStudent, getStudentById } = require("../controllers/studentController");

const router=express.Router();


router.post("/create-student",createStudent );
router.get("/get-student/:id",getStudentById)



module.exports =router;