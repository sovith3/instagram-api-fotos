const express = require('express');
const ig = require('instagram-node').instagram();
let app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.set('/', (req, res) => {
    res.render('pages/index')
});

app.get('/', function(req, res){

    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit){
       // render the home page and pass in the popular images
       res.render('pages/index', { grams: medias });
    });
  });
  
  // configure instagram app with your access_token
  ig.use({
    access_token: 'ID_TOKEN',
  });

app.listen(8083);

console.log('Escuchando el puerto 8080');
