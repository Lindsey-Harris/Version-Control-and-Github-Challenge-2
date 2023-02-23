const express = require("express");  //create an instance
const path = require('path');
const app = express();  //instance of express
//always a space between your imports and your code
const { engine } = require('express-handlebars');
const request = require('request');
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 7000;  // creates a port for our server
//when I am in my (pushing to production) stage
//otherwise when I am in my local dev listen at 5000 

// set middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
//set middleware for body parser
//syntax to use body parser so that it will unencode our form
app.use(bodyParser.urlencoded({extended:false}));

// make a request API 
function call_api(finishedAPI, ticker){
    request('https://cloud.iexapis.com/stable/stock/'+ticker+'/quote?token=pk_a550c0454f054464b2282fe926917ce7', {json:true},(err,res,body)=>{
        if(err){return console.log(err);}
        if(res.statusCode === 200){finishedAPI(body)};
    });
};


//Set handlebar routes
app.get('/', function (req, res){
    call_api(function(doneAPI) {
      res.render('home', { 
      stock: doneAPI
      });
    });
});



//create post route 
app.post('/', function (req, res){
   call_api(function(doneAPI) {
     posted_stuff = req.body.stock_ticker; //here we are grabbing the name attribute
     res.render('home', { 
     stock: doneAPI,
   //   posted_stuff: posted_stuff
     });
   }, req.body.stock_ticker); //adding ticker as an argument
});

app.get('/info', function (req, res){
    res.render('info');
});


// set static path
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, ()=> console.log('listening on ' + PORT));




// pk_a550c0454f054464b2282fe926917ce7

