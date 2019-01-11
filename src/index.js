const express = require('express')
const cors = require('cors')
const app = express()
//settings
app.set('port', process.env.PORT || 3000 )


//middleware
app.use(express.json())
app.use(cors())


//routes
app.use( require('./routes/routes'))

//starting server
app.listen(app.get('port'), ()=>{
    console.log('Server on port '+ app.get('port'))
})