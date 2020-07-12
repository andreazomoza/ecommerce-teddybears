//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require('./src/app.js');
const { conn, Cat, Product} = require('./src/models/index.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  
  server.listen(3000, () => {
    console.log('%s listening at 3000'); // eslint-disable-line no-console
   
  });
  
  Cat.create({
    id:'1',
    nombre:'JUGUETES',
  });

  Cat.create({
    id:'2',
    nombre:'REGALO',
  });

  Cat.create({
    id:'3',
    nombre:'IT',
  });
  Product.create({
    id:'1',
    nombre:'Baby Yoda',
    descripcion:'Baby Jedi',
    precio:'1050',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTKZO3iH3PrfLFK6URGM3WXgayvAO397I7og&usqp=CAU',
    
  });

Product.create({
    id:'2',
    nombre:'Groot',
    descripcion:'Mini Groot de Guardianes de la galaxia',
    precio:'1050',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUwsjUbLZ00mb34b4rgW2MemBSjD6S7lC06g&usqp=CAU',
    
  });
  

  
});
