var express = require("express");
var app = express();
var request = require('request');
var pg = require("pg");
var dbgeo = require("dbgeo");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

//demo request to api
// app.get("/results", function(req, res) {
//     var query = 'Point(' + req.query.lonSearch + ' ' + req.query.latSearch + ')';
//     var url = 'http://www.omdbapi.com/?i=tt3896198&apikey=thewdb' + query;
//     request(url, function(error, response, body){
//         if(!error && response.statusCode == 200){
//             var parsedData = JSON.parse(body);
//             var long = req.params.lon;
//             var lati = req.params.lat;
//             //res.send(parsedData['Title']);
//             res.render("geocrosswalk", {longVar: long, latiVar: lati, data: parsedData});
//         }
//     })
// })


// query from AWS RDS directly
app.get("/results", function(req, res){
    var querypoint = 'Point(' + req.query.lonSearch + ' ' + req.query.latSearch + ')';
    // var querypoint = 'Point(-118.159953387143 33.8719625444075)';
    const promise = require('bluebird'); // or any other Promise/A+ compatible library;
    const initOptions = {
        promiseLib: promise // overriding the default (ES6 Promise);
    };
    const pgp = require('pg-promise')(initOptions);
    const connection = "postgres://username:password@rdsEndPoint:5432/DatabaseName";
    const db = pgp(connection);
    console.log("Start Query");
    var querytext = "SELECT * FROM db_argo WHERE ST_Contains (db_argo.the_geom, ST_GeomFromText('" + querypoint + "', 4326))=TRUE;";
    console.log(querytext);
    db.any(querytext, [true])
        .then(data => {
            console.log('DATA:', data); // print data;
            var long = req.query.lonSearch;
            var lati = req.query.latSearch;
            res.render("geocrosswalk", {longVar: long, latiVar: lati, data: data});
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })
        .finally(db.$pool.end); // For immediate app exit, shutting down the connection pool
    });



//return a message when url is wrong
//should put in the end, as order sensitive in routing
app.get("*", function(req, res) {
    res.send("can not find")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started!");
});
