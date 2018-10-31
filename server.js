const express = require('express');
const app = express();
var hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales/');
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    //res.send('Hello World');
    /*let salida = {
        nombre: 'Hector Jeronimo',
        edad: 27,
        url: req.url
    };
    res.send(salida);*/

    res.render('home', {
        nombre: 'heCTor jeROnimo',
        anio: new Date().getFullYear()
    });

});


app.get('/about', (req, res) => {
    res.render('about');
})


app.get('/data', (req, res) => {
    res.send('Hello World creando la url data');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el purto ${port}}`);
});