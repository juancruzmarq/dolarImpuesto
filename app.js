
const express = require('express')
const app = express()



//Servir contenido estatico
app.use(express.static('public'));

// app.get('/', (req, res) => {
//         res.send('<h1>Home</h1>')
//     })





 

app.listen(8000)