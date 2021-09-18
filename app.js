
const express = require('express')
const app = express()



//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
        express.static('./public/index');
   })





 

app.listen(8000)