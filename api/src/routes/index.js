const { Router } = require('express');
const { conn, Product, Cat } = require("../models/index.js");
const { Op } = require('sequelize');
const router = Router();


router.get("/test", function (req, res) {
    res.sendStatus(200);
});


router.use('/products', require('./products'));





module.exports = router;
