const { Router } = require('express');
const { conn, Product, Cat } = require("../models/index.js");
const { Op } = require('sequelize');

const router = Router();


//Test toni
router.get("/test", function (req, res) {
    res.sendStatus(200);
});

//Muestra todos los productos para que se pueda conectar el frontend y probar

router.get("/allprod", function (req, res) {
    productid(req.params)
    .then((result) => {
      res.send(result);
    })
    .then(console.log(res))
  });
  
  function productid(id) {
    const producto = Product.findAll({
      where: {},
      
    });
    
    return Promise.all([producto]);
}
  
//ruta pern
router.get("/pern", (req, res)=>{
    let nombreProd = req.query.nombre;
    console.log(nombreProd);
     Product.findAll({
         where:{},
     }).then(response =>{
         res.send(response)
     })
     
 });



//crear ruta que retorne productos segun keyword de busqueda

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
