const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'api-node',
    multipleStatements:true
})

mysqlConnection.connect((err)=>{
    if(err){
        console.log(err)
        return
    }else{
        console.log('Conectado a la BD')
    }
});

module.exports = mysqlConnection