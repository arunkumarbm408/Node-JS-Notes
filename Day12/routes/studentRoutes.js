const express = require("express");
const { createStudent } = require("../controllers/studentController");

const router=express.Router();


router.post("/create-student",createStudent );



module.exports =router;