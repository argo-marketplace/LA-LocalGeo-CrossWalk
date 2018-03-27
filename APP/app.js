var express = require("express");
var app = express();
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("homea");
});

app.get("/b", function(req, res){
    res.render("homeb");
});

// geocode first, query RDS second
app.get("/addr-results", function(req, res){

    var queryaddr = req.query.physaddress;
    var replaced = queryaddr.split(' ').join('+');
    var apiurl = "https://maps.googleapis.com/maps/api/geocode/json?address="+replaced+"&key=Theapikey";

    fetch(apiurl).then(function(response) {
      return response.json();
    }).then(function(data) {

      var backlon = data.results[0].geometry.location.lng;
      var backlat = data.results[0].geometry.location.lat;
      var fulladdr = data.results[0].formatted_address;

      var queryplace = req.query.place;
      var querypoint = 'Point(' + backlon + ' ' + backlat + ')';
      const promise = require('bluebird'); // or any other Promise/A+ compatible library;
      const initOptions = {
        promiseLib: promise // overriding the default (ES6 Promise);
      };
      const pgp = require('pg-promise')(initOptions);
      const connection = "postgres://username:password@geocrosswalk.c8idj0wb3ddk.us-east-1.rds.amazonaws.com:5432/crosswalk";
      const db = pgp(connection);
      console.log("Start Query");
      if (queryplace == "nyc") {
        var querytext = "SELECT * FROM crosswalk WHERE ST_Contains (crosswalk.the_geom, ST_GeomFromText('" + querypoint + "', 4326))=TRUE;";
      } else {
        var querytext = "SELECT * FROM latable WHERE ST_Contains (latable.the_geom, ST_GeomFromText('" + querypoint + "', 4326))=TRUE;";
      };

      console.log(querytext);
      db.any(querytext, [true])
        .then(data => {
            console.log('DATA:', data); // print data;
            if (queryplace == "nyc") {
                res.render("geocrosswalkNYCa", {fulladdr: fulladdr, data: data});
            } else {
                res.render("geocrosswalkLAa", {fulladdr: fulladdr, data: data});
            }

        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })
        .finally(db.$pool.end); // For immediate app exit, shutting down the connection pool



    }).catch(function() {
      console.log("Booo");
    });


});

// query from AWS RDS directly
app.get("/results", function(req, res){

    var queryplace = req.query.place;
    console.log(queryplace);
    var querypoint = 'Point(' + req.query.lonSearch + ' ' + req.query.latSearch + ')';
    const promise = require('bluebird'); // or any other Promise/A+ compatible library;
    const initOptions = {
        promiseLib: promise // overriding the default (ES6 Promise);
    };
    const pgp = require('pg-promise')(initOptions);
    const connection = "postgres://username:password@geocrosswalk.c8idj0wb3ddk.us-east-1.rds.amazonaws.com:5432/crosswalk";
    const db = pgp(connection);
    console.log("Start Query");
    if (queryplace == "nyc") {
        var querytext = "SELECT * FROM crosswalk WHERE ST_Contains (crosswalk.the_geom, ST_GeomFromText('" + querypoint + "', 4326))=TRUE;";
    } else {
        var querytext = "SELECT * FROM latable WHERE ST_Contains (latable.the_geom, ST_GeomFromText('" + querypoint + "', 4326))=TRUE;";
    };

    console.log(querytext);
    db.any(querytext, [true])
        .then(data => {
            console.log('DATA:', data); // print data;
            var long = req.query.lonSearch;
            var lati = req.query.latSearch;

            if (queryplace == "nyc") {
                res.render("geocrosswalkNYCb", {longVar: long, latiVar: lati, data: data});
            } else {
                res.render("geocrosswalkLAb", {longVar: long, latiVar: lati, data: data});
            }

        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })
        .finally(db.$pool.end); // For immediate app exit, shutting down the connection pool
    });

// get api page
app.get("/api", function(req, res) {
    res.render("apidoc");
});

//return a message when url is wrong
//should put in the end, as order sensitive in routing
app.get("*", function(req, res) {
    res.send("can not find")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started!");
});
