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

router.post('/agregarprod', (req, res, next) => {
    Product.create(req.body)
      .then(product =>
        res.status(201).json(product))
      .catch(next);
})


router.post('/new', (req, res) => {
    const {nombre, descripcion, precio, img} = req.body;
    
    Product.create({
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      img: img,
    })
    .then(newProduct => {
        res.send(newProduct);
    }) 
    .catch(err => res.send(err.message));
});

module.exports = router;