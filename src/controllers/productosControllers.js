const mysqlConnection = require('../database.js');


function getAll(req, res) {
    let query = 'SELECT * FROM productos'
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
}

function get(req, res) {
    const {
        id
    } = req.params;
    let query = 'SELECT * FROM productos WHERE id = ?'
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

function eliminar(req, res) {
    const {
        id
    } = req.params;
    let query = 'DELETE FROM productos WHERE id = ?'
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json({
                status: 'producto eliminado'
            });
        } else {
            console.log(err);
        }
    });
}

function nuevo(req, res) {
    const {
        nombre,
        codigo,
        stock,
        precio,
        comentarios
    } = req.body;
    let query = 'INSERT INTO productos (nombre,  codigo, stock, precio, comentarios) VALUES (?,?,?,?,?)'
    mysqlConnection.query(query, [nombre, codigo, stock, precio, comentarios], (err, rows, fields) => {
        if (!err) {
            res.json({
                status: 'producto agregado'
            });
        } else {
            console.log(err);
        }
    })
}

function modificar(req, res) {
    const {
        nombre,
        stock,
        precio,
        comentarios
    } = req.body;
    const {
        id
    } = req.params
    let query = 'UPDATE productos SET nombre= ? , stock = ?, precio = ?, comentarios = ? WHERE id = ?'
    mysqlConnection.query(query, [nombre, stock, precio, comentarios, id], (err, rows, fields) => {
        if (!err) {
            res.json({
                status: 'producto modificado'
            });
        } else {
            console.log(err);
        }
    })
}
module.exports = {
    getAll,
    get,
    eliminar,
    nuevo,
    modificar
}
