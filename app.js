
const express = require('express')
const app = express()
const port = 8000


//Servir contenido estatico
app.use(express.static(__dirname + 'public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
        res.render('index');
   });



 
   app.listen(port, function() {
        console.log('Our app is running on http://localhost:' + port);
    });