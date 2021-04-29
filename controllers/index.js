const models = require('../database/models');

const agregarProducto = async (req, res) => {
  try {
    const producto =  await models.Producto.create(req.body);
    return res.status(201).json({
      producto
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const mostrarProductos = async (req, res) => {
  console.log('obteniendo productos');
  try {
    const productos = await models.Producto.findAll({
      include: []
    });
    return res.status(200).json({ productos });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  agregarProducto,
  mostrarProductos
};

