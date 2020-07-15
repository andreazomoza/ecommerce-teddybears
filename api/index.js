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
    nombre:'Baby Yoda',
    descripcion:'Baby Jedi',
    precio:'1050',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTKZO3iH3PrfLFK6URGM3WXgayvAO397I7og&usqp=CAU',
    
  });
  
  Product.create({
    nombre:'Bartolito',
    descripcion:'Bartolito La granja de Zenon',
    precio:'900',
    img: 'https://images-na.ssl-images-amazon.com/images/I/41vV6psPTqL._SX500_SY500_CR,0,0,500,500_.jpg',
  });
  
  Product.create({
    nombre:'Groot',
    descripcion:'Mini Groot de Guardianes de la galaxia',
    precio:'2050',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUwsjUbLZ00mb34b4rgW2MemBSjD6S7lC06g&usqp=CAU',
  });

  Product.create({ 
    nombre:'Ewok',
    descripcion:'Ewok Star Wars',
    precio:'5050',
    img: 'https://i.pinimg.com/originals/14/54/06/14540669d85d17fbedda71b622a3262a.jpg',
  });

  Product.create({
    nombre:'Maul',
    descripcion:'Maul Star Wars',
    precio:'950',
    img: 'https://redtri.com/wp-content/uploads/2019/09/unnamed-2-3.jpg?w=1024',
  });

  Product.create({
    nombre:'Trooper',
    descripcion:'trooper star wars',
    precio:'750',
    img: 'https://i.ebayimg.com/images/g/DkkAAOSwEDtbe4K9/s-l300.jpg',
  });

  Product.create({
    nombre:'Lotso Bueno',
    descripcion:'Lotso Bueno Toy Story',
    precio:'3250',
    img: 'https://vignette.wikia.nocookie.net/disney/images/6/6d/Lotso.png/revision/latest/top-crop/width/360/height/450?cb=20130319100242&path-prefix=es',
  });
  
    Product.create({
    nombre:'Sailor Moon',
    descripcion:'Sailor moon Sailor moon Sailor moon Sailor moon',
    precio:'3750',
    img: 'https://i.ebayimg.com/images/g/TscAAOSwJ9Vd3s1G/s-l600.jpg',
  });

  Product.create({
    nombre:'Capitan America',
    descripcion:'Capitan America Capitan America Capitan America',
    precio:'1450',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5SIw0SaLLt-OCbNgG4Hl8gF8WiwEvMmPzCw&usqp=CAU',
  });

  Product.create({
    nombre:'Iron Man',
    descripcion:'Iron Man Iron Man Iron Man Iron Man',
    precio:'850',
    img: 'https://i.pinimg.com/originals/d6/65/f4/d665f4cc438ec84e3b9f7d9735972055.jpg',
  });

  Product.create({
    nombre:'Chewbacca',
    descripcion:'Chewbacca',
    precio:'850',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81zlaS0EHVL._AC_SY679_.jpg',
  });
  
  Product.create({
    nombre:'Jar Jar',
    descripcion:'Jar Jar Star Wars',
    precio:'850',
    img: 'https://ae01.alicdn.com/kf/HTB1fJnvU3HqK1RjSZFEq6AGMXXaX/Rare-Star-Wars-Jar-Jar-Binks-Plush-Toy-Doll-28cm-Stuffed-Kids-Toys-for-Children-Boys.jpg',
    
  });
  
});
