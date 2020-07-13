const { Router } = require('express');
const { conn, Product, Cat } = require("../models/index.js");
const { Op } = require('sequelize');
const router = Router();



router.get("/test", function (req, res) {
    res.sendStatus(200);
});



router.get("/traertodo", (req, res)=>{
    let nombreProd = req.query.nombre;
    console.log(nombreProd);
     Product.findAll({
         where:{},
     }).then(response =>{
         res.send(response)
     })
     
});



//productos segun keyword de busqueda

router.get("/search", (req, res)=>{
   let nombreProd = req.query.nombre;
   console.log(nombreProd);
    Product.findAll({
        where:{
            nombre:{
                [Op.iLike]:`%${nombreProd}%`
                
            }
           
        }
    }).then(response =>{
        res.send(response)
    })
    
});






module.exports = router;
