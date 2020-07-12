const Cat = (sequelize, S) => {
  // defino el modelo
  const C = sequelize.define('cat', {
    id: {
      primaryKey: true,
      type: S.INTEGER,
    },
    nombre: {
      type: S.STRING,
    },
   
  });
  
  return C;
};


module.exports = Cat;

//con require se exporta en backend no con import