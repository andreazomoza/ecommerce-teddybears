const Product = (sequelize, S) => {
  // defino el modelo
  const Product = sequelize.define('product', {
    nombre: {
      type: S.STRING,
    },  
    descripcion: {
      type: S.STRING,
    },
    precio: {
      type: S.INTEGER,
      
    },
    img: {
      type: S.STRING,
      
    },
   
  });
  
  return Product;
};


module.exports = Product;

//con require se exporta en backend no con import