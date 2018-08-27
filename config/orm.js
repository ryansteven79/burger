// Import MySQL connection.
var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   };
//   console.log('connected as id ' + connection.threadId);
// });

var orm = {
    read: function (cb) {
        var queryString = "SELECT * FROM burgers ";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result) // line 8-13 on burger_controller.js
        });
    },
    create: function (burger_name, cb) {
        // var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + newName + "', " + wasDevoured + ")";
        // connection.query(queryString, [newName, wasDevoured], function (err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     cb(result);
        // });
        connection.query('INSERT INTO burgers SET ?', {burger_name: burger_name}, function (err, result) {
            if (err) throw err;
            cb(result);
          });
    },
    update: function (devourID, cb) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true},{id: devourID}], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
};
 
module.exports = orm;