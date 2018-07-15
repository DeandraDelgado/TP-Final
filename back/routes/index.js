var express = require('express');
var router = express.Router();
let homecontroller = require('../Controllers/homecontroller')

/* GET home page. */
router.get('/busqueda/:id', homecontroller.buscarProductos) 

module.exports = router;
