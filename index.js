const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req,res)=>{
    res.render('index', {
        year : new Date().getFullYear()
    });
});

//partials
hbs.registerPartials(__dirname + '/views/partials');
//configurar mis rutas
app.get('/leonardo', (req,res)=>{
    res.render('leonardo', {
        title: 'Leonardo da Vinci - Su obra',
        icon : '/styles/fonts/android-icon-96x96.png',
        year : new Date().getFullYear()
    });
});

app.get('/picasso', (req,res)=>{
    res.render('picasso', {
        title : 'Picasso - Su obra',
        icon : '/styles/fonts/iconpicasso.png',
        year : new Date().getFullYear()
    });
});

app.get('/vangohg', (req,res)=>{
    res.render('vangohg', {
        title : 'Vicent Van Gogh - Su obra',
        icon : '/styles/fonts/iconvan.png',
        year : new Date().getFullYear()
    });
});

app.get('/frida', (req,res)=>{
    res.render('frida', {
        title : 'Frida Kahlo - su obra',
        icon : '/styles/fonts/iconfridakahlo.png',
        year : new Date().getFullYear()
    });
});

app.get('/acerca', (req,res)=>{
    res.render('acerca', {
        title : 'Acerca de mi - Sitio web dinamico',
        icon : '/styles/fonts/iconNier.png',
        year : new Date().getFullYear()
    });
});

//llamamos al servidor
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
}); 
