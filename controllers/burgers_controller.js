var express = require("express");
var burger = require("./../config/orm.js");
var path = require("path");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.

// Index Redirect
router.get('/', function (req, res) {
    res.redirect('/index');
});

// Render all bugers to handlebars file
router.get("/index", function (req, res) {
    burger.read(function (data) {
        var hbsObject = {burgers: data};
        res.render("index", hbsObject);
        // res.sendFile(path.join(__dirname, "/../views/index.html"));
    });
});

// Create NEW burger
router.post("/api/burgers", function (req, res) {
    burger.create(req.body.burger_name, function () {
        res.redirect("/index");
    });
});

// devour burger!!!
router.post("/burger/devour/:id", function (req, res) {
    var devourID = req.params.id;
    burger.update(devourID,function () {
        res.redirect("/index");
    });
});


// Export routes for server.js to use.
module.exports = router;