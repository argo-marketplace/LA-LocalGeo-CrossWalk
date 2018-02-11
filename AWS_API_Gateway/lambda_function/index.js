'use strict';

exports.handler = (event, context, callback) => {
    let long = event.long;
    let lati = event.lati;

    var querypoint = 'Point(' + long + ' ' + lati + ')';
    // var querypoint = 'Point(-118.159953387143 33.8719625444075)';
    const promise = require('bluebird'); // or any other Promise/A+ compatible library;
    const initOptions = {
        promiseLib: promise // overriding the default (ES6 Promise);
    };
    const pgp = require('pg-promise')(initOptions);
    const connection = "postgres://username:password@db2.c8qdkldhfwra.us-east-1.rds.amazonaws.com:5432/db_argo";
    const db = pgp(connection);
    console.log("Start Query");
    var querytext = "SELECT * FROM db_argo WHERE ST_Contains (db_argo.the_geom, ST_GeomFromText('" + querypoint + "', 4326))=TRUE;";
    console.log(querytext);
    db.any(querytext, [true])
        .then(data => {
            console.log('DATA:', data); // print data;
            callback(null, data);
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })
        .finally(db.$pool.end);
};
