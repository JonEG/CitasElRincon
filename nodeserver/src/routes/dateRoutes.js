const express = require('express');
const router = express.Router();

const dateController = require('../controllers/dateController');


//GET ALL
router.get('/date/list', dateController.getAll);

//GET WITH ID
router.get('/date/:id',dateController.getId);

//OBTAIN DATES WITH PROF ID
router.post('/date/get-date', dateController.getDate);

//CREATE
router.post('/date', dateController.add);

//DELETE
router.delete('/date/:id', dateController.delete);

//UPDATE
router.put('/date',dateController.edit);

module.exports=router;