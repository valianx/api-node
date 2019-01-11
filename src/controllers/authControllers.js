const mysqlConnection = require('../database.js');
var jwt = require('jsonwebtoken')
const User = require('../models/usuario')

function signUp(req, res) {
    const user = new User({
        name: req.body.name,
        pass: req.body.pass
    })
}

function login(req, res) {
    const {
        name,
        pass
    } = req.body
    let query = 'SELECT * FROM users WHERE name = ? AND password =?'
    mysqlConnection.query(query, [name, pass], (err, rows, fields) => {
        if (rows == 0) {
            res.status(401).send({
                error: 'usuario o contraseña inválidos'
            })
            return
        }
        if(err){
            console.log(err)
        }
        var tokenData = {
            username: name
        }

        var token = jwt.sign(tokenData, 'Secret Password', {
            expiresIn: 60 * 60 * 12
        })

        res.send({
            token
        })
    })
}

module.exports = {
    login,
    signUp
}