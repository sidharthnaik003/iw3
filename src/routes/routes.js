const express = require('express')

const mongoose = require('mongoose')
const { createStudent} = require('../controller/studentcontroller')

const router = express.Router()

// router method
router.get('/',(req,res)=>{
    res.send('Router Method!!!')
})

// routes for student
router.post('/create' , createStudent)
module.exports = router;