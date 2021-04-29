const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/productos', controllers.agregarProducto);
router.get('/productos', controllers.mostrarProductos);

module.exports = router;
