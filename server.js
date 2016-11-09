var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var pool= require('pg').pool;

var config = {
            user :'anjali3112soni' ,
            database :'anjali3112soni' ,
            port:'5432',
            host :'db.imad.hasura.imad.io',
            password: process.env.DB_PASSWORD
    
            };

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

/*db_connection---------------------*/
var pool = new Pool(config);


app.get('/text-db', function(req,res){
//DBMSSSSSSSSSSSS 
 pool.query('SELECT *  FROM login', function(err, result) {
      // handle an error from the query
      if(err) 
      {res.send('my name is anjali');}
          else
          {
              res.send(JSON.stringify(result));
          }
      

    });
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/blog.html', function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'blog.html'));
});
app.get('/ui/p5.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p5.jpg'));
});
 /*images-----------------*/
app.get('/ui/p2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p2.jpg'));
});
app.get('/ui/p3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p3.jpg'));
});
app.get('/ui/p4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p4.jpg'));
});
app.get('/ui/p5.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p5.jpg'));
});
/*end_images------------------------------*/

/*HONE_LINK-------------------*/
app.get('/ui/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/git.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'git.png'));
});
app.get('/ui/facebook.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'facebook.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
