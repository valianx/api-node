const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const productosController = require('../controllers/productosControllers')
const authControllers = require('../controllers/authControllers')


// Obtener productos
router.get('/',productosController.getAll);

// Obtener producto
router.get('/:id', productosController.get);

// Eliminar producto
router.delete('/:id', productosController.eliminar);

// Nuevo producto
router.post('/', productosController.nuevo);

router.put('/:id', productosController.modificar);

router.post('/login', authControllers.login)


// function token (req, res) {
//   var token = req.headers['authorization']
//   if (!token) {
//     res.status(401).send({
//       error: "Es necesario el token de autenticación"
//     })
//     return
//   }

//   token = token.replace('Bearer ', '')

//   jwt.verify(token, 'Secret Password', function (err, user) {
//     if (err) {
//       res.status(401).send({
//         error: 'Token inválido'
//       })
//     } else {
//       res.send({
//         message: 'Awwwww yeah!!!!'
//       })
//     }
//   })
// }
module.exports = router;